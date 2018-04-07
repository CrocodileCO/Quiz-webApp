<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header"> <button type="button" class="collapsed navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-3" aria-expanded="false"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
          <a href="#" class="navbar-brand">QUIZ-server</a>
           </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-3"> <button type="button" class="btn btn-default navbar-btn pull-right" @click="$auth.logout()">logout</button> </div>
      </div>
    </nav>

    <div class="container">
      <div id="page">
        <transition name="fade">
          <router-view/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.navbar {
  margin-bottom: 0px;
}
</style>
