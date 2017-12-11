import {Component} from 'vue-property-decorator';
import './lecture-notes.scss';
import {MarkedBaseComponent} from '../marked-base-component';

@Component({
  template: require('./lecture-notes.html'),
  components: {}
})
export class LectureNotesComponent extends MarkedBaseComponent {

  /* default value to avoid undefined exceptions */
  compiledMarkdown: string = '';

  /**
   * Default constructor
   * super() call is mandatory
   */
  constructor() {
    super();
  }

  /**
   * mounted method is called when the view is rendered completely
   */
  async mounted() {
    /* async call to get lecture notes rendered as HTML by marked */
    this.compiledMarkdown = await this.getMarkedText('/assets/LectureNotes.md');
  }
}
