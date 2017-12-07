import {Component} from 'vue-property-decorator';

import './assignment-spec.scss';
import {MarkedBaseComponent} from '../marked-base-component';

@Component({
  template: require('./assignment-spec.html')
})
export class AssignmentSpecComponent extends MarkedBaseComponent {

  compiledMarkdown: string = '';

  constructor() {
    super();
  }

  async mounted() {
    this.compiledMarkdown = await this.getMarkedText('/assets/assignment/spec.md');
  }

}
