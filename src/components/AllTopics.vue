<template>
  <div id="all-topics">
    <h1>Quiz-server</h1>

    <p><router-link :to="{ name: 'CreateTopic' }" class="btn btn-primary">Создать категорию</router-link></p>

    <div class="form-group">
      <input type="text" name="search" v-model="topicSearch" placeholder="Search topic" class="form-control" v-on:keyup="searchTopics">
    </div>

    <table class="table table-hover" >
      <thead>
      <tr>
        <td>Название</td>
        <td>Url картинки</td>
        <td>Действия</td>
      </tr>
      </thead>

      <tbody>
        <tr v-for="topic in topics"
        :key="topic._id">
          <td>{{ topic.title }}</td>
          <td><a v-bind:href="topic.imageUrl">{{ topic.imageUrl }}</a></td>
          <td>
            <router-link :to="{name: 'Questions', params: { topicId: topic._id }}" class="btn btn-default">вопросы</router-link>
            <router-link :to="{name: 'EditTopic', params: { _id: topic._id }}" class="btn btn-primary">редактировать</router-link>
            <router-link :to="{name: 'DeleteTopic', params: { _id: topic._id }}" class="btn btn-danger">удалить</router-link>
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
      topics: [],
      originalTopics: [],
      topicSearch: ''
    }
  },

  created: function () {
    this.fetchTopicData()
  },

  methods: {
    fetchTopicData: function () {
      this.$http.get(config.api.uri + 'topics').then((response) => {
        this.topics = response.body
        this.originalTopics = this.topics
      }, (response) => {

      })
    },
    searchTopics: function () {
      if (this.topicSearch === '') {
        this.topics = this.originalTopics
        return
      }

      var searchedTopics = []
      for (var i = 0; i < this.originalTopics.length; i++) {
        var topicTitle = this.originalTopics[i]['title'].toLowerCase()
        if (topicTitle.indexOf(this.topicSearch.toLowerCase()) >= 0) {
          searchedTopics.push(this.originalTopics[i])
        }
      }

      this.topics = searchedTopics
    }
  }
}
</script>
