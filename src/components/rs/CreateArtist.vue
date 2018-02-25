<template>
  <div id="create-artist">
    <h1>Добавление нового художника в базу</h1>
    <p>
      <router-link :to="{ name: 'Artists' }">Вернуться к списку художников</router-link>
    </p>
    <notification v-bind:notifications="notifications"></notification>
    <div class="row">
      <div class="col-md-6">
        <form v-on:submit.prevent="addArtist">
        <div class="form-group">
          <label name="Artist_name">Имя</label>
          <input type="text" class="form-control" v-model="artist.name" id="artist_name" required>
        </div>
        <div class="form-group">
          <div>
            <multiselect v-model="artist.styles" :options="options" :multiple="true" :searchable="true" :close-on-select="false"  placeholder="Выбрать направления"></multiselect>
          </div>
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
import Multiselect from 'vue-multiselect'

export default {
  data () {
    return {
      artist: {},
      notifications: [],
      options: ['Абстракционизм', 'Авангардизм', 'Академизм', 'Акционизм', 'Анахронизм', 'Андеграунд', 'Арт-деко', 'Арте повера', 'Барокко', 'Батальный жанр', 'Бидермейер', 'Бытовой жанр', 'Городской пейзаж', 'Готика', 'Дадаизм', 'Импрессионизм', 'Исторический жанр', 'Китч', 'Классицизм', 'Клуазонизм', 'Конструктивизм', 'Кубизм', 'Кубофутуризм', 'Марина', 'Минимализм', 'Модерн', 'Модернизм', 'Натурализм', 'Натюрморт', 'Неоклассицизм', 'Оп-арт', 'Пастораль', 'Поп-арт', 'Портрет', 'Постимпрессионизм', 'Постмодернизм', 'Примитивизм', 'Реализм', 'Ренессанс', 'Рококо', 'Романтизм', 'Сентиментализм', 'Символизм', 'Супрематизм', 'Сюрреализм', 'Футуризм']
    }
  },

  methods: {
    addArtist: function () {
      console.log(this.artist)
      this.$http.post(config.api.uri + 'rs/' + 'artists/', this.artist, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        this.notifications.push({
          type: 'success',
          message: 'Художник успешно добавлен'
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
    Multiselect,
    'notification': Notification
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
