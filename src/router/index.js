import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import AllTopics from '@/components/AllTopics'
import CreateTopic from '@/components/CreateTopic'
import DeleteTopic from '@/components/DeleteTopic'
import EditTopic from '@/components/EditTopic'

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
    }
  ]
})
