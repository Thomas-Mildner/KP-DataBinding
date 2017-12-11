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

  jsonApi: any;

  constructor() {
    super();
    /* assign loaded JSON object to the API */
    this.jsonApi = jsonApi;
  }

  mounted() {
  }
}
