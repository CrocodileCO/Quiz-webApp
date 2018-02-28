<template>
  <div id="create-topic">
    <h1>Создать топик</h1>
    <p>
      <router-link :to="{ name: 'AllTopics' }">Назад</router-link>
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
          <div>
            <multiselect v-model="topic.groupId" :options="options" :multiple="false" :searchable="true" track-by="title" label="title" :close-on-select="true"  placeholder="Выбрать направления"></multiselect>
          </div>
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
import Multiselect from 'vue-multiselect'

export default {
  data () {
    return {
      topic: {},
      notifications: [],
      options: []
    }
  },

  created: function () {
    this.fetchGroupsData()
  },

  methods: {
    fetchGroupsData: function () {
      this.$http.get(config.api.uri + 'groups').then((response) => {
        let groups = response.body
        this.options = groups.map(function (group) {
          return {'_id': group._id, 'title': group.title}
        })
      }, (response) => {

      })
    },
    addTopic: function () {
      if (!this.topic.groupId) {
        this.notifications.push({
          type: 'danger',
          message: 'Не выбрана группа'
        })
        return
      }
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
    Multiselect,
    'notification': Notification
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style scoped>
  img {
    max-width: 500px;
    max-height: 500px;
  }
</style>
