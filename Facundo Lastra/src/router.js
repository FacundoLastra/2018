import Vue from 'vue';
import Router from 'vue-router';
import NewPerson from './components/newPerson.vue';
import PersonList from './components/showPersons.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: "home",
      component: PersonList,
    },
    {
      path: '/edit/:id',
      name: "edit",
      component: NewPerson,
      props : true
    },
    {
        path: '/add',
        name: "add",
        component: NewPerson
    }
  ]
})