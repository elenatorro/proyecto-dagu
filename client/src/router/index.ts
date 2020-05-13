import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Course from '../views/Course.vue'
import Subjects from '../views/Subjects.vue'
import CompareCourse from '../views/CompareCourse.vue'
import CompareSubjects from '../views/CompareSubjects.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/grado',
    name: 'Course',
    component: Course
  },
  {
    path: '/asignaturas',
    name: 'Subjects',
    component: Subjects
  },
  {
    path: '/comparador-grados',
    name: 'CompareCourse',
    component: CompareCourse
  },
  {
    path: '/comparador-asignaturas',
    name: 'CompareSubjects',
    component: CompareSubjects
  }
]

const router = new VueRouter({
  routes
})

export default router
