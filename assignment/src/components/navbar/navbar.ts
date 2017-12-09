import { Collapse, Dropdown } from 'uiv';
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Link } from './link';
import { Logger } from '../../util/log';

@Component({
  template: require('./navbar.html'),
  components: {
    collapse: Collapse,
  }
})
export class NavbarComponent extends Vue {

  protected logger: Logger;

  inverted: boolean = true; // default value

  showNavbar = false;

  object: { default: string } = { default: 'Default object property!' }; // objects as default values don't need to be wrapped into functions

  links: Link[] = [
    new Link('Lecture notes', '/lecture-notes'),
    new Link('Assignment spec', '/'),
    new Link('API-Spec', '/api-spec')
  ];

  assignmentLinks: Link[] = [
    new Link('Part 1', '/assignments/part1'),
    new Link('Part 1 - solution', '/assignments/part1-solution'),
    new Link('Part 2', '/assignments/part2'),
    new Link('Part 2 - solution', '/assignments/part2-solution'),
    new Link('Part 3', '/assignments/part3'),
    new Link('Part 3 - solution', '/assignments/part3-solution')
  ];

  @Watch('$route.path')
  pathChanged() {
    this.logger.info('Changed current path to: ' + this.$route.path);
  }

  mounted() {
    if (!this.logger) this.logger = new Logger();
    this.$nextTick(() => this.logger.info(this.object.default));
  }
}
