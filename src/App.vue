<template>

    <div id="main_container">
      <router-view></router-view>
      <NavBar @custom-event-name="setMessage" width='300px' height='50px' color="#C8C8C8"/>
    </div>


</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    
  },

  data() {
    return {
      
    }
  },

  methods: {
  
  },

}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#main_container {
  display: flex;
  flex-direction: row;
  height: 100vh;
}


</style>
