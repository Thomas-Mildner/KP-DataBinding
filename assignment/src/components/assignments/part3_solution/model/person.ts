export class Person {

  private _firstName: string;
  private _guid: string;

  /**
   * random pseudo GUID
   */
  get guid(): string {
    return this._guid;
  }

  set guid(newGuid: string) {
    this._guid = newGuid;
    console.log(newGuid);
  }

  /**
   * Name for two-way binding sample
   */
  get firstName(): string {
    return this._firstName;
  }

  set firstName(firstName: string) {
    this._firstName = firstName;
    console.log(firstName);
  }

  /**
   * Default constructor
   * initializes guid property with a default random pseudo GUID
   * @param firstName default name
   */
  constructor(firstName: string) {
    this.firstName = firstName;
    this.updateGuid();
  }

  /**
   * set a new pseudo GUID to trigger reactive property
   */
  updateGuid() {
    this.guid = this.generateGuid();
  }

  /**
   * Hack to generate pseudo GUIDs
   * "borrowed" from StackOverflow
   */
  private generateGuid() {
    let s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    };
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }
}
