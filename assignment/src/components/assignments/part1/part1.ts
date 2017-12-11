import {Component, Vue} from 'vue-property-decorator';

import './part1.scss';

@Component({
  template: require('./part1.html')
})
export class AssignmentPart1Component extends Vue {

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
