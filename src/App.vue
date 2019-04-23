<template>
  <div id="app" class="container-fluid">

    <router-view />
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css?family=Cairo');

  html,
  body {
    height: 100%;
  }

  #app {
    font-family: 'Cairo', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  .txt-shadow {
    text-shadow: 2px 2px 2px rgb(61, 61, 61);
  }
</style>