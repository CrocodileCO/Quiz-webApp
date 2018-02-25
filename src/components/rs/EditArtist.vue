<template>
  <div id="update-artist">
    <h1>Редактировать</h1>
    <p>
      <router-link :to="{ name: 'Artists' }">Вернуться к списку художников</router-link>
    </p>
    <notification v-bind:notifications="notifications"></notification>
    <div class="row">
      <div class="col-md-6">
        <form v-on:submit.prevent="editArtist">
        <div class="form-group">
          <label name="artist_title">Имя</label>
          <input type="text" class="form-control" v-model="artist.name" id="artist_name" required>
        </div>
       <div class="form-group">
          <div>
            <multiselect v-model="artist.styles" :options="options" :multiple="true" :searchable="true" :close-on-select="false"  placeholder="Выбрать направления"></multiselect>
          </div>
        </div>
        <div class="form-group">
          <button class="btn btn-primary">Сохранить</button>
        </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Notification from '../notifications.vue'
import config from '../../config'
import Multiselect from 'vue-multiselect'

export default {
  data () {
    return {
      artist: {},
      notifications: [],
      options: []
    }
  },

  created: function () {
    this.getArtist()
    this.fetchArtStylesData()
  },

  methods: {
    getArtist: function () {
      this.$http.get(config.api.uri + 'rs/' + 'artists/' + this.$route.params.artistId).then((response) => {
        this.artist = response.body
      }, (response) => {

      })
    },

    fetchArtStylesData: function () {
      this.$http.get(config.api.uri + 'rs/' + 'artstyles').then((response) => {
        let artstyles = response.body
        this.options = artstyles.map(function (artstyle) {
          return artstyle.title
        })
      }, (response) => {

      })
    },

    editArtist: function () {
      this.$http.patch(config.api.uri + 'rs/' + 'artists/' + this.$route.params.artistId, this.artist, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        this.notifications.push({
          type: 'success',
          message: 'Данные о художнике обновлены'
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
    Multiselect,
    'notification': Notification
  }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
