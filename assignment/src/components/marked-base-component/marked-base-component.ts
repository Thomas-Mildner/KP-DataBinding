import {Vue} from 'vue-property-decorator';
import axios from 'axios';
import marked from 'marked';
import hljs from 'highlight.js';

export class MarkedBaseComponent extends Vue {
  private axios: any;
  private renderer: any;

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

  protected async getMarkedText(markdownUrl: string) {
    let response = await this.axios.get(markdownUrl);
    return marked(response.data, {
      sanitize: true,
      renderer: this.renderer
    });
  }
}
