<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <hr>

    <div class="navigation">
      <ul class="nav nav-pills nav-fill">
        <li class="nav-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact">Contact</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/blog">Blog</router-link>
        </li>
      </ul>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Simple Vue Routing App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #f2f2f2;
  color: #2c3e50;
  width: 50rem;
  height: 50vh;
  margin: 10rem auto !important;
  padding: 2rem;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
