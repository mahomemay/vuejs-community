<template>
  <div id="app">
      <v-header></v-header>
      <transition name="el-zoom-in-top" appear mode="out-in">
          <router-view v-loading="$store.state.loading"></router-view>
      </transition>
      <v-footer></v-footer>
  </div>
</template>

<script>
    import VHeader from './components/Header.vue'
    import VFooter from './components/Footer.vue'
    import VMain from './components/Main.vue'

    export default {
        name: 'app',
        components: {
            VHeader,
            VFooter,
            VMain
        },
        data(){
        	return {
        		loading: true
            }
        }
    }
</script>

<style>

</style>
