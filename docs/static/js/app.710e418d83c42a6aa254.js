webpackJsonp([0],{0:function(t,i){},"2uFj":function(t,i){t.exports={api:{uri:"https://eggdance.herokuapp.com/api/"}}},"5ZiA":function(t,i){},FdZQ:function(t,i){},NHnr:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("7+uW"),n={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"container"},[i("div",{attrs:{id:"page"}},[i("transition",{attrs:{name:"fade"}},[i("router-view")],1)],1)])},staticRenderFns:[]},a=e("VU/8")({name:"App"},n,!1,null,null,null).exports,o=e("/ocq"),r=e("8+8L"),c=e("2uFj"),u=e.n(c),l={data:function(){return{topics:[],originalTopics:[],topicSearch:""}},created:function(){this.fetchTopicData()},methods:{fetchTopicData:function(){var t=this;this.$http.get(u.a.api.uri+"topics").then(function(i){t.topics=i.body,t.originalTopics=t.topics},function(t){})},searchTopics:function(){if(""!==this.topicSearch){for(var t=[],i=0;i<this.originalTopics.length;i++){this.originalTopics[i].title.toLowerCase().indexOf(this.topicSearch.toLowerCase())>=0&&t.push(this.originalTopics[i])}this.topics=t}else this.topics=this.originalTopics}}},p={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"all-topics"}},[e("h1",[t._v("Quiz-server")]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("p",[e("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"CreateTopic"}}},[t._v("Создать категорию")])],1)]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("p",{staticClass:"text-right"},[e("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"Artists"}}},[t._v("Рекомендательная система")])],1)])]),t._v(" "),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.topicSearch,expression:"topicSearch"}],staticClass:"form-control",attrs:{type:"text",name:"search",placeholder:"Search topic"},domProps:{value:t.topicSearch},on:{keyup:t.searchTopics,input:function(i){i.target.composing||(t.topicSearch=i.target.value)}}})]),t._v(" "),e("table",{staticClass:"table table-hover"},[t._m(0),t._v(" "),e("tbody",t._l(t.topics,function(i,s){return e("tr",{key:i._id},[e("td",[t._v(t._s(s+1))]),t._v(" "),e("td",[e("a",{attrs:{href:i.imageUrl,target:"_blank"}},[e("img",{attrs:{src:i.imageUrl,width:"40",height:"40",alt:""}})])]),t._v(" "),e("td",[t._v(t._s(i.title))]),t._v(" "),e("td",[e("router-link",{staticClass:"btn btn-default",attrs:{to:{name:"Questions",params:{topicId:i._id,topicTitle:i.title}}}},[t._v("вопросы")]),t._v(" "),e("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"EditTopic",params:{_id:i._id}}}},[t._v("редактировать")]),t._v(" "),e("router-link",{staticClass:"btn btn-danger",attrs:{to:{name:"DeleteTopic",params:{_id:i._id}}}},[t._v("удалить")])],1)])}))])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("thead",[i("tr",[i("td",[this._v("#")]),this._v(" "),i("td",[this._v("Картинка")]),this._v(" "),i("td",[this._v("Название")]),this._v(" "),i("td",[this._v("Действия")])])])}]},m=e("VU/8")(l,p,!1,null,null,null).exports,d={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"notifications"}},t._l(t.notifications,function(i){return e("div",{class:t.getNotificationClass(i)},[t._v("\n    "+t._s(i.message)+"\n  ")])}))},staticRenderFns:[]},v=e("VU/8")({data:function(){return{}},methods:{getNotificationClass:function(t){return"alert alert-"+t.type}},props:["notifications"]},d,!1,null,null,null).exports,f={data:function(){return{topic:{},notifications:[]}},methods:{addTopic:function(){var t=this;this.$http.post(u.a.api.uri+"topics/",this.topic,{headers:{"Content-Type":"application/json"}}).then(function(i){t.notifications.push({type:"success",message:"Категория успешно создана"})},function(i){t.notifications.push({type:"danger",message:"Категория не создана"})})}},components:{notification:v}},h={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"create-topic"}},[e("h1",[t._v("Создать категорию")]),t._v(" "),e("p",[e("router-link",{attrs:{to:{name:"AllTopics"}}},[t._v("Вернуться к категориям")])],1),t._v(" "),e("notification",{attrs:{notifications:t.notifications}}),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("form",{on:{submit:function(i){i.preventDefault(),t.addTopic(i)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{name:"Topic_title"}},[t._v("Название")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.topic.title,expression:"topic.title"}],staticClass:"form-control",attrs:{type:"text",id:"Topic_title",required:""},domProps:{value:t.topic.title},on:{input:function(i){i.target.composing||t.$set(t.topic,"title",i.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{name:"Topic_image"}},[t._v("Url картинки")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.topic.imageUrl,expression:"topic.imageUrl"}],staticClass:"form-control",attrs:{type:"text",id:"Topic_imageUrl",required:""},domProps:{value:t.topic.imageUrl},on:{input:function(i){i.target.composing||t.$set(t.topic,"imageUrl",i.target.value)}}})]),t._v(" "),t._m(0)])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("img",{directives:[{name:"show",rawName:"v-show",value:t.topic.imageUrl,expression:"topic.imageUrl"}],attrs:{src:t.topic.imageUrl,alt:""}})])])],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"form-group"},[i("button",{staticClass:"btn btn-primary"},[this._v("Создать")])])}]};var _=e("VU/8")(f,h,!1,function(t){e("u56i")},"data-v-827cf212",null).exports,g={data:function(){return{topic:{},notifications:[]}},created:function(){this.getTopic()},methods:{getTopic:function(){var t=this;this.$http.get(u.a.api.uri+"topics/"+this.$route.params._id).then(function(i){t.topic=i.body},function(t){})},deleteTopic:function(){var t=this;this.$http.delete(u.a.api.uri+"topics/"+this.$route.params._id,this.topic,{headers:{"Content-Type":"application/json"}}).then(function(i){t.$router.push({name:"AllTopics"})},function(i){t.notifications.push({type:"danger",message:"Категория не была удалена, что-то пошло не так"})})}},components:{notification:v}},C={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"delete-topic"}},[e("h1",[t._v("Удалить категорию "+t._s(t.topic.title))]),t._v(" "),e("p",[e("router-link",{attrs:{to:{name:"AllTopics"}}},[t._v("Вернуться к категориям")])],1),t._v(" "),e("notification",{attrs:{notifications:t.notifications}}),t._v(" "),e("form",{on:{submit:function(i){i.preventDefault(),t.deleteTopic(i)}}},[t._m(0)])],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("p",[i("button",{staticClass:"btn btn-danger"},[this._v("Удалить категорию")])])}]},y=e("VU/8")(g,C,!1,null,null,null).exports,q={data:function(){return{topic:{},notifications:[]}},created:function(){this.getTopic()},methods:{getTopic:function(){var t=this;this.$http.get(u.a.api.uri+"topics/"+this.$route.params._id).then(function(i){t.topic=i.body},function(t){})},editTopic:function(){var t=this;this.$http.patch(u.a.api.uri+"topics/"+this.$route.params._id,this.topic,{headers:{"Content-Type":"application/json"}}).then(function(i){t.notifications.push({type:"success",message:"Категория успешно обновлена"})},function(i){t.notifications.push({type:"danger",message:"Что-то пошло не так"})})}},components:{notification:v}},b={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"update-topic"}},[e("h1",[t._v("Редактировать категорию")]),t._v(" "),e("p",[e("router-link",{attrs:{to:{name:"AllTopics"}}},[t._v("Вернуться к категориям")])],1),t._v(" "),e("notification",{attrs:{notifications:t.notifications}}),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("form",{on:{submit:function(i){i.preventDefault(),t.editTopic(i)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{name:"topic_id"}},[t._v("ID")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.topic._id,expression:"topic._id"}],staticClass:"form-control",attrs:{type:"text",disabled:"",id:"topic_id"},domProps:{value:t.topic._id},on:{input:function(i){i.target.composing||t.$set(t.topic,"_id",i.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{name:"topic_title"}},[t._v("Название")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.topic.title,expression:"topic.title"}],staticClass:"form-control",attrs:{type:"text",id:"topic_title",required:""},domProps:{value:t.topic.title},on:{input:function(i){i.target.composing||t.$set(t.topic,"title",i.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{name:"Topic_image"}},[t._v("Картинка")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.topic.imageUrl,expression:"topic.imageUrl"}],staticClass:"form-control",attrs:{type:"text",id:"Topic_imageUrl",required:""},domProps:{value:t.topic.imageUrl},on:{input:function(i){i.target.composing||t.$set(t.topic,"imageUrl",i.target.value)}}})]),t._v(" "),t._m(0)])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("img",{directives:[{name:"show",rawName:"v-show",value:t.topic.imageUrl,expression:"topic.imageUrl"}],attrs:{src:t.topic.imageUrl,alt:""}})])])],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"form-group"},[i("button",{staticClass:"btn btn-primary"},[this._v("Сохранить")])])}]};var w=e("VU/8")(q,b,!1,function(t){e("gFvQ")},"data-v-bd43ed68",null).exports,$={data:function(){return{topic:{},questions:[]}},created:function(){this.getTopic(),this.fetchQuestionData()},methods:{getTopic:function(){var t=this;this.$http.get(u.a.api.uri+"topics/"+this.$route.params.topicId).then(function(i){t.topic=i.body},function(t){})},fetchQuestionData:function(){var t=this;this.$http.get(u.a.api.uri+"topics/"+this.$route.params.topicId+"/questions").then(function(i){t.questions=i.body},function(t){})}}},x={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"topic-questions"}},[e("h1",[t._v("Вопросы из категории "+t._s(t.topic.title))]),t._v(" "),e("p",[e("router-link",{attrs:{to:{name:"AllTopics"}}},[t._v("Вернуться к категориям")])],1),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("p",[e("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"CreateQuestion",params:{topicId:t.topic._id}}}},[t._v("Создать вопрос")])],1)]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("p",{staticClass:"text-right"},[e("router-link",{staticClass:"btn btn-danger",attrs:{to:{name:"GenerateQuestion",params:{topicId:t.topic._id}}}},[t._v("Сгенерировать вопрос")])],1)])]),t._v(" "),e("table",{staticClass:"table table-hover"},[t._m(0),t._v(" "),e("tbody",t._l(t.questions,function(i,s){return e("tr",{key:i._id},[e("td",[t._v(t._s(s+1))]),t._v(" "),e("td",[e("a",{attrs:{href:i.imageUrl,target:"_blank"}},[e("img",{attrs:{src:i.imageUrl,width:"50",height:"50",alt:""}})])]),t._v(" "),t._l(i.answers,function(i){return e("td",{key:i.id},[t._v(t._s(i.text)+" "),e("i",[t._v("("+t._s(i.pickAmount)+")")])])}),t._v(" "),e("td",[e("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"EditQuestion",params:{questionId:i._id,topicId:t.topic._id}}}},[t._v("Редактировать")]),t._v(" "),e("router-link",{staticClass:"btn btn-danger",attrs:{to:{name:"DeleteQuestion",params:{questionId:i._id,topicId:t.topic._id}}}},[t._v("Удалить")])],1)],2)}))])])},staticRenderFns:[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("thead",[e("tr",[e("td",[t._v("#")]),t._v(" "),e("td",[t._v("Картинка")]),t._v(" "),e("td",[t._v("Ответ 1")]),t._v(" "),e("td",[t._v("Ответ 2")]),t._v(" "),e("td",[t._v("Ответ 3")]),t._v(" "),e("td",[t._v("Ответ 4")]),t._v(" "),e("td",[t._v("#")])])])}]};var U=e("VU/8")($,x,!1,function(t){e("gmrR")},"data-v-44802d72",null).exports,A=e("Zrlr"),E=e.n(A),T=function t(i,e){E()(this,t),this.id=i,this.text=e},D={data:function(){return{question:{information:{text:""}},notifications:[],answers:[]}},methods:{addQuestion:function(){var t=this;this.question.topicId=this.$route.params.topicId,this.answers.push(new T(1,document.getElementById("question_answer1").value)),this.answers.push(new T(2,document.getElementById("question_answer2").value)),this.answers.push(new T(3,document.getElementById("question_answer3").value)),this.answers.push(new T(4,document.getElementById("question_answer4").value)),this.question.answers=this.answers,this.$http.post(u.a.api.uri+"questions/",this.question,{headers:{"Content-Type":"application/json"}}).then(function(i){t.notifications.push({type:"success",message:"Вопрос успешно создан"})},function(i){t.notifications.push({type:"danger",message:"Вопрос не создан, что-то пошло не так"})})}},components:{notification:v}},I={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"create-question"}},[e("h1",[t._v("Создать вопрос")]),t._v(" "),e("p",[e("router-link",{attrs:{to:{name:"Questions",params:{topicId:this.$route.params.topicId}}}},[t._v("Вернуться к вопросам")])],1),t._v(" "),e("notification",{attrs:{notifications:t.notifications}}),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("form",{on:{submit:function(i){i.preventDefault(),t.addQuestion(i)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{name:"Question_image"}},[t._v("Картинка")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.question.imageUrl,expression:"question.imageUrl"}],staticClass:"form-control",attrs:{type:"text",id:"question_imageUrl",required:""},domProps:{value:t.question.imageUrl},on:{input:function(i){i.target.composing||t.$set(t.question,"imageUrl",i.target.value)}}})]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{name:"Information"}},[t._v("Интересный факт")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.question.information.text,expression:"question.information.text"}],staticClass:"form-control",attrs:{rows:"5",id:"information"},domProps:{value:t.question.information.text},on:{input:function(i){i.target.composing||t.$set(t.question.information,"text",i.target.value)}}})]),t._v(" "),t._m(4)])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("img",{directives:[{name:"show",rawName:"v-show",value:t.question.imageUrl,expression:"question.imageUrl"}],attrs:{src:t.question.imageUrl,alt:""}})])])],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"form-group"},[i("label",{attrs:{name:"Question_answer1"}},[this._v("Ответ 1 (верный)")]),this._v(" "),i("input",{staticClass:"form-control",attrs:{type:"text",id:"question_answer1",required:""}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"form-group"},[i("label",{attrs:{name:"Question_answer2"}},[this._v("Ответ 2")]),this._v(" "),i("input",{staticClass:"form-control",attrs:{type:"text",id:"question_answer2",required:""}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"form-group"},[i("label",{attrs:{name:"Question_answer3"}},[this._v("Ответ 3")]),this._v(" "),i("input",{staticClass:"form-control",attrs:{type:"text",id:"question_answer3",required:""}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"form-group"},[i("label",{attrs:{name:"Question_answer4"}},[this._v("Ответ 4")]),this._v(" "),i("input",{staticClass:"form-control",attrs:{type:"text",id:"question_answer4",required:""}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"form-group"},[i("button",{staticClass:"btn btn-primary"},[this._v("Создать")])])}]};var Q=e("VU/8")(D,I,!1,function(t){e("Qgyy")},"data-v-73857e5e",null).exports,k={data:function(){return{question:{information:{text:String}},notifications:[]}},created:function(){this.getQuestion()},methods:{getQuestion:function(){var t=this;this.$http.get(u.a.api.uri+"questions/"+this.$route.params.questionId).then(function(i){t.question=i.body},function(t){})},editQuestion:function(){var t=this;this.$http.patch(u.a.api.uri+"questions/"+this.$route.params.questionId,this.question,{headers:{"Content-Type":"application/json"}}).then(function(i){t.notifications.push({type:"success",message:"Вопрос успешно обновлен"})},function(i){t.notifications.push({type:"danger",message:"Что-то пошло не так"})})}},components:{notification:v}},S={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"update-question"}},[e("h1",[t._v("Редактировать вопрос")]),t._v(" "),e("p",[e("router-link",{attrs:{to:{name:"Questions",params:{topicId:this.$route.params.topicId}}}},[t._v("Вернуться к вопросам")])],1),t._v(" "),e("notification",{attrs:{notifications:t.notifications}}),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("form",{on:{submit:function(i){i.preventDefault(),t.editQuestion(i)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{name:"Question_image"}},[t._v("Картинка")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.question.imageUrl,expression:"question.imageUrl"}],staticClass:"form-control",attrs:{type:"text",id:"question_imageUrl",required:""},domProps:{value:t.question.imageUrl},on:{input:function(i){i.target.composing||t.$set(t.question,"imageUrl",i.target.value)}}})]),t._v(" "),t._l(t.question.answers,function(i){return e("div",{key:i.id,staticClass:"form-group"},[e("label",{attrs:{name:"Question_answer"}},[t._v("Ответ "+t._s(i.id))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:i.text,expression:"answers.text"}],staticClass:"form-control",attrs:{type:"text",id:"question_answer",required:""},domProps:{value:i.text},on:{input:function(e){e.target.composing||t.$set(i,"text",e.target.value)}}})])}),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{name:"Information"}},[t._v("Интересный факт")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.question.information.text,expression:"question.information.text"}],staticClass:"form-control",attrs:{rows:"5",id:"information"},domProps:{value:t.question.information.text},on:{input:function(i){i.target.composing||t.$set(t.question.information,"text",i.target.value)}}})]),t._v(" "),t._m(0)],2)]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("img",{directives:[{name:"show",rawName:"v-show",value:t.question.imageUrl,expression:"question.imageUrl"}],attrs:{src:t.question.imageUrl,alt:""}})])])],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"form-group"},[i("button",{staticClass:"btn btn-primary"},[this._v("Сохранить")])])}]};var B=e("VU/8")(k,S,!1,function(t){e("VrN5")},"data-v-48d86521",null).exports,N={data:function(){return{notifications:[]}},methods:{deletequestion:function(){var t=this;this.$http.delete(u.a.api.uri+"questions/"+this.$route.params.questionId,{headers:{"Content-Type":"application/json"}}).then(function(i){t.$router.push({name:"Questions",params:{topicId:t.$route.params.topicId}})},function(i){t.notifications.push({type:"danger",message:"Что-то пошло не так, вопрос не удален"})})}},components:{notification:v}},F={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"delete-question"}},[e("h1",[t._v("Удалить вопрос")]),t._v(" "),e("p",[e("router-link",{attrs:{to:{name:"Questions",params:{topicId:this.$route.params.topicId}}}},[t._v("Вернуться к вопросам")])],1),t._v(" "),e("notification",{attrs:{notifications:t.notifications}}),t._v(" "),e("form",{on:{submit:function(i){i.preventDefault(),t.deletequestion(i)}}},[t._m(0)])],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("p",[i("button",{staticClass:"btn btn-danger"},[this._v("Удалить вопрос")])])}]},P=e("VU/8")(N,F,!1,null,null,null).exports,R={data:function(){return{artists:[],originalArtists:[],artistSearch:""}},created:function(){this.fetchArtistData()},methods:{fetchArtistData:function(){var t=this;this.$http.get(u.a.api.uri+"rs/artists").then(function(i){t.artists=i.body,t.originalArtists=t.artists},function(t){})},searchArtists:function(){if(""!==this.artistSearch){for(var t=[],i=0;i<this.originalArtists.length;i++){this.originalArtists[i].name.toLowerCase().indexOf(this.artistSearch.toLowerCase())>=0&&t.push(this.originalArtists[i])}this.artists=t}else this.artists=this.originalArtists}}},V={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"all-artists"}},[e("h1",[t._v("Художники")]),t._v(" "),e("p",[e("router-link",{attrs:{to:{name:"AllTopics"}}},[t._v("Вернуться назад")])],1),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("p",[e("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"CreateArtist"}}},[t._v("Добавить художника")])],1)]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("p",{staticClass:"text-right"},[e("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"CreateArtStyle"}}},[t._v("Добавить стиль")])],1)])]),t._v(" "),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.artistSearch,expression:"artistSearch"}],staticClass:"form-control",attrs:{type:"text",name:"search",placeholder:"Имя художника"},domProps:{value:t.artistSearch},on:{keyup:t.searchArtists,input:function(i){i.target.composing||(t.artistSearch=i.target.value)}}})]),t._v(" "),e("table",{staticClass:"table table-hover"},[t._m(0),t._v(" "),e("tbody",t._l(t.artists,function(i,s){return e("tr",{key:i._id},[e("td",[t._v(t._s(s+1))]),t._v(" "),e("td",[t._v(t._s(i.name))]),t._v(" "),e("td",[t._v(t._s(i.styles.toString()))]),t._v(" "),e("td",[e("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"EditArtist",params:{artistId:i._id}}}},[t._v("редактировать")]),t._v(" "),e("router-link",{staticClass:"btn btn-danger",attrs:{to:{name:"DeleteArtist",params:{artistId:i._id}}}},[t._v("удалить")])],1)])}))])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("thead",[i("tr",[i("td",[this._v("#")]),this._v(" "),i("td",[this._v("Имя")]),this._v(" "),i("td",[this._v("Стили")])])])}]},j=e("VU/8")(R,V,!1,null,null,null).exports,L=e("RUzx"),O=e.n(L),Z={data:function(){return{artist:{},notifications:[],options:[]}},created:function(){this.getArtist(),this.fetchArtStylesData()},methods:{getArtist:function(){var t=this;this.$http.get(u.a.api.uri+"rs/artists/"+this.$route.params.artistId).then(function(i){t.artist=i.body},function(t){})},fetchArtStylesData:function(){var t=this;this.$http.get(u.a.api.uri+"rs/artstyles").then(function(i){var e=i.body;t.options=e.map(function(t){return t.title})},function(t){})},editArtist:function(){var t=this;this.$http.patch(u.a.api.uri+"rs/artists/"+this.$route.params.artistId,this.artist,{headers:{"Content-Type":"application/json"}}).then(function(i){t.notifications.push({type:"success",message:"Данные о художнике обновлены"})},function(i){t.notifications.push({type:"danger",message:"Что-то пошло не так"})})}},components:{Multiselect:O.a,notification:v}},z={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"update-artist"}},[e("h1",[t._v("Редактировать")]),t._v(" "),e("p",[e("router-link",{attrs:{to:{name:"Artists"}}},[t._v("Вернуться к списку художников")])],1),t._v(" "),e("notification",{attrs:{notifications:t.notifications}}),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("form",{on:{submit:function(i){i.preventDefault(),t.editArtist(i)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{name:"artist_title"}},[t._v("Имя")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.artist.name,expression:"artist.name"}],staticClass:"form-control",attrs:{type:"text",id:"artist_name",required:""},domProps:{value:t.artist.name},on:{input:function(i){i.target.composing||t.$set(t.artist,"name",i.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("div",[e("multiselect",{attrs:{options:t.options,multiple:!0,searchable:!0,"close-on-select":!1,placeholder:"Выбрать направления"},model:{value:t.artist.styles,callback:function(i){t.$set(t.artist,"styles",i)},expression:"artist.styles"}})],1)]),t._v(" "),t._m(0)])])])],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"form-group"},[i("button",{staticClass:"btn btn-primary"},[this._v("Сохранить")])])}]};var M=e("VU/8")(Z,z,!1,function(t){e("FdZQ")},null,null).exports,G={data:function(){return{artist:{},notifications:[],options:[]}},created:function(){this.fetchArtStylesData()},methods:{fetchArtStylesData:function(){var t=this;this.$http.get(u.a.api.uri+"rs/artstyles").then(function(i){var e=i.body;t.options=e.map(function(t){return t.title})},function(t){})},addArtist:function(){var t=this;this.$http.post(u.a.api.uri+"rs/artists/",this.artist,{headers:{"Content-Type":"application/json"}}).then(function(i){t.notifications.push({type:"success",message:"Художник успешно добавлен"})},function(i){t.notifications.push({type:"danger",message:"Неудалось добавить"})})}},components:{Multiselect:O.a,notification:v}},H={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"create-artist"}},[e("h1",[t._v("Добавление нового художника в базу")]),t._v(" "),e("p",[e("router-link",{attrs:{to:{name:"Artists"}}},[t._v("Вернуться к списку художников")])],1),t._v(" "),e("notification",{attrs:{notifications:t.notifications}}),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("form",{on:{submit:function(i){i.preventDefault(),t.addArtist(i)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{name:"Artist_name"}},[t._v("Имя")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.artist.name,expression:"artist.name"}],staticClass:"form-control",attrs:{type:"text",id:"artist_name",required:""},domProps:{value:t.artist.name},on:{input:function(i){i.target.composing||t.$set(t.artist,"name",i.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("div",[e("multiselect",{attrs:{options:t.options,multiple:!0,searchable:!0,"close-on-select":!1,placeholder:"Выбрать направления"},model:{value:t.artist.styles,callback:function(i){t.$set(t.artist,"styles",i)},expression:"artist.styles"}})],1)]),t._v(" "),t._m(0)])])])],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"form-group"},[i("button",{staticClass:"btn btn-primary"},[this._v("Создать")])])}]};var J=e("VU/8")(G,H,!1,function(t){e("5ZiA")},null,null).exports,W={data:function(){return{artist:{},notifications:[]}},created:function(){this.getArtist()},methods:{getArtist:function(){var t=this;this.$http.get(u.a.api.uri+"rs/artists/"+this.$route.params.artistId).then(function(i){t.artist=i.body},function(t){})},deleteArtist:function(){var t=this;this.$http.delete(u.a.api.uri+"rs/artists/"+this.$route.params.artistId,this.artist,{headers:{"Content-Type":"application/json"}}).then(function(i){t.$router.push({name:"Artists"})},function(i){t.notifications.push({type:"danger",message:"Что-то пошло не так"})})}},components:{notification:v}},K={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"delete-artist"}},[e("h1",[t._v("Удалить "+t._s(t.artist.title)+" из базы")]),t._v(" "),e("p",[e("router-link",{attrs:{to:{name:"Artists"}}},[t._v("Вернуться к списку художников")])],1),t._v(" "),e("notification",{attrs:{notifications:t.notifications}}),t._v(" "),e("form",{on:{submit:function(i){i.preventDefault(),t.deleteArtist(i)}}},[t._m(0)])],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("p",[i("button",{staticClass:"btn btn-danger"},[this._v("Удалить")])])}]},X=e("VU/8")(W,K,!1,null,null,null).exports,Y={data:function(){return{artStyle:{},notifications:[]}},methods:{addArtStyle:function(){var t=this;this.$http.post(u.a.api.uri+"rs/artStyles/",this.artStyle,{headers:{"Content-Type":"application/json"}}).then(function(i){t.notifications.push({type:"success",message:"Стиль успешно добавлен"})},function(i){t.notifications.push({type:"danger",message:"Неудалось добавить"})})}},components:{notification:v}},tt={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"create-artStyle"}},[e("h1",[t._v("Добавление нового художественного стиля в базу")]),t._v(" "),e("p",[e("router-link",{attrs:{to:{name:"Artists"}}},[t._v("Вернуться к списку художников")])],1),t._v(" "),e("notification",{attrs:{notifications:t.notifications}}),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("form",{on:{submit:function(i){i.preventDefault(),t.addArtStyle(i)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{name:"ArtStyle_title"}},[t._v("Название")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.artStyle.title,expression:"artStyle.title"}],staticClass:"form-control",attrs:{type:"text",id:"artStyle_title",required:""},domProps:{value:t.artStyle.title},on:{input:function(i){i.target.composing||t.$set(t.artStyle,"title",i.target.value)}}})]),t._v(" "),t._m(0)])])])],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"form-group"},[i("button",{staticClass:"btn btn-primary"},[this._v("Создать")])])}]},it=e("VU/8")(Y,tt,!1,null,null,null).exports,et=function t(i,e){E()(this,t),this.id=i,this.text=e},st={data:function(){return{question:{information:{text:""}},notifications:[],answers:[],questionDB:[],questionDB_ident:0}},created:function(){this.getQuestionDB()},methods:{getQuestionDB:function(){var t=this;this.$http.get(u.a.api.uri+"questionDB").then(function(i){t.questionDB=i.body},function(t){})},incIdent:function(){this.questionDB_ident++,this.getNewQuestion(),this.notifications=[]},getNewQuestion:function(){var t=this,i=this.questionDB[this.questionDB_ident-1].author;this.$http.get(u.a.api.uri+"rs/similarArtists?artist="+i).then(function(i){var e=i.body;document.getElementById("question_answer1").value=t.questionDB[t.questionDB_ident-1].author;for(var s=0;s<e.length;s++)document.getElementById("question_answer"+(s+2)).value=e[s].name;t.question.imageUrl=t.questionDB[t.questionDB_ident-1].imgUri,t.question.information.text=t.questionDB[t.questionDB_ident-1].author+". "+t.questionDB[t.questionDB_ident-1].information},function(e){t.clearAnswers(),t.notifications.push({type:"info",message:"Возможно "+i+" нет в базе"})})},addQuestion:function(){var t=this;this.question.topicId=this.$route.params.topicId,this.answers.push(new et(1,document.getElementById("question_answer1").value)),this.answers.push(new et(2,document.getElementById("question_answer2").value)),this.answers.push(new et(3,document.getElementById("question_answer3").value)),this.answers.push(new et(4,document.getElementById("question_answer4").value)),this.question.answers=this.answers,this.$http.post("https://api.imgur.com/3/upload",this.question.imageUrl,{headers:{"Content-Type":"application/json",Authorization:"Client-ID d0b4d4481fe626b"}}).then(function(i){t.question.imageUrl=i.body.data.link,t.$http.post(u.a.api.uri+"questions/",t.question,{headers:{"Content-Type":"application/json"}}).then(function(i){t.notifications.push({type:"success",message:"Вопрос успешно создан"}),t.answers=[]},function(i){t.notifications.push({type:"danger",message:"Вопрос не создан, что-то пошло не так"})})},function(i){t.notifications.push({type:"info",message:"Не отправил картинку на imgur :-(("})})},clearAnswers:function(){for(var t=1;t<=4;t++)document.getElementById("question_answer"+t).value="";this.question.imageUrl="",this.question.information.text=""}},components:{notification:v}},nt={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"create-question"}},[e("h1",[t._v("Создать вопрос")]),t._v(" "),e("p",[e("router-link",{attrs:{to:{name:"Questions",params:{topicId:this.$route.params.topicId}}}},[t._v("Вернуться к вопросам")])],1),t._v(" "),e("notification",{attrs:{notifications:t.notifications}}),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("form",{on:{submit:function(i){i.preventDefault(),t.addQuestion(i)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{name:"Question_image"}},[t._v("Картинка")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.question.imageUrl,expression:"question.imageUrl"}],staticClass:"form-control",attrs:{type:"text",id:"question_imageUrl",required:""},domProps:{value:t.question.imageUrl},on:{input:function(i){i.target.composing||t.$set(t.question,"imageUrl",i.target.value)}}})]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{name:"Information"}},[t._v("Интересный факт")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.question.information.text,expression:"question.information.text"}],staticClass:"form-control",attrs:{rows:"5",id:"information"},domProps:{value:t.question.information.text},on:{input:function(i){i.target.composing||t.$set(t.question.information,"text",i.target.value)}}})]),t._v(" "),t._m(4)])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("img",{directives:[{name:"show",rawName:"v-show",value:t.question.imageUrl,expression:"question.imageUrl"}],attrs:{src:t.question.imageUrl,id:"questionDB_ident",alt:""}}),t._v(" "),e("div",{staticClass:"input-group me"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.questionDB_ident,expression:"questionDB_ident"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.questionDB_ident},on:{change:t.getNewQuestion,input:function(i){i.target.composing||(t.questionDB_ident=i.target.value)}}}),t._v(" "),e("span",{staticClass:"input-group-btn"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.incIdent}},[t._v("Next")])])]),t._v(" "),e("p",[t._v("Макс: "+t._s(t.questionDB.length))])])])],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"form-group"},[i("label",{attrs:{name:"Question_answer1"}},[this._v("Ответ 1 (верный)")]),this._v(" "),i("input",{staticClass:"form-control",attrs:{type:"text",id:"question_answer1",required:""}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"form-group"},[i("label",{attrs:{name:"Question_answer2"}},[this._v("Ответ 2")]),this._v(" "),i("input",{staticClass:"form-control",attrs:{type:"text",id:"question_answer2",required:""}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"form-group"},[i("label",{attrs:{name:"Question_answer3"}},[this._v("Ответ 3")]),this._v(" "),i("input",{staticClass:"form-control",attrs:{type:"text",id:"question_answer3",required:""}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"form-group"},[i("label",{attrs:{name:"Question_answer4"}},[this._v("Ответ 4")]),this._v(" "),i("input",{staticClass:"form-control",attrs:{type:"text",id:"question_answer4",required:""}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"form-group"},[i("button",{staticClass:"btn btn-primary"},[this._v("Создать")])])}]};var at=e("VU/8")(st,nt,!1,function(t){e("O60v")},"data-v-9ba0735c",null).exports;s.a.use(o.a),s.a.use(r.a);var ot=new o.a({routes:[{path:"/",name:"AllTopics",component:m},{path:"/create_topic",name:"CreateTopic",component:_},{path:"/delete_topic",name:"DeleteTopic",component:y},{path:"/edit_topic",name:"EditTopic",component:w},{path:"/questions",name:"Questions",component:U},{path:"/create_questions",name:"CreateQuestion",component:Q},{path:"/edit_questions",name:"EditQuestion",component:B},{path:"/delete_questions",name:"DeleteQuestion",component:P},{path:"rs/artists",name:"Artists",component:j},{path:"rs/edit_artist",name:"EditArtist",component:M},{path:"rs/create_artist",name:"CreateArtist",component:J},{path:"rs/delete_artist",name:"DeleteArtist",component:X},{path:"rs/create_artstyle",name:"CreateArtStyle",component:it},{path:"rs/gen_question",name:"GenerateQuestion",component:at}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:ot,components:{App:a},template:"<App/>"})},O60v:function(t,i){},Qgyy:function(t,i){},VrN5:function(t,i){},gFvQ:function(t,i){},gmrR:function(t,i){},u56i:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.710e418d83c42a6aa254.js.map