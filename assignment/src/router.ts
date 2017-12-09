import Vue from 'vue';
import VueRouter, {Location, Route, RouteConfig} from 'vue-router';
import {makeHot, reload} from './util/hot-reload';

const assignmentSpecComponent = () => import('./components/assignment-spec').then(({AssignmentSpecComponent}) => AssignmentSpecComponent);
const apiSpecComponent = () => import('./components/api-spec').then(({ApiSpecComponent}) => ApiSpecComponent);
const lectureNotesComponent = () => import('./components/lecture-notes').then(({LectureNotesComponent: LectureNotesComponent}) => LectureNotesComponent);
const assignmentPart1Component = () => import('./components/assignments/part1/index').then(({AssignmentPart1Component: AssignmentPart1Component}) => AssignmentPart1Component);
const assignmentPart1SolutionComponent = () => import('./components/assignments/part1_solution/index').then(({AssignmentPart1SolutionComponent: AssignmentPart1SolutionComponent}) => AssignmentPart1SolutionComponent);
const assignmentPart2Component = () => import('./components/assignments/part2/index').then(({AssignmentPart2Component: AssignmentPart2Component}) => AssignmentPart2Component);
const assignmentPart2SolutionComponent = () => import('./components/assignments/part2_solution/index').then(({AssignmentPart2SolutionComponent: AssignmentPart2SolutionComponent}) => AssignmentPart2SolutionComponent);
const assignmentPart3Component = () => import('./components/assignments/part3/index').then(({AssignmentPart3Component: AssignmentPart3Component}) => AssignmentPart3Component);
const assignmentPart3SolutionComponent = () => import('./components/assignments/part3_solution/index').then(({AssignmentPart3SolutionComponent: AssignmentPart3SolutionComponent}) => AssignmentPart3SolutionComponent);

if (process.env.ENV === 'development' && module.hot) {
  const assignmentSpecModuleId = './components/assignments-spec';
  const apiSpecModuleId = './components/api-spec';
  const lectureNotesModuleId = './components/lecture-notes';
  const assignmentPart1ModuleId = './components/assignments/part1';
  const assignmentPart1SolutionModuleId = './components/assignments/part1_solution';
  const assignmentPart2ModuleId = './components/assignments/part2';
  const assignmentPart2SolutionModuleId = './components/assignments/part2_solution';
  const assignmentPart3ModuleId = './components/assignments/part3';
  const assignmentPart3SolutionModuleId = './components/assignments/part3_solution';

  // first arguments for `module.hot.accept` and `require` methods have to be static strings
  // see https://github.com/webpack/webpack/issues/5668
  makeHot(assignmentSpecModuleId, assignmentSpecComponent,
    module.hot.accept('./components/assignment-spec', () => reload(assignmentSpecModuleId, (<any>require('./components/assignment-spec')).AssignmentSpecComponent)));

  makeHot(apiSpecModuleId, apiSpecComponent,
    module.hot.accept('./components/api-spec', () => reload(apiSpecModuleId, (<any>require('./components/api-spec')).ApiSpecComponent)));

  makeHot(lectureNotesModuleId, lectureNotesComponent,
    module.hot.accept('./components/lecture-notes', () => reload(lectureNotesModuleId, (<any>require('./components/lecture-notes')).LectureNotesComponent)));

  makeHot(assignmentPart1ModuleId, assignmentPart3Component,
    module.hot.accept('./components/assignments/part1', () => reload(assignmentPart1ModuleId, (<any>require('./components/assignments/part1/index')).AssignmentPart1Component)));

  makeHot(assignmentPart1SolutionModuleId, assignmentPart3SolutionComponent,
    module.hot.accept('./components/assignments/part1_solution', () => reload(assignmentPart1SolutionModuleId, (<any>require('./components/assignments/part1_solution/index')).AssignmentPart1SolutionComponent)));

  makeHot(assignmentPart2ModuleId, assignmentPart2Component,
    module.hot.accept('./components/assignments/part2', () => reload(assignmentPart2ModuleId, (<any>require('./components/assignments/part2/index')).AssignmentPart2Component)));

  makeHot(assignmentPart2SolutionModuleId, assignmentPart2SolutionComponent,
    module.hot.accept('./components/assignments/part2_solution', () => reload(assignmentPart2SolutionModuleId, (<any>require('./components/assignments/part2_solution/index')).AssignmentPart2SolutionComponent)));

  makeHot(assignmentPart3ModuleId, assignmentPart3Component,
    module.hot.accept('./components/assignments/part3', () => reload(assignmentPart3ModuleId, (<any>require('./components/assignments/part3/index')).AssignmentPart3Component)));

  makeHot(assignmentPart3SolutionModuleId, assignmentPart3SolutionComponent,
    module.hot.accept('./components/assignments/part3_solution', () => reload(assignmentPart3SolutionModuleId, (<any>require('./components/assignments/part3_solution/index')).AssignmentPart3SolutionComponent)));
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
    path: '/lecture-notes',
    component: lectureNotesComponent
  },
  {
    path: '/assignments/part1',
    component: assignmentPart1Component,
  },
  {
    path: '/assignments/part1-solution',
    component: assignmentPart1SolutionComponent,
  },
  {
    path: '/assignments/part2',
    component: assignmentPart2Component,
  },
  {
    path: '/assignments/part2-solution',
    component: assignmentPart2SolutionComponent,
  },
  {
    path: '/assignments/part3',
    component: assignmentPart3Component,
  },
  {
    path: '/assignments/part3-solution',
    component: assignmentPart3SolutionComponent,
  }
];

export const createRouter = () => new VueRouter({mode: 'history', routes: createRoutes()});
