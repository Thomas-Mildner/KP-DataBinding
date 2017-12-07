import {Component} from 'vue-property-decorator';
import './lecture-notes.scss';
import {MarkedBaseComponent} from '../marked-base-component';

@Component({
  template: require('./lecture-notes.html'),
  components: {}
})
export class LectureNotesComponent extends MarkedBaseComponent {

  compiledMarkdown: string = '';

  constructor() {
    super();
  }

  async mounted() {
    this.compiledMarkdown = await this.getMarkedText('/assets/lecture-notes/notes.md');
  }
}
