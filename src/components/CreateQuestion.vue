<template>
  <div id="create-question">
    <h1>Создать вопрос</h1>
    <p>
      <router-link :to="{name: 'Questions', params: { topicId: this.$route.params.topicId }}">Вернуться к вопросам</router-link>
    </p>
    <notification v-bind:notifications="notifications"></notification>

    <form v-on:submit.prevent="addQuestion">
      <div class="form-group">
        <label name="Question_image">Картинка</label>
        <input type="text" class="form-control" v-model="question.imageUrl" id="question_imageUrl" required>
      </div>
      <div class="form-group">
        <label name="Question_answer1">Ответ 1 (верный)</label>
        <input type="text" class="form-control" v-model="question.answer1" id="question_answer1" required>
      </div>
      <div class="form-group">
        <label name="Question_answer2">Ответ 2</label>
        <input type="text" class="form-control" v-model="question.answer2" id="question_answer2" required>
      </div>
      <div class="form-group">
        <label name="Question_answer3">Ответ 3</label>
        <input type="text" class="form-control" v-model="question.answer3" id="question_answer3" required>
      </div>
      <div class="form-group">
        <label name="Question_answer4">Ответ 4</label>
        <input type="text" class="form-control" v-model="question.answer4" id="question_answer4" required>
      </div>
      <div class="form-group">
        <button class="btn btn-primary">Создать</button>
      </div>
    </form>
  </div>
</template>

<script>
import Notification from './notifications.vue'

export default {
  data () {
    return {
      question: {},
      notifications: []
    }
  },

  methods: {
    addQuestion: function () {
      this.question.topicId = this.$route.params.topicId
      this.$http.post('http://localhost:3000/api/questions/', this.question, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        this.notifications.push({
          type: 'success',
          message: 'Вопрос успешно создан'
        })
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
