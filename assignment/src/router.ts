import Vue from 'vue';
import VueRouter, { Location, Route, RouteConfig } from 'vue-router';
import { makeHot, reload } from './util/hot-reload';

const assignmentSpecComponent = () => import('./components/assignment-spec').then(({ AssignmentSpecComponent }) => AssignmentSpecComponent);
const apiSpecComponent = () => import('./components/api-spec').then(({ ApiSpecComponent }) => ApiSpecComponent);
const assignmentComponent = () => import('./components/assignment').then(({ AssignmentComponent: AssignmentComponent }) => AssignmentComponent);
// const homeComponent = () => import(/* webpackChunkName: 'assignment-spec' */'./components/assignment-spec').then(({ AssignmentSpecComponent }) => AssignmentSpecComponent);
// const aboutComponent = () => import(/* webpackChunkName: 'api-spec' */'./components/api-spec').then(({ ApiSpecComponent }) => ApiSpecComponent);
// const listComponent = () => import(/* webpackChunkName: 'assignment' */'./components/assignment').then(({ AssignmentComponent }) => AssignmentComponent);

if (process.env.ENV === 'development' && module.hot) {
  const assignmentSpecModuleId = './components/assignment-spec';
  const apiSpecModuleId = './components/api-spec';
  const assignmentModuleId = './components/assignment';

  // first arguments for `module.hot.accept` and `require` methods have to be static strings
  // see https://github.com/webpack/webpack/issues/5668
  makeHot(assignmentSpecModuleId, assignmentSpecComponent,
    module.hot.accept('./components/assignment-spec', () => reload(assignmentSpecModuleId, (<any>require('./components/assignment-spec')).AssignmentSpecComponent)));

  makeHot(apiSpecModuleId, apiSpecComponent,
    module.hot.accept('./components/api-spec', () => reload(apiSpecModuleId, (<any>require('./components/api-spec')).ApiSpecComponent)));

  makeHot(assignmentModuleId, assignmentComponent,
    module.hot.accept('./components/assignment', () => reload(assignmentModuleId, (<any>require('./components/assignment')).AssignmentComponent)));
}

Vue.use(VueRouter);

export const createRoutes: () => RouteConfig[] = () => [
  {
    path: '/',
    component: assignmentSpecComponent,
  },
  {
    path: '/api-spec',
    component: apiSpecComponent,
  },
  {
    path: '/assignment',
    component: assignmentComponent,
  }
];

export const createRouter = () => new VueRouter({ mode: 'history', routes: createRoutes() });
