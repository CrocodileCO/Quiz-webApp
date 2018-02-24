<template>
  <div id="update-question">
    <h1>Редактировать вопрос</h1>
    <p>
      <router-link :to="{name: 'Questions', params: { topicId: this.$route.params.topicId }}">Вернуться к вопросам</router-link>
    </p>
    <notification v-bind:notifications="notifications"></notification>
    <div class="row">
      <div class="col-md-6">
        <form v-on:submit.prevent="editQuestion">
      <div class="form-group">
        <label name="Question_image">Картинка</label>
        <input type="text" class="form-control" v-model="question.imageUrl" id="question_imageUrl" required>
      </div>
      <div class="form-group" v-for="answers in question.answers"
        :key="answers.id">
        <label name="Question_answer">Ответ {{answers.id}}</label>
        <input type="text" class="form-control" v-model="answers.text" id="question_answer" required>
      </div>
      <div class="form-group">
        <label name="Information">Интересный факт</label>
        <textarea class="form-control" rows="5" id="information" v-model="question.information.text"></textarea>
      </div>
      <div class="form-group">
        <button class="btn btn-primary">Сохранить</button>
      </div>
    </form>
    </div>
    <div class="col-md-6">
      <img v-show="question.imageUrl" v-bind:src="question.imageUrl" alt="">
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
      question: {
        information: {
          text: String
        }
      },
      notifications: []
    }
  },

  created: function () {
    this.getQuestion()
  },

  methods: {
    getQuestion: function () {
      this.$http.get(config.api.uri + 'questions/' + this.$route.params.questionId).then((response) => {
        this.question = response.body
      }, (response) => {

      })
    },

    editQuestion: function () {
      this.$http.patch(config.api.uri + 'questions/' + this.$route.params.questionId, this.question, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        this.notifications.push({
          type: 'success',
          message: 'Вопрос успешно обновлен'
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
<style scoped>
  img {
    max-width: 500px;
    max-height: 500px;
  }
</style>
