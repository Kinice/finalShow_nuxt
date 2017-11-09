<template>
  <div>
    <header-nav></header-nav>
    <nuxt/>
    <b-footer></b-footer>
  </div>
</template>
<script>
  import headerNav from '../components/header.vue'
  import bFooter from '../components/footer.vue'

  export default{
    components: {
      headerNav,bFooter
    }
  }
</script>
<style>
  
</style>
