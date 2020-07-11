import Vue from 'vue';
import VueRouter from 'vue-router';
import * as Models from '@/api/index';
import { resolveCRUDComponent } from '@/utils/helper';

Vue.use(VueRouter);

function resourceRoutes(name, model) {
  return [
    {
      crudKey: 'list',
      name: `${name} Liste`,
      path: model.route,
      component: resolveCRUDComponent(name, 'list'),
      props: { model },
    },
    {
      crudKey: 'details',
      name: `${name} Details`,
      path: `${model.route}/:id`,
      component: resolveCRUDComponent(name, 'details'),
      props: { model },
    },
  ];
}

const modelRoutes = Object.entries(Models)
  .map(([name, model]) => (
    resourceRoutes(
      name,
      model,
    ).filter(({ crudKey }) => model.operations.includes(crudKey))
  ));

console.log(modelRoutes);

const routes = [
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '../views/Index.vue'),
    children: modelRoutes.flat(),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
