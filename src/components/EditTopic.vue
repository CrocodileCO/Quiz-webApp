<template>
  <div id="update-topic">
    <h1>Редактировать категорию</h1>
    <p>
      <router-link :to="{ name: 'AllTopics' }">Назад</router-link>
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
          <div>
            <multiselect v-model="topic.groupId" :options="options" :multiple="false" :searchable="true" track-by="title" label="title" :close-on-select="true"  placeholder="Выбрать направления"></multiselect>
          </div>
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
    this.getTopic()
    this.fetchGroupsData()
  },

  methods: {
    getTopic: function () {
      this.$http.get(config.api.uri + 'topics/' + this.$route.params.topicId).then((response) => {
        this.topic = response.body
      }, (response) => {

      })
    },

    fetchGroupsData: function () {
      this.$http.get(config.api.uri + 'groups').then((response) => {
        let groups = response.body
        this.options = groups.map(function (group) {
          return {'_id': group._id, 'title': group.title}
        })
        for (let i = 0; this.options.length; i++) {
          if (this.topic.groupId === this.options[i]._id) {
            this.topic.groupId = this.options[i]
            return
          }
        }
      }, (response) => {

      })
    },

    editTopic: function () {
      if (!this.topic.groupId) {
        this.notifications.push({
          type: 'danger',
          message: 'Не выбрана группа'
        })
        return
      }
      this.$http.patch(config.api.uri + 'topics/' + this.$route.params.topicId, this.topic, {
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
