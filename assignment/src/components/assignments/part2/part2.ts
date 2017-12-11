import {Component, Vue} from 'vue-property-decorator';
import axios, { AxiosInstance } from 'axios';
// imprt {} from './model/joke'

import './part2.scss';

@Component({
  template: require('./part2.html')
})
export class AssignmentPart2Component extends Vue {

  private readonly url = 'https://icndb.kns-it.de/api/v1/jokes';
  private readonly axios: AxiosInstance;

  /* page sizes used in the dropdown */
  readonly pageSizes: number[] = [1, 5, 10, 20, 50, 100, 200, 500];

  /* currently selected page size */
  currentPageSize: number = 1;

    /* first and last name rendered to the jokes */
    firstName: string = 'Chuck';
    lastName: string = 'Norris';

  /**
   * Default constructor
   * super() call is mandatory
   */
  constructor() {
    super();
    this.axios = axios;
  }

  /**
   * Called after the instance has been mounted
   */
  mounted() {

  }
}
