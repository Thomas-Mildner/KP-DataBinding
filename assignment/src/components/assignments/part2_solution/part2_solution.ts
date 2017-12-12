import { Component, Vue } from 'vue-property-decorator';
import axios, { AxiosInstance } from 'axios';
import { Joke, JokesArrayResponse, FormattableJoke } from './models/Joke';

import './part2.scss';

@Component({
  template: require('./part2.html')
})
export class AssignmentPart2SolutionComponent extends Vue {
  private url = 'https://icndb.kns-it.de/api/v1/jokes?page_size=';
  private axios: AxiosInstance;

  /* array of jokes to display */
  items: Joke[] = [];

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
   * assigns the imported axios instance
   */
  constructor() {
    super();
    this.axios = axios;
  }

  /**
   * Called after the instance has been mounted
   * Load initial items
   */
  async mounted() {
    await this.loadItems();
  }

  /**
   * Async update of the items
   * Is triggered by a click event
   * Always executes a HTTP call - this is not best practice but far easier to understand as service wrapping
   * @param newSize new page size selected in the dropdown
   */
  async updatePageSize(newSize: number) {
    this.currentPageSize = newSize;
    await this.loadItems();
  }

  /**
   * Helper method to load the joke items
   * executes the HTTP call with axios and converts the Jokes to FormattableJokes to be able to change first and last name afterwards
   */
  private async loadItems() {
    let temp: JokesArrayResponse = (await this.axios.get(`${this.url}${this.currentPageSize}`)).data;
    this.items = [];
    for (let j of temp.jokes) {
      this.items.push(new FormattableJoke(j));
    }
  }
}
