<template>
  <div id="delete-artist">
    <h1>Удалить {{ artist.title }} из базы</h1>
    <p>
      <router-link :to="{ name: 'Artists' }">Вернуться к списку художников</router-link>
    </p>

    <notification v-bind:notifications="notifications"></notification>

    <form v-on:submit.prevent="deleteArtist">
      <p><button class="btn btn-danger">Удалить</button></p>
    </form>
  </div>
</template>

<script>
import Notification from '../notifications.vue'
import config from '../../config'

export default {
  data () {
    return {
      artist: {},
      notifications: []
    }
  },

  created: function () {
    this.getArtist()
  },

  methods: {
    getArtist: function () {
      this.$http.get(config.api.uri + 'rs/' + 'artists/' + this.$route.params.artistId).then((response) => {
        this.artist = response.body
      }, (response) => {

      })
    },

    deleteArtist: function () {
      this.$http.delete(config.api.uri + 'rs/' + 'artists/' + this.$route.params.artistId, this.artist, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        this.$router.push({
          name: 'Artists'
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
