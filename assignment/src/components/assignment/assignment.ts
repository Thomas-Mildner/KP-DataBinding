import {Component, Vue} from 'vue-property-decorator';

import './assignment.scss';

@Component({
  template: require('./assignment.html'),
  components: {}
})
export class AssignmentComponent extends Vue {

  private url = 'https://icndb.kns-it.de/api/v1/jokes?page_size=';

  constructor() {
    super();
  }

  mounted() {
    this.$nextTick(() => {
    });
  }
}
