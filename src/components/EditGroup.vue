<template>
  <div id="update-group">
    <h1>Редактировать группу</h1>
    <p>
      <router-link :to="{ name: 'AllTopics' }">Назад</router-link>
    </p>
    <notification v-bind:notifications="notifications"></notification>
    <div class="row">
      <div class="col-md-6">
        <form v-on:submit.prevent="editGroup">
        <div class="form-group">
          <label name="group_id">ID</label>
          <input type="text" class="form-control" disabled v-model="group._id" id="group_id">
        </div>
        <div class="form-group">
          <label name="group_title">Название</label>
          <input type="text" class="form-control" v-model="group.title" id="group_title" required>
        </div>
        <div class="form-group">
          <button class="btn btn-primary">Сохранить</button>
        </div>
        </form>
        <button style="float:right;" class="btn btn-danger" @click="removeGroup">Удалить группу</button>
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
      group: {},
      notifications: []
    }
  },

  created: function () {
    this.getGroup()
  },

  methods: {
    getGroup: function () {
      this.$http.get(config.api.uri + 'groups/' + this.$route.params.groupId).then((response) => {
        this.group = response.body
      }, (response) => {

      })
    },
    removeGroup: function () {
      this.$http.delete(config.api.uri + 'groups/' + this.$route.params.groupId).then((response) => {
        this.$router.push({
          name: 'AllTopics'
        })
      }, (response) => {
        this.notifications.push({
          type: 'danger',
          message: 'Что-то пошло не так'
        })
      })
    },

    editGroup: function () {
      this.$http.patch(config.api.uri + 'groups/' + this.$route.params.groupId, this.group, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        this.$router.push({
          name: 'AllTopics'
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
