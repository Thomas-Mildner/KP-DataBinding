import {Component, Vue} from 'vue-property-decorator';
import axios, {AxiosInstance} from 'axios';
import {Joke, JokesArrayResponse, FormattableJoke} from './models/Joke';

import './part2.scss';

@Component({
  template: require('./part2.html')
})
export class AssignmentPart2SolutionComponent extends Vue {
  private url = 'https://icndb.kns-it.de/api/v1/jokes?page_size=';
  private axios: AxiosInstance;

  items: Joke[] = [];
  pageSizes: number[] = [1, 5, 10, 20, 50, 100, 200, 500];
  currentPageSize: number = 1;
  firstName: string = 'Chuck';
  lastName: string = 'Norris';

  constructor() {
    super();
    this.axios = axios;
  }

  async mounted() {
    await this.loadItems();
  }

  async updatePageSize(newSize: number) {
    this.currentPageSize = newSize;
    await this.loadItems();
  }

  private async loadItems() {
    let temp: JokesArrayResponse = (await this.axios.get(this.url + this.currentPageSize)).data;
    this.items = [];
    for (let j of temp.jokes) {
      this.items.push(new FormattableJoke(j));
    }
  }
}
