<template>
  <div class="resume">
    <top-header></top-header>
    <div class="row">
      <div class="col">
        <img class="w-100" src="@/assets/Resume.png" alt="">
      </div>
    </div>

  </div>
</template>


<script>
  import TopHeader from '@/components/TopHeader.vue'
  import Resume from '@/assets/Resume.png'
  export default {
    name: 'resume',
    data() {
      return {}
    },
    computed: {},
    methods: {},
    components: {
      TopHeader
    }
  }
</script>


<style scoped>

</style>