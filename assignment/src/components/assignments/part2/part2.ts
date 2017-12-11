import {Component, Vue} from 'vue-property-decorator';

import './part2.scss';

@Component({
  template: require('./part2.html')
})
export class AssignmentPart2Component extends Vue {

  /**
   * Default constructor
   * super() call is mandatory
   */
  constructor() {
    super();
  }

  /**
   * Called after the instance has been mounted
   */
  mounted() {

  }
}
