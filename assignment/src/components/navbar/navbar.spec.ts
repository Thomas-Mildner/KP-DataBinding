import Vue from 'vue';
import VueRouter from 'vue-router';
import Component from 'vue-class-component';
import { spy, assert } from 'sinon';
import { expect } from 'chai';
import { ComponentTest, MockLogger } from '../../util/component-test';
import { NavbarComponent } from './navbar';

let loggerSpy = spy();

@Component({
  template: require('./navbar.html')
})
class MockNavbarComponent extends NavbarComponent {
  constructor() {
    super();
    this.logger = new MockLogger(loggerSpy);
  }
}

describe('Navbar component', () => {
  let directiveTest: ComponentTest;
  let router: VueRouter;

  before(() => {
    Vue.use(VueRouter);
    directiveTest = new ComponentTest('<div><navbar></navbar><router-view>loading...</router-view></div>', { 'navbar': MockNavbarComponent });

    let homeComponent = { template: '<div class="assignments-spec">Home</div>' };
    let aboutComponent = { template: '<div class="api-spec">About</div>' };
    let listComponent = { template: '<div class="assignments">List</div>' };

    router = new VueRouter({
      routes: [
        { path: '/', component: homeComponent },
        { path: '/api-spec', component: aboutComponent },
        { path: '/assignments', component: listComponent }
      ]
    });
  });

  it('should render correct contents', async () => {
    directiveTest.createComponent({ router: router });

    await directiveTest.execute((vm) => { // ensure Vue has bootstrapped/run change detection
      debugger;
      assert.calledWith(loggerSpy, 'Default object property!');
      expect(vm.$el.querySelectorAll('ul.nav li').length).to.equal(3);
    });
  });

  describe('When clicking the api-spec link', () => {
    beforeEach(async () => {
      directiveTest.createComponent({ router: router });

      await directiveTest.execute((vm) => {
        let anchor = <HTMLAnchorElement>vm.$el.querySelector('ul.nav li a[href="#/api-spec"]');
        anchor.click();
      });
    });

    it('should render correct api-spec contents', async () => {
      await directiveTest.execute((vm) => {
        expect(vm.$el.querySelector('div.about').textContent).to.equal('About');
      });
    });
  });

  describe('When clicking the assignments link', () => {
    beforeEach(async () => {
      directiveTest.createComponent({ router: router });

      await directiveTest.execute((vm) => {
        let anchor = <HTMLAnchorElement>vm.$el.querySelector('ul.nav li a[href="#/assignments"]');
        anchor.click();
      });
    });

    it('should render correct api-spec contents', async () => {
      await directiveTest.execute((vm) => {
        expect(vm.$el.querySelector('div.list').textContent).to.equal('List');
      });
    });
  });

});
