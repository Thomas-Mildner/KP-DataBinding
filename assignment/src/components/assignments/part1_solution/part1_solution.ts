import {Component, Vue} from 'vue-property-decorator';
import {Actor} from './model/actor';

import './part1.scss';

@Component({
  template: require('./part1.html')
})
export class AssignmentPart1SolutionComponent extends Vue {

  /* initialize with empty array to avoid undefined errors */
  favoriteActors: Actor[] = [];
  currentInputActor: Actor;

  /**
   * Default constructor
   * super() call is mandatory
   * initializes currentInputActor to avoid undefined errors
   */
  constructor() {
    super();
    this.currentInputActor = new Actor();
  }

  /**
   * add the currently edited actor to the favorite actors
   * afterwards create a new empty actor for the form binding
   */
  addActor() {
    this.favoriteActors.push(this.currentInputActor);
    this.currentInputActor = new Actor();
  }
}
