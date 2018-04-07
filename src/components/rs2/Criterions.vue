<template>
  <div id="criterions">
    <h1>Критерии</h1>
    <div class="row">
      <!-- <div class="col-md-6"> <p><router-link :to="{ name: 'CreateQuestion', params: { topicId: topic._id }}" class="btn btn-primary">Создать вопрос</router-link></p></div> -->
      <button id="show-modal" class="btn btn-primary pull-right" @click="showModal = true">Создать новый критерий</button>
    </div>

    <div v-for="(criterion) in criterions"
        :key="criterion._id">
      <h3>{{criterion.title}}
        <a class="btn" @click="editCriterion(criterion)">Редактировать</a>
        <a class="btn" @click="removeCriterion(criterion)">Удалить</a>
      </h3>
      <table class="table table-hover" >
        <thead>
        <tr>
          <td>#</td>
          <td>Значение</td>
          <td style="text-align:right;"><button class="btn btn-success" @click="addCriterionValue(criterion._id)">Добавить</button></td>
        </tr>
        </thead>

        <tbody>
          <tr v-for="(value, index) in criterion.criterionValues"
          :key="value._id">
          <td>{{(index+1)}}</td>
            <td>{{value.text}}</td>
            <td style="text-align:right;">
              <button class="btn btn-primary" @click="editCriterionValue(value)">Редактировать</button>
              <button class="btn btn-danger" @click="removeCriterionValue(criterion, value)">Удалить</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <modal v-if="showModal" @close="showModal = false">
    <!--
      you can use custom content here to overwrite
      default content
    -->
    <div slot="header" class="form-group">
      <button class="btn btn-danger pull-right" @click="modalClose">X</button>
      <h3>Добавить/редактировать критерий</h3>
    </div>
    <form v-on:submit.prevent="saveCriterion" slot="body">
      <div class="form-group">
        <label name="criterion_title">Название</label>
        <input type="text" class="form-control" v-model="criterion.title" id="criterion_title" required>
      </div>
      <div class="form-group">
        <div>
          <multiselect v-model="criterion.type" :options="options" :multiple="false" :close-on-select="true"  placeholder="Выберите тип"></multiselect>
        </div>
      </div>
      <div class="form-group">
        <label name="criterion_interval">Интервал</label>
        <input type="number" class="form-control" v-model="criterion.interval" id="criterion_interval" :disabled="isDisabled" required>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary pull-right">Сохранить</button>
      </div>
    </form>
    <p slot="footer"></p>
  </modal>
   <modal v-if="showModal2" @close="showModal2 = false">
    <div slot="header" class="form-group">
      <button class="btn btn-danger pull-right" @click="modalClose2">X</button>
      <h3>Добавление/редактирование значения</h3>
    </div>
    <form v-on:submit.prevent="saveCriterionValue" slot="body">
      <div class="form-group">
        <label name="criterion_title">Значение</label>
        <input type="text" class="form-control" v-model="criterionValue.text" id="criterion_title" required>
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
      criterions: [],
      criterion: {
        type: 'Строка'
      },
      criterionValue: {},
      showModal: false,
      showModal2: false,
      options: ['Строка', 'Число']
    }
  },

  created: function () {
    this.fetchCriterions()
  },

  methods: {
    fetchCriterions: function () {
      this.$http.get(config.api.uri + 'rs/recSystems/' + this.$route.params.recSystemId + '/criterions').then((response) => {
        console.log(response.body)
        this.criterions = response.body
      }, (response) => {
        console.log(response.body)
      })
    },
    saveCriterion: function () {
      this.criterion.recSystemId = this.$route.params.recSystemId
      if (!this.criterion._id) {
        this.$http.post(config.api.uri + 'rs/' + 'criterions/', this.criterion, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((response) => {
          this.criterions.push(this.criterion)
          this.criterion = {}
          this.showModal = false
        }, (response) => {

        })
      } else {
        this.$http.patch(config.api.uri + 'rs/' + 'criterions/' + this.criterion._id, this.criterion, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((response) => {
          this.criterion = {}
          this.showModal = false
        }, (response) => {

        })
      }
    },
    removeCriterion: function (criterion) {
      if (confirm('Вы действительно хотите удалить критерий ' + criterion.title + '?')) {
        this.$http.delete(config.api.uri + 'rs/criterions/' + criterion._id, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((response) => {
          for (let j = 0; j < this.criterions.length; j++) {
            if (this.criterions[j]._id === criterion._id) {
              this.criterions.splice(j, 1)
              return
            }
          }
        }, (response) => {
          // TODO notif
        })
      }
    },
    editCriterion: function (criterion) {
      this.criterion = criterion
      this.showModal = true
    },
    editCriterionValue: function (criterionValue) {
      this.criterionValue = criterionValue
      this.showModal2 = true
    },
    removeCriterionValue: function (criterion, criterionValue) {
      this.$http.delete(config.api.uri + 'rs/criterionValues/' + criterionValue._id, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        for (let j = 0; j < criterion.criterionValues.length; j++) {
          if (criterion.criterionValues[j]._id === criterionValue._id) {
            criterion.criterionValues.splice(j, 1)
            return
          }
        }
      }, (response) => {
        // TODO notif
      })
    },
    modalClose: function () {
      this.showModal = false
      if (!this.criterion._id) {
        return
      }
      // console.log('hah ' + this.criterion)
      this.criterion = {}
    },
    modalClose2: function () {
      this.showModal2 = false
      this.criterionValue = {}
    },
    addCriterionValue: function (criterionId) {
      this.showModal2 = true
      this.criterionValue.criterionId = criterionId
    },
    saveCriterionValue: function () {
      if (!this.criterionValue._id) {
        console.log(this.criterionValue)
        this.$http.post(config.api.uri + 'rs/' + 'criterionValues/', this.criterionValue, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((response) => {
          for (let j = 0; j < this.criterions.length; j++) {
            if (this.criterions[j]._id === this.criterionValue.criterionId) {
              this.criterions[j].criterionValues.push(response.body)
              break
            }
          }
          this.criterionValue.text = ''
        }, (response) => {

        })
      } else {
        this.$http.patch(config.api.uri + 'rs/' + 'criterionValues/' + this.criterionValue._id, this.criterionValue, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((response) => {
          this.criterionValue = {}
          this.showModal2 = false
        }, (response) => {

        })
      }
    }
  },
  components: {
    'modal': ModalWindow,
    Multiselect
  },
  computed: {
    isDisabled () {
      // console.log(this.criterion.type)
      return !(this.criterion.type === 'Число')
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
