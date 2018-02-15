<template>
  <div id="topic-questions">
    <h1>Вопросы из категории {{topic.title}}</h1>
    <p>
      <router-link :to="{ name: 'AllTopics'}">Вернуться к категориям</router-link>
    </p>
    <p><router-link :to="{ name: 'CreateQuestion', params: { topicId: topic._id }}" class="btn btn-primary">Создать вопрос</router-link></p>

    <table class="table table-hover" >
      <thead>
      <tr>
        <td>Url картинки</td>
        <td>Ответ 1</td>
        <td>Ответ 2</td>
        <td>Ответ 3</td>
        <td>Ответ 4</td>
        <td>#</td>
      </tr>
      </thead>

      <tbody>
        <tr v-for="question in questions"
        :key="question._id">
          <td><a v-bind:href="question.imageUrl">{{ question.imageUrl }}</a></td>
          <td>{{question.answer1}}</td>
          <td>{{question.answer2}}</td>
          <td>{{question.answer3}}</td>
          <td>{{question.answer4}}</td>
          <td>
            <router-link :to="{name: 'EditQuestion', params: { questionId: question._id, topicId: topic._id }}" class="btn btn-primary">Редактировать</router-link>
            <router-link :to="{name: 'DeleteQuestion', params: { questionId: question._id, topicId: topic._id }}" class="btn btn-danger">Удалить</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import config from '../config'

export default{
  data () {
    return {
      topic: {},
      questions: []
    }
  },

  created: function () {
    this.getTopic()
    this.fetchQuestionData()
  },

  methods: {
    getTopic: function () {
      this.$http.get(config.api.uri + 'topics/' + this.$route.params.topicId).then((response) => {
        this.topic = response.body
      }, (response) => {

      })
    },
    fetchQuestionData: function () {
      this.$http.get('http://localhost:3000/api/topics/' + this.$route.params.topicId + '/questions').then((response) => {
        this.questions = response.body
      }, (response) => {

      })
    }
  }
}
</script>
