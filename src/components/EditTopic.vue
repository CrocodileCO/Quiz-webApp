<template>
  <div id="update-topic">
    <h1>Редактировать категорию</h1>
    <p>
      <router-link :to="{ name: 'AllTopics' }">Вернуться к категориям</router-link>
    </p>
    <notification v-bind:notifications="notifications"></notification>
    <div class="row">
      <div class="col-md-6">
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
      <div class="col-md-6">
        <img v-show="topic.imageUrl" v-bind:src="topic.imageUrl"  alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Notification from './notifications.vue'
import config from '../config'

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
      this.$http.get(config.api.uri + 'topics/' + this.$route.params._id).then((response) => {
        this.topic = response.body
      }, (response) => {

      })
    },

    editTopic: function () {
      this.$http.patch(config.api.uri + 'topics/' + this.$route.params._id, this.topic, {
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

<style scoped>
  img {
    max-width: 500px;
    max-height: 500px;
  }
</style>
