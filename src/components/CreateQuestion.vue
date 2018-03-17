<template>
  <div id="create-question">
    <h1>Создать вопрос</h1>
    <p>
      <router-link :to="{name: 'Questions', params: { topicId: this.$route.params.topicId }}">Вернуться к вопросам</router-link>
    </p>
    <notification v-bind:notifications="notifications"></notification>
    <div class="row">
      <div class="col-md-6">
        <form v-on:submit.prevent="addQuestion">
      <div class="form-group">
        <label name="Question_image">Картинка</label>
        <input type="text" class="form-control" v-model="question.imageUrl" id="question_imageUrl" required>
      </div>
      <div class="form-group">
        <label name="Question_answer1">Ответ 1 (верный)</label>
        <input type="text" class="form-control" id="question_answer1" required>
      </div>
      <div class="form-group">
        <label name="Question_answer2">Ответ 2</label>
        <input type="text" class="form-control" id="question_answer2" required>
      </div>
      <div class="form-group">
        <label name="Question_answer3">Ответ 3</label>
        <input type="text" class="form-control" id="question_answer3" required>
      </div>
      <div class="form-group">
        <label name="Question_answer4">Ответ 4</label>
        <input type="text" class="form-control" id="question_answer4" required>
      </div>
      <div class="form-group">
        <label name="Information">Интересный факт</label>
        <textarea class="form-control" rows="5" id="information" v-model="question.information.text"></textarea>
      </div>
      <div class="form-group">
        <button class="btn btn-primary">Создать</button>
      </div>
    </form>
      </div>
      <div class="col-md-6">
        <img v-show="question.imageUrl" v-bind:src="question.imageUrl"  alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Notification from './notifications.vue'
import config from '../config'

class Answer {
  constructor (id, text) {
    this.id = id
    this.text = text
  }
}

export default {
  data () {
    return {
      question: {
        information: {
          text: ''
        }
      },
      notifications: [],
      answers: []
    }
  },

  methods: {
    addQuestion: function () {
      this.question.topicId = this.$route.params.topicId
      this.answers.push(new Answer(1, document.getElementById('question_answer1').value))
      this.answers.push(new Answer(2, document.getElementById('question_answer2').value))
      this.answers.push(new Answer(3, document.getElementById('question_answer3').value))
      this.answers.push(new Answer(4, document.getElementById('question_answer4').value))
      this.question.answers = this.answers
      // console.log(this.question)
      this.$http.post(config.api.uri + 'questions/', this.question, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        this.notifications.push({
          type: 'success',
          message: 'Вопрос успешно создан'
        })
        this.answers = []
      }, (response) => {
        this.notifications.push({
          type: 'danger',
          message: 'Вопрос не создан, что-то пошло не так'
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
