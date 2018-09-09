<template>
	<div class="main-container">
	<div>
		

	</div>

	<div class="sub-container">
		<p><b>Agenda</b> 31 de Julio 2018</p>
		<div class ="div-horas">

			<router-link to="/menu/control" class="dropdown-item" v-for="consulta in consultas" style="justify-content:space-between;">{{consulta}}  </router-link>
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
      consultas:["control mascota 1","control mascota 2","control mascota 3","control mascota 4","control mascota 5","control mascota 6"],
      hora:'13'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  text-align: left;
}
a {
  color: #42b983;
}
p {
	border-bottom: solid;
}

.main-container{
	display: flex;
	flex-direction: row;
	justify-content: space-between;

}

.sub-container{
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	width: 40%;
}
.div-horas{
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	height: 300px;
	width: 100%;
	border: groove;
}
.dropdown-item{
	text-align:left;
	padding-left: 2%;
	padding-top: 5%;
	border-bottom: ridge;
	border-color: grey;
}
</style>
