<template>
  <div id="all-topics">
    <h1>Quiz-server</h1>
    <div class="row">
      <div class="col-md-6">
        <p style="float:left"><router-link :to="{ name: 'CreateGroup' }" class="btn btn-info">Создать группу</router-link></p>
        <p style="float:left"><router-link :to="{ name: 'CreateTopic' }" class="btn btn-primary">Создать топик</router-link></p>
      </div>
      <div class="col-md-6"><p class="text-right"><router-link :to="{ name: 'Artists' }" class="btn btn-primary">Рекомендательная система</router-link></p></div>
    </div>
    <div class="form-group">
      <input type="text" name="search" v-model="topicSearch" placeholder="Search topic" class="form-control" v-on:keyup="searchTopics">
    </div>
    <div v-for="group in groups"
    :key="group._id">
    <h3>{{group.title}}
      <span><router-link :to="{ name: 'EditGroup', params: { groupId: group._id }}">редактировать</router-link></span>
      </h3>
      <table class="table table-hover">
        <!-- <thead>
        <tr>
          <td>#</td>
          <td>Картинка</td>
          <td>Название</td>
          <td>Действия</td>
        </tr>
        </thead> -->

        <tbody>
          <tr v-for="(topic, index) in group.topics"
          :key="topic._id">
          <td>{{(index+1)}}</td>
            <td><a v-bind:href="topic.imageUrl" target="_blank"><img v-bind:src="topic.imageUrl" width="40" height="40" alt=""></a></td>
            <td>{{ topic.title }}</td>
            <td style="text-align:right;">
              <router-link :to="{name: 'Questions', params: { topicId: topic._id, topicTitle: topic.title }}" class="btn btn-default">вопросы</router-link>
              <router-link :to="{name: 'RecSystem', params: { topicId: topic._id}}" class="btn btn-info">рек. система</router-link>
              <router-link :to="{name: 'EditTopic', params: { topicId: topic._id }}" class="btn btn-primary">редактировать</router-link>
              <router-link :to="{name: 'DeleteTopic', params: { topicId: topic._id }}" class="btn btn-danger">удалить</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import config from '../config'

export default{
  data () {
    return {
      groups: [{
        topics: []
      }],
      originalTopics: [],
      topicSearch: ''
    }
  },

  created: function () {
    this.fetchTopicData()
  },

  methods: {
    fetchTopicData: function () {
      this.$http.get(config.api.uri + 'groups').then((response) => {
        this.groups = response.body
        this.originalTopics = this.groups.topics
      }, (response) => {

      })
    },
    searchTopics: function () {
      if (this.topicSearch === '') {
        this.groups.topics = this.originalTopics
        return
      }

      var searchedTopics = []
      for (var i = 0; i < this.originalTopics.length; i++) {
        var topicTitle = this.originalTopics[i]['title'].toLowerCase()
        if (topicTitle.indexOf(this.topicSearch.toLowerCase()) >= 0) {
          searchedTopics.push(this.originalTopics[i])
        }
      }

      this.groups.topics = searchedTopics
    }
  }
}
</script>

<style scoped>
  span {
    font-size: 10pt;
  }
</style>
