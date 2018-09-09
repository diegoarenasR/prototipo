<template>
  <div id="app" class="loginDiv">
    <div class="logo">
      <img src="./assets/petfeex.png">
    </div>
    <div class="datosLogin">
      <div></div>
      <div>
        <p>Usuario</p>
        <input type="text">
        <p>Contraseña</p>
        <input type="password">
      </div>
      <div class="buttons">
        <button v-on:click="login">Ingresar</button>
        <button>Registrarse</button>
      </div>    
    </div>   
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    login:function() {
      this.$router.push({name:'menu'});
    }
  },
  created:function(){
    console.log("name",this.$router)
  }
}
</script>
<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 60px;
  margin-left: 60px;
}
.loginDiv{
  display: flex;
  flex-direction: row;
}
.logo{
  flex-grow: 1;
  text-align: center;
}
.buttons{
  display: flex;
  flex-direction: row;
  margin-left:
  
}
.datosLogin{
  margin-top: 40px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  text-align: left; 

}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
button{
  background-color: #009688;
  color: white;
}
</style>
