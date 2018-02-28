<template>
  <div id="create-group">
    <h1>Создать группу</h1>
    <p>
      <router-link :to="{ name: 'AllTopics' }">Назад</router-link>
    </p>
    <notification v-bind:notifications="notifications"></notification>
    <div class="row">
      <div class="col-md-6">
        <form v-on:submit.prevent="addGroup">
        <div class="form-group">
          <label name="group_title">Название</label>
          <input type="text" class="form-control" v-model="group.title" id="group_title" required>
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
import Notification from './notifications.vue'
import config from '../config'

export default {
  data () {
    return {
      group: {},
      notifications: []
    }
  },

  methods: {
    addGroup: function () {
      this.$http.post(config.api.uri + 'groups/', this.group, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        this.notifications.push({
          type: 'success',
          message: 'Группа успешно создана'
        })
      }, (response) => {
        this.notifications.push({
          type: 'danger',
          message: 'Группа не создана'
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
