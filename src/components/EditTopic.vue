<template>
  <div id="update-topic">
    <h1>Редактировать категорию</h1>
    <p>
      <router-link :to="{ name: 'AllTopics' }">Вернуться к категориям</router-link>
    </p>
    <notification v-bind:notifications="notifications"></notification>
    <form v-on:submit.prevent="editTopic">
      <div class="form-group">
        <label name="topic_id">ID</label>
        <input type="text" class="form-control" disabled v-model="topic._id" id="topic_id">
      </div>

      <div class="form-group">
        <label name="topic_title">Название</label>
        <input type="text" class="form-control" v-model="topic.title" id="topic_title" required>
      </div>

      <div class="form-group">
        <label name="Topic_image">Картинка</label>
        <input type="text" class="form-control" v-model="topic.imageUrl" id="Topic_imageUrl" required>
      </div>

      <div class="form-group">
        <button class="btn btn-primary">Сохранить</button>
      </div>
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

    editTopic: function () {
      this.$http.patch('http://localhost:3000/api/topics/' + this.$route.params._id, this.topic, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        this.notifications.push({
          type: 'success',
          message: 'Категория успешно обновлена'
        })
      }, (response) => {
        this.notifications.push({
          type: 'danger',
          message: 'Что-то пошло не так'
        })
      })
    }
  },

  components: {
    'notification': Notification
  }
}
</script>
