<template>
  <div>
  <p><u><b>Control médico</b></u></p>
  <div class="main-container">

  <div class="sub-container" >
    <p style="padding-left:10%;"><b>Franco</b></p>
    <img src="@/assets/franco.jpg" class="pet-image" >
    <button>Ver ficha</button>


  </div>

  <div class="sub-container">
    <div>
      <p>Tratamiento</p>
      <input type="text" name="tratamiento" v-model="tratamiento">
    </div>
    <div class="row-div">
      <div>
        <label for="start">desde</label>
        <input type="date" id="start" name="trip"
                 value="2018-07-22"
                 min="2018-01-01" max="2018-12-31" />
      </div>
      <div>
        <label for="start">hasta</label>
        <input type="date" id="start" name="trip"
                 value="2018-07-22"
                 min="2018-01-01" max="2018-12-31" />
      </div>
    </div>
    <div class="row-div">
      <p>Cada</p>
      <input type="text" name="repeticion" style="width:10%;">
      <p>Horas</p>
      <button v-on:click="agregar">Agregar otro</button>
    </div>
    <div style="padding-top:5%;">
      <p>Observaciones</p>
      <textarea rows="5" cols="60"></textarea>
      <div class="buttons">
        <button style="margin-left:0px" v-on:click="volver">Volver</button>
        <button style="margin-left:0px">Guardar</button>
      </div>
    </div>
  </div>
  <div class="sub-container" style="border:outset; right:0px;
  width:30%;">
    <p v-for="tratamiento in tratamientos" style="font-weight:bold;">
    {{tratamiento}}
    </p>
  </div>
  </div>
  </div>
</template>
<script>
export default {
  name: 'agenda',
  data () { 
    
    
    return {
      msg: 'Welcome to Your Vue.js App',
      tratamientos:[],
      tratamiento:""
    }
  },
  methods:{
    volver:function(){
      this.$router.push({path:'agenda'});
    },
    agregar:function(){
      this.tratamientos.push(this.tratamiento);
      this.tratamiento=""
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
h3{
  padding-left: 16%;
}
ul {
  list-style-type: none;
  padding: 0;
}
button{
  width: 30%;
  margin-left: 8%;
  margin-top: 2%;
  background-color: #009688;
  color: white;


}
p{
  margin: 2px;

}
li {
  display: inline-block;
  margin: 0 10px;
  text-align: left;
}
a {
  color: #42b983;
}
img{
  width: 40%;
  padding: 5px;
  border: dotted;
}
input{
  width: 90%;
}
textarea{
  width: 90%;
}
.main-container{
  display: flex;
  flex-direction: row;
  justify-content: space-between;

}
.right-container{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 50%;
}
.sub-container{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: auto;
  text-align: left;
  width: 50%;
  margin: 1%;
}
.row-div{
  display: flex;
  flex-direction: row;
  padding-top: 3%;
}
.buttons{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
