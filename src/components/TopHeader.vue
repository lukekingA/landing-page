<template>
  <div class="top-header row sticky-top">
    <div class="d-flex justify-content-between header-height bg-secondary col shadow">
      <img class="d-none m-3 d-sm-inline rounded-circle shadow-sm" src="../assets/headShot.jpg" alt="Head Shot">
      <div class="d-flex align-items-center mr-3">
        <a class="text-light mr-2 txt-shadow text-decoration-none" href="#about-me">About</a>
        <a class="text-light mr-2 txt-shadow text-decoration-none" href="#projects">Projects</a>
        <a class="text-light mr-2 txt-shadow text-decoration-none" href="#contact">Contact</a>
        <a v-if="home" @click="goResume" class="text-light mr-2 txt-shadow text-decoration-none" href="#">Resume</a>
        <a v-else @click="goHome" class="text-light mr-2 txt-shadow text-decoration-none" href="#"">Home</a>
      </div>
    </div>

  </div>
</template>


<script>
  export default {
    name: 'top-header',
    data() {
      return {}
    },
    computed: {
      home(){
        return this.$route.name == 'home'
      }
    },
    methods: {
      goHome(){
        this.$router.push({name:'home'})
      },
      goResume(){
        this.$router.push({name:'resume'})
      }
    },
    components: {}
  }
</script>


<style scoped>
  .header-height {
    height: 100px;
  }

  a {
    font-size: 1.25rem;
  }

  img {
    width: auto;
    height: 80%;
  }
</style>