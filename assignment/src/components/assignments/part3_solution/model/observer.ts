export class Observer {
  private value: any;
  private dep: Dep;

  constructor(value: any) {
    this.value = value;
    this.dep = new Dep();
    if (!Array.isArray(value)) {
      this.walk(value);
    }
  }

  addModelBinding(propertyName: string, domId: string = propertyName) {
    this.dep.addSub(new ModelBinder(propertyName, this.value, domId));
  }

  addDOMBinding(propertyName: string, inputDomId: string, outputDomId: string) {
    this.dep.addSub(new DOMBinder(propertyName, this.value, inputDomId, outputDomId));
  }

  private walk(obj: Object) {
    for (let key of Object.keys(obj)) {
      this.defineReactive(obj, key, obj[key]);
    }
  }

  private defineReactive(obj: Object, key: string, value: any) {
    let dep = this.dep;
    let prop = Object.getOwnPropertyDescriptor(obj, key);
    let getter = prop.get;
    let setter = prop.set;

    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter() {
        return getter ? getter.call(obj) : value;
      },
      set: function reactiveSetter(newVal) {
        let val = getter ? getter.call(obj) : value;
        if (newVal === val) return;
        if (setter) {
          setter.call(obj, newVal);
        } else {
          value = newVal;
        }
        dep.notify(key);
      }
    });
  }

}

export class Dep {

  private subscriptions: Watcher[];

  constructor() {
    this.subscriptions = [];
  }

  addSub(subscription: Watcher) {
    this.subscriptions.push(subscription);
  }

  notify(key: string) {
    for (let s of this.subscriptions) {
      s.update(key);
    }
  }
}

export class Watcher {

  private callback: (key: string) => void;

  constructor(callback: (key: string) => void) {
    this.callback = callback;
  }

  update(key: string) {
    this.callback(key);
  }
}

class ModelBinder extends Watcher {
  protected propertyName: string;
  protected obj: any;
  protected domId: string;

  constructor(propertyName: string, obj: any, domId: string) {
    super((key: string) => {
      if (propertyName === key) {
        this.bind();
      }
    });

    this.propertyName = propertyName;
    this.obj = obj;
    this.domId = domId;

    this.bind();
  }

  private bind() {
    let dom = document.getElementById(this.domId);
    if (dom instanceof HTMLInputElement) {
      dom.value = this.obj[this.propertyName];
    } else {
      dom.innerText = this.obj[this.propertyName];
    }
  }
}

class DOMBinder extends ModelBinder {
  private inputDomId: string;

  constructor(propertyName: string, obj: any, inputDomId: string, outputDomId: string) {
    super(propertyName, obj, outputDomId);
    this.inputDomId = inputDomId;
    this.registerEventHandler();
  }

  private registerEventHandler() {
    let domElem = document.getElementById(this.inputDomId);
    if (domElem instanceof HTMLInputElement) {
      let inputElem = domElem as HTMLInputElement;
      inputElem.value = this.obj[this.propertyName];
      inputElem.oninput = (e: Event) => {
        this.obj[this.propertyName] = inputElem.value;
      };
    }
  }

}
