<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Super TP de Vue Usando Router</h1>
    <section>
      <router-link to='/'>Ver Personas</router-link> | 
      <router-link to="/add">Nueva Persona</router-link>
    </section>
     <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",  
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
