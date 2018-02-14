<template>
  <div id="delete-topic">
    <h1>Удалить категорию {{ topic.title }}</h1>
    <p>
      <router-link :to="{ name: 'AllTopics' }">Вернуться к категориям</router-link>
    </p>

    <notification v-bind:notifications="notifications"></notification>

    <form v-on:submit.prevent="deleteTopic">
      <p><button class="btn btn-danger">Удалить категорию</button></p>
    </form>
  </div>
</template>

<script>
import Notification from './notifications.vue'

export default {
  data () {
    return {
      topic: {},
      notifications: []
    }
  },

  created: function () {
    this.getTopic()
  },

  methods: {
    getTopic: function () {
      this.$http.get('http://localhost:3000/api/topics/' + this.$route.params._id).then((response) => {
        this.topic = response.body
      }, (response) => {

      })
    },

    deleteTopic: function () {
      this.$http.delete('http://localhost:3000/api/topics/' + this.$route.params._id, this.topic, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        this.$router.push({
          name: 'AllTopics'
        })
      }, (response) => {
        this.notifications.push({
          type: 'danger',
          message: 'Категория не была удалена, что-то пошло не так'
        })
      })
    }
  },

  components: {
    'notification': Notification
  }
}
</script>
