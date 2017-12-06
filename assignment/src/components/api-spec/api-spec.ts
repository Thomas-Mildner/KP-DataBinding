import {Component, Vue} from 'vue-property-decorator';
import {Logger} from '../../util/log';
import axios, {AxiosResponse} from 'axios';
import OpenApi from 'vue-openapi/src/OpenApi.vue';
import jsonApi from '../../assets/swagger/swagger.json';

@Component({
  template: require('./api-spec.html'),
  components: {
    OpenApi
  }
})
export class ApiSpecComponent extends Vue {

  protected axios;
  protected logger: Logger;
  jsonApi = {};
  queryParams = '';
  headers = '';

  constructor() {
    super();
    this.axios = axios;
    this.jsonApi = jsonApi;
  }

  mounted() {
    if (!this.logger) this.logger = new Logger();
  }
}
