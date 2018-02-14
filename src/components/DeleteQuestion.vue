<template>
  <div id="delete-question">
    <h1>Удалить вопрос</h1>
    <p>
      <router-link :to="{name: 'Questions', params: { topicId: this.$route.params.topicId }}">Вернуться к вопросам</router-link>
    </p>

    <notification v-bind:notifications="notifications"></notification>

    <form v-on:submit.prevent="deletequestion">
      <p><button class="btn btn-danger">Удалить вопрос</button></p>
    </form>
  </div>
</template>

<script>
import Notification from './notifications.vue'

export default {
  data () {
    return {
      notifications: []
    }
  },
  methods: {
    deletequestion: function () {
      this.$http.delete('http://localhost:3000/api/questions/' + this.$route.params.questionId, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        this.$router.push({
          name: 'Questions',
          params: { topicId: this.$route.params.topicId }
        })
      }, (response) => {
        this.notifications.push({
          type: 'danger',
          message: 'Что-то пошло не так, вопрос не удален'
        })
      })
    }
  },

  components: {
    'notification': Notification
  }
}
</script>
