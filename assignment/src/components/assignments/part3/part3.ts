import {Component, Vue} from 'vue-property-decorator';

import './part3.scss';

@Component({
  template: require('./part3.html'),
  components: {}
})
export class AssignmentPart3Component extends Vue {

  private url = 'https://icndb.kns-it.de/api/v1/jokes?page_size=';

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
