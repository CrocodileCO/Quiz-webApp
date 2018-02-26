<template>
  <div id="topic-questions">
    <h1>Вопросы из категории {{topic.title}}</h1>
    <p>
      <router-link :to="{ name: 'AllTopics'}">Вернуться к категориям</router-link>
    </p>
    <div class="row">
      <div class="col-md-6"> <p><router-link :to="{ name: 'CreateQuestion', params: { topicId: topic._id }}" class="btn btn-primary">Создать вопрос</router-link></p></div>
      <div class="col-md-6"> <p class="text-right"><router-link :to="{ name: 'GenerateQuestion', params: { topicId: topic._id }}" class="btn btn-danger">Сгенерировать вопрос</router-link></p></div>
    </div>
    <table class="table table-hover" >
      <thead>
      <tr>
        <td>#</td>
        <td>Картинка</td>
        <td>Ответ 1</td>
        <td>Ответ 2</td>
        <td>Ответ 3</td>
        <td>Ответ 4</td>
        <td>#</td>
      </tr>
      </thead>

      <tbody>
        <tr v-for="(question, index) in questions"
        :key="question._id">
        <td>{{(index+1)}}</td>
          <td><a v-bind:href="question.imageUrl" target="_blank"><img v-bind:src="question.imageUrl"  width="50" height="50" alt=""></a></td>
          <td v-for="answer in question.answers" :key="answer.id">{{answer.text}} <i>({{answer.pickAmount}})</i></td>
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
      this.$http.get(config.api.uri + 'topics/' + this.$route.params.topicId + '/questions').then((response) => {
        this.questions = response.body
      }, (response) => {

      })
    }
  }
}
</script>

<style scoped>
  i {
    color: gray;
  }
</style>
