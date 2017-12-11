import {Component, Vue} from 'vue-property-decorator';
import {Actor} from './model/actor';

import './part1.scss';

@Component({
  template: require('./part1.html')
})
export class AssignmentPart1SolutionComponent extends Vue {

  favoriteActors: Actor[] = [];
  currentInputActor: Actor;

  constructor() {
    super();
    this.currentInputActor = new Actor();
  }

  addActor() {
    this.favoriteActors.push(this.currentInputActor);
    this.currentInputActor = new Actor();
  }

  mounted() {

  }
}
