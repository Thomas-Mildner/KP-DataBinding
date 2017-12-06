import {Component, Vue} from 'vue-property-decorator';
import axios, {AxiosResponse} from 'axios';
import marked from 'marked';
import hljs from 'highlight.js';

import './assignment-spec.scss';

@Component({
  template: require('./assignment-spec.html')
})
export class AssignmentSpecComponent extends Vue {

  private axios: any;
  private renderer: any;
  compiledMarkdown: string = '';

  constructor() {
    super();
    this.axios = axios;
    this.renderer = new marked.Renderer();
    this.renderer.code = function (code, language) {
      return '<pre><code class="hljs ' + language + '">' +
        hljs.highlight(language, code).value +
        '</code></pre>';
    };
  }

  mounted() {
    this.axios.get('/assets/assignment/spec.md').then((response: AxiosResponse<string>) => {
      this.compiledMarkdown = marked(response.data, {
        sanitize: true,
        renderer: this.renderer
      });
    });
  }

}
