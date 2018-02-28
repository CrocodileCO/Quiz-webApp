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
        <div class="h">
          <img v-show="question.imageUrl" v-bind:src="question.imageUrl" id="questionDB_ident" alt="">
        </div>
        <div class="input-group me">
          <input type="text" v-model="questionDB_ident" class="form-control" @change="getNewQuestion">
          <span class="input-group-btn">
            <button class="btn btn-primary" type="button" @click="incIdent">следующий вопрос</button>
            <button class="btn btn-danger" type="button" @click="removeQuestionGen">удалить</button>
          </span>
        </div>
        <p>Макс: {{questionDB.length}}</p>
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
      answers: [],
      questionDB: [],
      questionDB_ident: 0
    }
  },
  created: function () {
    this.getQuestionDB()
  },

  methods: {
    getQuestionDB: function () {
      this.$http.get(config.api.uri + 'rs/questionsGen/' + this.$route.params.topicId).then((response) => {
        this.questionDB = response.body
      }, (response) => {

      })
    },
    incIdent: function () {
      this.questionDB_ident++
      this.getNewQuestion()
      this.notifications = []
    },
    removeQuestionGen: function () {
      if (this.questionDB_ident > 0) {
        this.$http.delete(config.api.uri + 'rs/questionsGen/' + this.questionDB[this.questionDB_ident - 1]._id).then((response) => {
          this.questionDB.splice(this.questionDB_ident - 1, 1)
          this.getNewQuestion()
        }, (response) => {
          this.notifications.push({
            type: 'danger',
            message: 'Не получилось удалить'
          })
        })
      }
    },
    getNewQuestion: function () {
      let artistIn = this.questionDB[this.questionDB_ident - 1].answerRight
      this.$http.get(config.api.uri + 'rs/similarArtists?artist=' + artistIn).then((response) => {
        let similarAuthors = response.body
        document.getElementById('question_answer1').value = this.questionDB[this.questionDB_ident - 1].answerRight
        for (let i = 0; i < similarAuthors.length; i++) {
          document.getElementById('question_answer' + (i + 2)).value = similarAuthors[i].name
        }
        this.question.imageUrl = this.questionDB[this.questionDB_ident - 1].imageUrl
        this.question.information.text = this.questionDB[this.questionDB_ident - 1].answerRight + '. ' + this.questionDB[this.questionDB_ident - 1].information.text
      }, (response) => {
        this.clearAnswers()
        this.notifications.push({
          type: 'info',
          message: 'Возможно ' + artistIn + ' нет в базе'
        })
      })
    },
    addQuestion: function () {
      this.question.topicId = this.$route.params.topicId
      this.answers.push(new Answer(1, document.getElementById('question_answer1').value))
      this.answers.push(new Answer(2, document.getElementById('question_answer2').value))
      this.answers.push(new Answer(3, document.getElementById('question_answer3').value))
      this.answers.push(new Answer(4, document.getElementById('question_answer4').value))
      this.question.answers = this.answers
      // console.log(this.question)
      // this.$http.post('https://api.imgur.com/3/upload', this.question.imageUrl, {
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': 'Client-ID d0b4d4481fe626b'
      //   }
      // }).then((response) => {
      // this.question.imageUrl = response.body.data.link
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
        this.removeQuestionGen()
      }, (response) => {
        this.notifications.push({
          type: 'danger',
          message: 'Вопрос не создан, что-то пошло не так'
        })
      })
      // }, (response) => {
      //   this.notifications.push({
      //     type: 'info',
      //     message: 'Не отправил картинку на imgur :-(('
      //   })
      // })
    },
    clearAnswers: function () {
      for (let i = 1; i <= 4; i++) {
        document.getElementById('question_answer' + (i)).value = ''
      }
      this.question.imageUrl = ''
      this.question.information.text = ''
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
  .me {
    width: 300px;
  }
  .h {
    height: 500px;
  }
</style>
