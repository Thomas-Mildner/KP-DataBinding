import {Component} from 'vue-property-decorator';

import './assignment-spec.scss';
import {MarkedBaseComponent} from '../marked-base-component';

@Component({
  template: require('./assignment-spec.html')
})
export class AssignmentSpecComponent extends MarkedBaseComponent {

  /* default value to avoid undefined exceptions */
  compiledMarkdown: string = '';

  constructor() {
    super();
  }

  /**
   * mounted method is called when the view is rendered completely
   */
  async mounted() {
    /* async call to get assignment spec rendered as HTML by marked */
    this.compiledMarkdown = await this.getMarkedText('/assets/AssignmentSpec.md');
  }

}
