<template>
  <div id="rec-system">
    <h1>{{recSystem.title}}</h1>
    <div class="row">
      <div class="col-md-6">
        <button class="btn btn-success " @click="showModal2 = true">Добавить</button>
      </div>
      <div class="col-md-6"><p class="text-right"><router-link :to="{ name: 'Criterions', params: {recSystemId: this.recSystem._id}}" class="btn btn-primary">Критерии</router-link></p></div>
    </div>
    <div class="form-group">
      <!-- <input type="text" name="search" v-model="artistSearch" placeholder="Имя художника" class="form-control" v-on:keyup="searchArtists"> -->
    </div>

    <table class="table table-hover" >
      <thead>
      <tr>
        <td>#</td>
        <td>Ответ</td>
        <td v-for="(criterion) in criterions"
        :key="criterion.id">
        {{criterion.title}}
        </td>
      </tr>
      </thead>

      <tbody>
        <tr v-for="(rv, index) in recValues"
        :key="rv._id">
        <td>{{(index+1)}}</td>
          <td>{{ rv.answerRight }}</td>
          <td v-for="(criterionValue) in rv.criterionValues"
          :key="criterionValue.id">
          {{criterionValue.value}}
          </td>
            <td style="text-align:right;">
              <button class="btn btn-primary" @click="editRecValue(rv)">Редактировать</button>
              <button class="btn btn-danger" @click="removeRecValue(rv)">Удалить</button>
            </td>
        </tr>
      </tbody>
    </table>
     <modal v-if="showModal" @close="showModal = false">
    <h3 slot="header">Добавить рекомендательную систему</h3>
    <form v-on:submit.prevent="saveRecSystem" slot="body">
      <div class="form-group">
        <label name="recSystem_title">Название</label>
        <input type="text" class="form-control" v-model="recSystem.title" id="recSystem_title" required>
      </div>
      <div class="form-group">
        <button class="btn btn-primary pull-right">Добавить</button>
      </div>
    </form>
    <p slot="footer"></p>
  </modal>
  <modal v-if="showModal2" @close="showModal2 = false">
    <div slot="header" class="form-group">
      <button class="btn btn-danger pull-right" @click="modalClose2">X</button>
      <h3>Добавить/редактировать значение</h3>
    </div>
    <form v-on:submit.prevent="saveRecValue" slot="body">
      <div class="form-group">
        <label name="criterion_title">Ответ</label>
        <input type="text" class="form-control" v-model="recValue.answerRight" id="criterion_title" required>
      </div>
      <div class="form-group" v-for="(criterion, index) in criterions"
      :key="criterion.id">
        <div>
          <label name="criterion_title">{{criterion.title}}</label>
          <input v-if="optionValues[index].length == 0 && criterion.type === 'Число'" type="number" class="form-control" v-model="selectedValues[index]" required>
          <input v-else-if="optionValues[index].length == 0" type="text" class="form-control" v-model="selectedValues[index]" required>
          <multiselect v-else v-model="selectedValues[index]" :options="optionValues[index]" :multiple="true" :searchable="true" :close-on-select="false" placeholder="Значение критерия" :allow-empty="false"></multiselect>
        </div>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary pull-right">Сохранить</button>
      </div>
    </form>
    <p slot="footer"></p>
  </modal>
  </div>
</template>

<script>
import config from '../../config'
import ModalWindow from '../modalWindow.vue'
import Multiselect from 'vue-multiselect'

export default{
  data () {
    return {
      recSystem: {},
      recValues: [],
      selectedValues: [],
      recValue: {
        criterionValues: []
      },
      criterions: [{
        criterionValues: []
      }],
      optionValues: [[]],
      showModal: false,
      showModal2: false
    }
  },

  created: function () {
    this.fetchRecSystemData()
  },

  methods: {
    fetchRecSystemData: function () {
      this.$http.get(config.api.uri + 'rs/' + 'topics/' + this.$route.params.topicId + '/recSystem').then((response) => {
        this.recSystem = response.body
        this.fetchCriterions()
      }, (response) => {
        this.showModal = true
      })
    },
    fetchCriterions: function () {
      this.$http.get(config.api.uri + 'rs/recSystems/' + this.recSystem._id + '/criterions').then((response) => {
        this.criterions = response.body
        for (let j = 0; j < this.criterions.length; j++) {
          this.optionValues[j] = []
          if (this.criterions[j].criterionValues.length === 0) {
            continue
          }
          for (let k = 0; k < this.criterions[j].criterionValues.length; k++) {
            this.optionValues[j][k] = this.criterions[j].criterionValues[k].text
          }
        }
        this.fetchRecValues()
      }, (response) => {
        console.log(response.body)
      })
    },
    fetchRecValues: function () {
      this.$http.get(config.api.uri + 'rs/recSystems/' + this.recSystem._id + '/recValues').then((response) => {
        console.log(response.body)
        this.recValues = response.body
      }, (response) => {
        console.log(response.body)
      })
    },
    saveRecSystem: function () {
      this.recSystem.topicId = this.$route.params.topicId
      this.$http.post(config.api.uri + 'rs/' + 'recSystems/', this.recSystem, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        this.showModal = false
      }, (response) => {

      })
    },
    saveRecValue: function () {
      this.recValue.recSystemId = this.recSystem._id
      for (let j = 0; j < this.selectedValues.length; j++) {
        let t = this.selectedValues[j]
        if (typeof t !== 'string') {
          t = t.join(',')
        }
        this.recValue.criterionValues.push({criterionId: this.criterions[j].id, value: t})
      }
      if (!this.recValue._id) {
        this.$http.post(config.api.uri + 'rs/' + 'recValues/', this.recValue, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((response) => {
          this.recValues.push(response.body)
          this.modalClose2()
        }, (response) => {

        })
      } else {
        this.$http.patch(config.api.uri + 'rs/' + 'recValues/' + this.recValue._id, this.recValue, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((response) => {
          this.fetchRecValues()
          this.modalClose2()
        }, (response) => {

        })
      }
    },
    modalClose2: function () {
      this.cleanFilds()
      this.showModal2 = false
    },
    cleanFilds: function () {
      this.recValue = { criterionValues: [] }
      this.selectedValues = []
    },
    removeRecValue: function (rv) {
      if (confirm('Вы действительно хотите удалить значение ' + rv.answerRight)) {
        this.$http.delete(config.api.uri + 'rs/recValues/' + rv._id, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((response) => {
          for (let j = 0; j < this.recValues.length; j++) {
            if (this.recValues[j]._id === rv._id) {
              this.recValues.splice(j, 1)
              return
            }
          }
        }, (response) => {
          // TODO notif
        })
      }
    },
    editRecValue: function (rv) {
      this.showModal2 = true
      this.recValue._id = rv._id
      this.recValue.answerRight = rv.answerRight
      for (let j = 0; j < rv.criterionValues.length; j++) {
        this.selectedValues[j] = []
        let t = rv.criterionValues[j].value
        if (t.split(',').length > 1) {
          t = t.split(',')
        }
        this.selectedValues[j] = t
      }
    }
  },
  components: {
    'modal': ModalWindow,
    Multiselect
  }
}
</script>

<style scoped>
  h3 {
    text-align: center;
  }
</style>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
