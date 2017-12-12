/**
 * Very simple Oberserver implementation
 * inspired by Vue.js original implementation:
 * https://github.com/vuejs/vue/blob/dev/src/core/observer/index.js
 */
export class Observer<TModel extends Object> {
    /**
     * object instance which is observed
     */
    private value: TModel;

    /**
     * Dependency instance to manage all change handlers
     */
    private dep: Dependency<TModel>;

    /**
     * Default constructor
     * initializes the dependency instance and creates proxy getters and setters for all object properties
     * @param value instance to observe
     */
    constructor(value: TModel) {
        this.value = value;
        this.dep = new Dependency();
        if (!Array.isArray(value)) {
            this.walk(value);
        }
    }

    /**
     * Create a simple one-way binding from the model to the DOM
     * @param propertyName name of the property to bind
     * @param domId ID of the DOM element where content of property should be placed
     */
    addModelBinding<K extends keyof TModel>(propertyName: K, domId: string = propertyName) {
        this.dep.addSub(new ModelBinder(propertyName, this.value, domId));
    }

    /**
     * Create a simple one-way binding to move changes from a GUI element to the model
     * @param propertyName name of the property to bind
     * @param inputDomId ID of the input DOM element which will be 'observed' for changes
     * @param outputDomId ID of the DOM element where property value should be placed
     */
    addDOMBinding<K extends keyof TModel>(propertyName: K, inputDomId: string) {
        new DOMBinder(propertyName, this.value, inputDomId);
    }

    /**
     * Iterate all properties of the given object and add reactive getters
     * @param obj obj to transform
     */
    private walk(obj: TModel) {
        for (let key of Object.keys(obj)) {
            this.defineReactive(obj, key, obj[key]);
        }
    }

    /**
     * Modify or create getters and setters to proxy call to the setters to react to changes
     * @param obj instance where proxy setter should be created
     * @param key key/name of the property to proxy
     * @param value value to the key
     */
    private defineReactive(obj: TModel, key: string, value: any) {
        /* need to convert to local instance as 'this' refers to the function scope in the anonymous getter and setter */
        let dep = this.dep;

        /* retrieve the property if present */
        let prop = Object.getOwnPropertyDescriptor(obj, key);
        let getter = prop.get;
        let setter = prop.set;

        /* redefine property */
        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            /* Getter */
            get: function reactiveGetter() {
                /* if there was a getter present invoke it otherwise return local variable value */
                return getter ? getter.call(obj) : value;
            },
            /* setter */
            set: function reactiveSetter(newVal) {
                /* retrieve the current value */
                let val = getter ? getter.call(obj) : value;
                /* avoid additional overhead by checking if the value is still the same */
                if (newVal === val) return;
                /* if setter was already present invoke it to set the value in the object */
                if (setter) {
                    setter.call(obj, newVal);
                } else {
                    value = newVal;
                }
                /* notify dependencies */
                dep.notify();
            }
        });
    }

}

/**
 * Dependency wrapper to store dependencies and notify them at once
 */
class Dependency<TModel> {

    private subscriptions: ModelBinder<TModel>[];

    /**
     * Default constructor
     */
    constructor() {
        this.subscriptions = [];
    }

    /**
     * Add a new subscription
     * every registered subscription will be notified if the value of a property is changing
     * @param subscription subscription to add
     */
    addSub(subscription: ModelBinder<TModel>) {
        this.subscriptions.push(subscription);
    }

    /**
     * Notify all dependencies that a property was updated
     */
    notify() {
        for (let s of this.subscriptions) {
            s.update();
        }
    }
}

/**
 * Binder to couple a model property to a view element
 */
class ModelBinder<TModel> {
    private readonly propertyName: string;
    private readonly obj: TModel;
    private readonly domElement: HTMLElement;

    /**
     * Default constructor
     * @param propertyName name of the property to bind
     * @param obj object instance to use for value retrieving
     * @param domId DOM ID of the element where property value should be placed
     */
    constructor(propertyName: string, obj: TModel, domId: string) {
        this.propertyName = propertyName;
        this.obj = obj;
        this.domElement = document.getElementById(domId);

        /* initially transfer the data */
        this.bind();
    }

    /**
     * Invoke callback to handle update
     */
    update() {
        this.bind();
    }

    /**
     * utility method to transfer the data to the view
     */
    private bind() {
        if (this.domElement instanceof HTMLInputElement) {
            this.domElement.value = this.obj[this.propertyName];
        } else {
            this.domElement.innerText = this.obj[this.propertyName];
        }
    }
}

/**
 * Binder to couple the value of an input element to a object property
 */
class DOMBinder<TModel> {
    private obj: TModel;
    private propertyName: string;
    private inputDomId: string;

    /**
     * Default constructor
     * @param propertyName name of the property to update from the input element
     * @param obj object instance to use for value storing
     * @param inputDomId DOM ID of the input element to observe
     */
    constructor(propertyName: string, obj: TModel, inputDomId: string) {
        this.obj = obj;
        this.propertyName = propertyName;
        this.inputDomId = inputDomId;
        this.registerEventHandler();
    }

    /**
     * Utility method to handle the registration of the input handler
     */
    private registerEventHandler() {
        let domElem = document.getElementById(this.inputDomId);
        if (domElem instanceof HTMLInputElement) {
            /* element has to be an HTMLInputElement because otherwise it does not have the property 'value' */
            let inputElem = domElem as HTMLInputElement;
            /* initial forward sync */
            inputElem.value = this.obj[this.propertyName];

            /* register the actual handler */
            inputElem.oninput = (e: Event) => {
                this.obj[this.propertyName] = inputElem.value;
            };
        } else {
            throw new Error('Passed DOM ID does not point to an input element');
        }
    }

}
