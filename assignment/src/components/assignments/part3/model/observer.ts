/**
 * Very simple Observer implementation
 * inspired by Vue.js original implementation:
 * https://github.com/vuejs/vue/blob/dev/src/core/observer/index.js
 */
export class Observer {

    private readonly value: any;

    /**
     * Default constructor
     * initializes the dependency instance and creates proxy getters and setters for all object properties
     * @param value instance to observe
     */
    constructor(value: any) {
        this.value = value;
        /* TODO add or proxy getter and setters to be aware of changes on the model
        * see also: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty */
    }

    addModelBinding(propertyName: string, domId: string = propertyName) {
        /* TODO create a new ModelBinder instance and register it */
    }

    addDOMBinding(propertyName: string, domId: string = propertyName) {
        /* TODO create a new DOMBinder - depending on your implementation a special registration is not needed */
    }
}

/**
 * Dependency wrapper to store dependencies and notify them at once
 */
class Dependency {
    /* TODO manage subscriptions
     * implement `notify()` to trigger callbacks */
}

/**
 * Binder to couple a model property to a view element
 */
class ModelBinder {
    private readonly propertyName: string;
    private readonly obj: any;
    private readonly domElement: HTMLElement;

    /**
     * Default constructor
     * @param propertyName name of the property to bind
     * @param obj object instance to use for value retrieving
     * @param domId DOM ID of the element where property value should be placed
     */
    constructor(propertyName: string, obj: any, domId: string) {
        this.propertyName = propertyName;
        this.obj = obj;
        this.domElement = document.getElementById(domId);
    }

    /* TODO handle model changes by updating the UI
     * this would result in template rerendering in Vue.js but we have no templates so...let's update the `innerText`  */
}

/**
 * Binder to couple the value of an input element to a object property
 */
class DOMBinder {
    private obj: any;
    private propertyName: string;
    private inputDomId: string;

    /**
     * Default constructor
     * @param propertyName name of the property to update from the input element
     * @param obj object instance to use for value storing
     * @param inputDomId DOM ID of the input element to observe
     */
    constructor(propertyName: string, obj: any, inputDomId: string) {
        this.obj = obj;
        this.propertyName = propertyName;
        this.inputDomId = inputDomId;
    }

    /* TODO register a input handler to update the model whenever necessary
     * the easiest way to achieve this is domElem.oninput = ...
     * remember that you have to cast the retrieved element to an instance of HTMLInputElement to access the `value` property */
}
