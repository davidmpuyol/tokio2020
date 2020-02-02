<template lang="html">
    <li class="row text-white list-group-item bg-dark d-flex p-1" :class="{marcada: todo.checked}">
      <div class="col-2 col-md-1 checkbox-div d-flex align-items-center justify-content-center">
        <!--
        <label class="labelCheck img-fluid" :class="todo.checked ? 'checked' : 'unchecked'">
          <input v-model="todo.checked" id="checkbox" name="checkbox" type="checkbox" autocomplete="off">
        </label>
        -->
        <img :src=" todo.checked ? require('../assets/checked.png') : require('../assets/unchecked.png')" @click="todo.checked = !todo.checked" class="imagenCheck">
      </div>
      <div class="col-8 col-md-10 d-flex flex-column justify-content-between">
        <div class="row">
          <p :class="{notaMarcada: todo.checked}" class="h4">{{todo.text}}</p>
        </div>
        <div class="row">
          <div class="mr-2">
            Prioridad:
          </div>
          <div class="d-flex flex-row align-items-center botones" role="group">
            <button type="button" class="badge badge-info" :class="obtenerClase(1,todo)" @click="changePriority(todo,1)">Baja</button>
            <button type="button" class="badge badge-primary" :class="obtenerClase(2,todo)" @click="changePriority(todo,2)">Media</button>
            <button type="button" class="badge badge-danger" :class="obtenerClase(3,todo)" @click="changePriority(todo,3)">Alta</button>
          </div>
          <div class="ml-2">
            Creado {{tiempoCreacion}}
          </div>
        </div>
      </div>
      <div class="eliminar col-2 col-md-1 d-flex align-items-center justify-content-center" @click="borrar(todo)">
          <img class="img-fluid icono-eliminar" src="../assets/delete-icon.png">
      </div>
    </li>
</template>

<script lang="js">
  var moment = require('moment');
  moment.locale('es');
  export default  {
    name: 'nota',
    props: ['todo','index'],
    mounted () {
    },
    methods: {
      borrar: function(todo){
        this.$emit('click',todo);
      },
      changePriority: function(todo,priority){
        todo.priority = priority;
        this.$emit('prioridadCambiada');
      },
      obtenerClase: function(prioridad,todo){
        return prioridad == todo.priority ? "" : "prioridad-inactiva";
      },
      changeCheck: function(todo){
        todo.check = !todo.check;
      }
    },
    computed: {
      tiempoCreacion: function(){
        let fechaCreacion = new Date(this.$props.todo.date)
        let transcurrido = moment(fechaCreacion).fromNow();
        return transcurrido;
      }
    }
}
</script>

<style scoped lang="css">

.btn-group-sm button{
  height:20px;
  display:flex;
  flex-flow:row nowrap;
  justify-content:center;
  align-items:center;
}
.notaMarcada{
  color:green!important;
  text-decoration:line-through;
}
.checkbox-div{
  padding:0;
}
#checkbox{
    display:none;
}
.labelCheck{
  cursor:pointer;
  width:80%;
  height:80%;
  margin-bottom:0;
}
.imagenCheck{
  width:100%;
  height:auto;
  padding:10%;
}

.unchecked{
  background-image: url("../assets/unchecked.png") fixed center no-repeat;
  background-size: cover;
}
.checked{
  background-image: url("../assets/checked.png") fixed center no-repeat;
  background-size: cover;
}

.eliminar{
    cursor:pointer;
    padding:0;
}
.icono-eliminar{
  width:80%;
}
.prioridad-inactiva{
  background-color:grey!important;
}
.list-group-item{
  padding:0;
}
@media (max-width: 720px){
  .imagenCheck{
    width:80%;
    height:auto;
  }
  .h4{
    margin-right:20px;
    font-size:1rem;
    font-weight:500;
    color:orange;
  }
  .icono-eliminar{
    width:70%;
    height:auto;
  }
  .badge{
    border:none;
  }

}
</style>
