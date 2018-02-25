<template>
  <div id="create-artStyle">
    <h1>Добавление нового художественного стиля в базу</h1>
    <p>
      <router-link :to="{ name: 'Artists' }">Вернуться к списку художников</router-link>
    </p>
    <notification v-bind:notifications="notifications"></notification>
    <div class="row">
      <div class="col-md-6">
        <form v-on:submit.prevent="addArtStyle">
        <div class="form-group">
          <label name="ArtStyle_title">Название</label>
          <input type="text" class="form-control" v-model="artStyle.title" id="artStyle_title" required>
        </div>
        <div class="form-group">
          <button class="btn btn-primary">Создать</button>
        </div>
      </form>
      </div>
    </div>
  </div>
</template>

<script>
import Notification from '../notifications.vue'
import config from '../../config'

export default {
  data () {
    return {
      artStyle: {},
      notifications: []
    }
  },
  methods: {
    addArtStyle: function () {
      this.$http.post(config.api.uri + 'rs/' + 'artStyles/', this.artStyle, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        this.notifications.push({
          type: 'success',
          message: 'Стиль успешно добавлен'
        })
      }, (response) => {
        this.notifications.push({
          type: 'danger',
          message: 'Неудалось добавить'
        })
      })
    }
  },

  components: {
    'notification': Notification
  }
}
</script>
