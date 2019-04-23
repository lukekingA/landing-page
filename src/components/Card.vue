<template>
  <div class="card card-shadow my-4 p-2">
    <slot></slot>

  </div>
</template>


<script>
  export default {
    name: 'card',
    data() {
      return {}
    },
    computed: {},
    methods: {},
    components: {}
  }
</script>


<style scoped>
  .card-shadow {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  }

  .card {
    position: relative;
  }

  .card:before,
  .card:after {
    content: "";
    position: absolute;
    z-index: -5;
    bottom: 15px;
    width: 50%;
    height: 20%;
    box-shadow: 0 15px 10px rgba(0, 0, 0, 0.7);
  }

  .card:before {
    left: 10px;
    -webkit-transform: rotate(-2deg);
    transform: rotate(-2deg);
  }

  .card:after {
    right: 10px;
    -webkit-transform: rotate(2deg);
    transform: rotate(2deg);
  }
</style>