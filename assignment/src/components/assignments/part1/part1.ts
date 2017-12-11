import { Component, Vue } from 'vue-property-decorator';
import { Actor } from './model/actor';

import './part1.scss';

@Component({
  template: require('./part1.html')
})
export class AssignmentPart1Component extends Vue {

  /* initialize with empty array to avoid undefined errors */
  favoriteActors: Actor[] = [];
  currentInputActor: Actor;

  /**
   * Default constructor
   * super() call is mandatory
   */
  constructor() {
    super();
    this.currentInputActor = new Actor();
  }

  /**
   * Called after the instance has been mounted
   */
  mounted() {

  }
}
