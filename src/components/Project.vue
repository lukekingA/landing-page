<template>
  <div class="project">
    <a class="border-bottom border-light text-light txt-shadow" :href="project.link">
      <h3>{{project.title}}</h3>
    </a>
    <p class="text-white txt-shadow font-weight-bold" v-html="project.description"></p>

  </div>
</template>


<script>
  export default {
    name: 'project',
    data() {
      return {}
    },
    props: ['project'],
    computed: {},
    methods: {},
    components: {}
  }
</script>


<style scoped>

</style>