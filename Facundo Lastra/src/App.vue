<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Super TP de Vue Usando Router</h1>
    <section>
    <el-menu
        class="el-menu-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffffff">
        <el-menu-item index="1"><router-link to='/'>Ver Personas</router-link></el-menu-item>
        <el-menu-item index="2"><router-link to="/add">Nueva Persona</router-link></el-menu-item>
      </el-menu>
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
.router-link-active {
  color: white;
}
a {
  color: white;
}
</style>
