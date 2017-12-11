import { Component, Vue } from 'vue-property-decorator';
import { Person } from './model/person';
import { Observer, Watcher } from './model/observer';

import './part3.scss';

@Component({
  template: require('./part3.html')
})
export class AssignmentPart3SolutionComponent extends Vue {

  private personObserver: Observer;
  person: Person;

  constructor() {
    super();
    this.person = new Person('Hans');
    this.personObserver = new Observer(this.person);
  }

  mounted() {
    this.personObserver.addModelBinding('guid', 'guid');
    this.personObserver.addDOMBinding('firstName', 'firstNameInput', 'firstName');
  }

  updatePersonGuid() {
    this.person.updateGuid();
  }

}
