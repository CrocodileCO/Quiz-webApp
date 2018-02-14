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

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
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
      path: '/delete_topic',
      name: 'DeleteTopic',
      component: DeleteTopic
    },
    {
      path: '/edit_topic',
      name: 'EditTopic',
      component: EditTopic
    },
    {
      path: '/questions',
      name: 'Questions',
      component: Questions
    },
    {
      path: '/create_questions',
      name: 'CreateQuestion',
      component: CreateQuestion
    },
    {
      path: '/edit_questions',
      name: 'EditQuestion',
      component: EditQuestion
    },
    {
      path: '/delete_questions',
      name: 'DeleteQuestion',
      component: DeleteQuestion
    }
  ]
})
