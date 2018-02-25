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
    },
    {
      path: 'rs/artists',
      name: 'Artists',
      component: Artists
    },
    {
      path: 'rs/edit_artist',
      name: 'EditArtist',
      component: EditArtist
    },
    {
      path: 'rs/create_artist',
      name: 'CreateArtist',
      component: CreateArtist
    },
    {
      path: 'rs/delete_artist',
      name: 'DeleteArtist',
      component: DeleteArtist
    }
  ]
})
