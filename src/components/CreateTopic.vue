<template>
  <div id="create-topic">
    <h1>Создать категорию</h1>
    <p>
      <router-link :to="{ name: 'AllTopics' }">Вернуться к категориям</router-link>
    </p>
    <notification v-bind:notifications="notifications"></notification>
    <div class="row">
      <div class="col-md-6">
        <form v-on:submit.prevent="addTopic">
        <div class="form-group">
          <label name="Topic_title">Название</label>
          <input type="text" class="form-control" v-model="topic.title" id="Topic_title" required>
        </div>
        <div class="form-group">
          <label name="Topic_image">Url картинки</label>
          <input type="text" class="form-control" v-model="topic.imageUrl" id="Topic_imageUrl" required>
        </div>
        <div class="form-group">
          <button class="btn btn-primary">Создать</button>
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

  methods: {
    addTopic: function () {
      this.$http.post(config.api.uri + 'topics/', this.topic, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        this.notifications.push({
          type: 'success',
          message: 'Категория успешно создана'
        })
      }, (response) => {
        this.notifications.push({
          type: 'danger',
          message: 'Категория не создана'
        })
        // console.log(response)
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
