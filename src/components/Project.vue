<template>
  <div class="project">
    <a class="border-bottom border-light text-light txt-shadow" :href="project.link">{{project.title}}</a>
    <p><small class="text-light txt-shadow" v-html="project.description"></small></p>

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