<template>
  <div id="all-artists">
    <h1>Художники</h1>
    <p><router-link :to="{ name: 'AllTopics'}">Вернуться назад</router-link></p>

    <div class="row">
      <div class="col-md-6"><p><router-link :to="{ name: 'CreateArtist'}" class="btn btn-primary">Добавить художника</router-link></p></div>
      <div class="col-md-6"><p class="text-right"><router-link :to="{ name: 'CreateArtStyle' }" class="btn btn-primary">Добавить стиль</router-link></p></div>
    </div>
    <div class="form-group">
      <input type="text" name="search" v-model="artistSearch" placeholder="Имя художника" class="form-control" v-on:keyup="searchArtists">
    </div>

    <table class="table table-hover" >
      <thead>
      <tr>
        <td>#</td>
        <td>Имя</td>
        <td>Стили</td>
      </tr>
      </thead>

      <tbody>
        <tr v-for="(artist, index) in artists"
        :key="artist._id">
        <td>{{(index+1)}}</td>
          <td>{{ artist.name }}</td>
          <td>{{ artist.styles.toString() }}</td>
          <td>
            <router-link :to="{name: 'EditArtist', params: { artistId: artist._id }}" class="btn btn-primary">редактировать</router-link>
            <router-link :to="{name: 'DeleteArtist', params: { artistId: artist._id }}" class="btn btn-danger">удалить</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import config from '../../config'

export default{
  data () {
    return {
      artists: [],
      originalArtists: [],
      artistSearch: ''
    }
  },

  created: function () {
    this.fetchArtistData()
  },

  methods: {
    fetchArtistData: function () {
      this.$http.get(config.api.uri + 'rs/' + 'artists').then((response) => {
        this.artists = response.body
        this.originalArtists = this.artists
      }, (response) => {

      })
    },
    searchArtists: function () {
      if (this.artistSearch === '') {
        this.artists = this.originalArtists
        return
      }

      var searchedArtists = []
      for (var i = 0; i < this.originalArtists.length; i++) {
        var artistTitle = this.originalArtists[i]['name'].toLowerCase()
        if (artistTitle.indexOf(this.artistSearch.toLowerCase()) >= 0) {
          searchedArtists.push(this.originalArtists[i])
        }
      }

      this.artists = searchedArtists
    }
  }
}
</script>
