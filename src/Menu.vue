<template>
  <div id="app" class="container">

    <ul class="nav">
        <li class="row-div">
          <img src="@/assets/vet.jpg" class="image" >
          <div class="dropdown-menu">
            <router-link to="/menu/agenda" class="dropdown-item">Mi agenda</router-link>
            <router-link to="/menu/reservar" class="dropdown-item">Reservar hora</router-link>
            <router-link to="/menu/modificar" class="dropdown-item">Modificar hora</router-link>
            <router-link to="/menu/cancelar" class="dropdown-item">Cancelar hora</router-link>   
          </div>
          <div style="padding-left:10%;">
            <p style="font-size:0.7em;">Hora actual</p>
            <p style="font-size:0.7em;">12:00 pm</p>
          </div>

        </li>
      </ul>
      <div id="parent" class="component-div"><router-view/></div>
      
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  methods:{
    login:function() {
      this.$router.push({name:'login'});
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

h1, h2 {
  font-weight: normal;
}
h4{
  margin: 0px;
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
img{
  width: 9%;
  height: 9%;
  margin-right: 20%;


}
.component-div{
  position: fixed;
  left:15%;
  width: 70%;
}
.row-div{
  display: flex;
  flex-direction: row;
  padding-top: 3%;
}

</style>
