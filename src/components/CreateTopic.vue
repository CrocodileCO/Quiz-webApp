<template>
  <div id="create-topic">
    <h1>Создать категорию</h1>
    <p>
      <router-link :to="{ name: 'AllTopics' }">Вернуться к категориям</router-link>
    </p>
    <notification v-bind:notifications="notifications"></notification>

    <form v-on:submit.prevent="addTopic">
      <div class="form-group">
        <label name="Topic_title">Название</label>
        <input type="text" class="form-control" v-model="topic.title" id="Topic_title" required>
      </div>
      <div class="form-group">
        <label name="Topic_image">Картинка</label>
        <input type="text" class="form-control" v-model="topic.imageUrl" id="Topic_imageUrl" required>
      </div>
      <div class="form-group">
        <button class="btn btn-primary">Создать</button>
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

  methods: {
    addTopic: function () {
      this.$http.post('http://localhost:3000/api/topics/', this.topic, {
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
