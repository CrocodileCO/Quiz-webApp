import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import AllTopics from '@/components/AllTopics'
import CreateTopic from '@/components/CreateTopic'
import DeleteTopic from '@/components/DeleteTopic'
import EditTopic from '@/components/EditTopic'
import Questions from '@/components/Questions'
import CreateQuestion from '@/components/CreateQuestion'
import EditQuestion from '@/components/EditQuestion'
import DeleteQuestion from '@/components/DeleteQuestion'
import Artists from '@/components/rs/Artists'
import EditArtist from '@/components/rs/EditArtist'
import CreateArtist from '@/components/rs/CreateArtist'
import DeleteArtist from '@/components/rs/DeleteArtist'
import CreateArtStyle from '@/components/rs/CreateArtStyle'
import GenerateQuestion from '@/components/GenerateQuestion'
import CreateGroup from '@/components/CreateGroup'
import EditGroup from '@/components/EditGroup'
import RecSystem from '@/components/rs2/RecSystem'
import Criterions from '@/components/rs2/Criterions'
import Callback from '@/components/Callback.vue'

Vue.use(Router)
Vue.use(VueResource)

const router = new Router({
  mode: 'history',
  props: true,
  routes: [
    {
      path: '/',
      name: 'AllTopics',
      component: AllTopics
    },
    {
      path: '/create_topic',
      name: 'CreateTopic',
      component: CreateTopic
    },
    {
      path: '/:topicId/delete_topic',
      name: 'DeleteTopic',
      component: DeleteTopic
    },
    {
      path: '/:topicId/edit_topic',
      name: 'EditTopic',
      component: EditTopic
    },
    {
      path: '/:topicId/questions',
      name: 'Questions',
      component: Questions
    },
    {
      path: '/:topicId/create_questions',
      name: 'CreateQuestion',
      component: CreateQuestion
    },
    {
      path: '/:topicId/:questionId/edit_questions',
      name: 'EditQuestion',
      component: EditQuestion
    },
    {
      path: '/:topicId/:questionId/delete_questions',
      name: 'DeleteQuestion',
      component: DeleteQuestion
    },
    {
      path: '/rs/artists',
      name: 'Artists',
      component: Artists
    },
    {
      path: '/rs/:artistId/edit_artist',
      name: 'EditArtist',
      component: EditArtist
    },
    {
      path: '/rs/create_artist',
      name: 'CreateArtist',
      component: CreateArtist
    },
    {
      path: '/rs/:artistId/delete_artist',
      name: 'DeleteArtist',
      component: DeleteArtist
    },
    {
      path: '/rs/create_artstyle',
      name: 'CreateArtStyle',
      component: CreateArtStyle
    },
    {
      path: '/rs/:topicId/gen_question',
      name: 'GenerateQuestion',
      component: GenerateQuestion
    },
    {
      path: '/create_group',
      name: 'CreateGroup',
      component: CreateGroup
    },
    {
      path: '/:groupId/edit_group',
      name: 'EditGroup',
      component: EditGroup
    },
    {
      path: '/topics/:topicId/rs2',
      name: 'RecSystem',
      component: RecSystem
    },
    {
      path: '/rs2/:recSystemId/criterions',
      name: 'Criterions',
      component: Criterions
    },
    {
      path: '/callback',
      name: 'callback',
      component: Callback
    }
  ]
})

// very basic "setup" of a global guard
router.beforeEach((to, from, next) => {
  if (to.name === 'callback') { // check if "to"-route is "callback" and allow access
    next()
  } else if (router.app.$auth.isAuthenticated()) { // if authenticated allow access
    next()
  } else { // trigger auth0 login
    router.app.$auth.login()
  }
})

export default router
