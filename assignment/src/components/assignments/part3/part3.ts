import { Component, Vue } from 'vue-property-decorator';
import { Person } from './model/person';
import { Observer } from './model/observer';

import './part3.scss';

@Component({
  template: require('./part3.html'),
  components: {}
})
export class AssignmentPart3Component extends Vue {

  private readonly person: Person;
  private readonly personObserver: Observer;

  /**
   * Default constructor
   * super() call is mandatory
   */
  constructor() {
    super();
    this.person = new Person('Hans');
    this.personObserver = new Observer(this.person);
  }

  mounted() {
    this.personObserver.addModelBinding('guid', 'guid');
    this.personObserver.addDOMBinding('firstName', 'firstNameInput');
    this.personObserver.addModelBinding('firstName');
  }

  updatePersonGuid() {
    this.person.updateGuid();
  }
}
