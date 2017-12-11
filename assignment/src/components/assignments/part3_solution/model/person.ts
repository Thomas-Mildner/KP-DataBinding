export class Person {

  guid: string;
  firstName: string;

  constructor(firstName: string) {
    this.firstName = firstName;
    this.updateGuid();
  }

  updateGuid() {
    this.guid = this.generateGuid();
    console.log(this.guid);
  }

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
