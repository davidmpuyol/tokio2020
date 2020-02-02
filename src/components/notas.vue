<template>
  <div id="app" class="container-fluid bg-dark">
    <div class="d-flex flex-column container-fluid flex-grow" id="contenedor">
            <div class="row text-white">
                <div class="col-md-10 offset-md-1">
                    <h1 class="text-white mt-3 text-center">Proyecto Vue.js</h1>
                </div>
                <div class="col-md-10 offset-md-1">
                    <h1 class="text-white mb-3 text-center">David Medina Puyol</h1>
                </div>
                <div class="col-8 col-md-8 offset-md-1 div-add">
                    <input type="text" v-on:keydown.enter="add" class="form-control-lg form-control" :value="texto" @input="evt=>texto = evt.target.value" name="" id="texto" aria-describedby="helpId" placeholder="¿Qué quieres recordar?" required>
                </div>
                <div class="col-4 col-md-2 d-flex align-items-center">
                    <button class="btn btn-lg w-100" :class='texto == "" ? "disabled btn-secondary" : "btn-danger"' id="add" v-on:click="add">Añadir</button>
                </div>
                <hr class="col-12 col-md-10 offset-md-1 bg-light p-0">
                <div class="col-12 col-md-8 offset-md-1">
                    <span>{{nCompletadas}} tareas completadas de un total de {{nTareas}}</span>
                </div>
                <div class="col-12 col-md-8 offset-md-1">
                    <span class="h6 text-warning" id="eliminar" v-on:click="eliminaCompletados"><b>x</b> Eliminar completados</span>
                </div>
                <div class="dropdown pl-0 col-12 col-md-2 offset-md-1" id="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                      aria-expanded="false">
                        Ordenar:
                      </button>
                  <div class="dropdown-menu col-12 col-md-4 offset-md-1" aria-labelledby="triggerId">
                    <button class="dropdown-item" @click="ordenar(1)" id="ascendente" name="orden" value="1">Ascendente</button>
                    <button class="dropdown-item" @click="ordenar(2)" id="ascendente" name="orden" value="2">Descendente</button>
                    <button class="dropdown-item" @click="ordenar(3)" id="ascendente" name="orden" value="3">Prioridad</button>
                  </div>
                </div>
                <hr class="col-12 col-md-10 offset-md-1 bg-light p-0">
                <div class="col-12 col-md-10 offset-md-1" id="tareas">
                    <ul class="list-group list-group-flush">
                        <div class ="col-12 col-md-2 mb-2">
                            <input type="text" class="form-control" :value="textoBusqueda" @input="evt=>textoBusqueda = evt.target.value" aria-describedby="helpId" placeholder="filtrar">
                        </div>
                        <nota v-for="(todo,index) in listaOrdenada" v-bind:todo="todo" :index="index" v-bind:key="index" @prioridadCambiada="changePriority" v-on:click="borrar">
                        </nota>
                    </ul>
                </div>
            </div>
      </div>
      <pie></pie>
  </div>
</template>

<script>

import nota from './nota.vue'
import pie from './pie.vue'

export default {
  name: 'notas',
  components: {
    nota,
    pie
  },
  data(){
      return{
        todos: [
        ],
        listavisible: true,
        texto:"",
        orden: 1,
        textoBusqueda: ""
      }
  },
  mounted(){
    if(localStorage.todos){
        this.todos = JSON.parse(localStorage.todos);
    }
  },
  updated(){
      localStorage.todos = JSON.stringify(this.todos);
  },
    computed:{
        nCompletadas: function(){
            let tareas = 0;
            this.todos.forEach((todo)=>{
                if(todo.checked)
                    tareas++;
            })
            return tareas;
        },
        nTareas: function(){
            return this.todos.length;
        },
        listaOrdenada: function(){
            let lista = this.todos.slice();
            
            if(this.textoBusqueda.length > 0){
                lista = this.todos.slice().filter((todo)=>{
                    return todo.text.includes(this.textoBusqueda);
                })
            }
            if(this.orden == 1){
                return lista.sort((nota1,nota2)=> {
                    var a1 = nota1.text.toLowerCase();
                    var b1 = nota2.text.toLowerCase();
                    return a1 < b1 ? -1 : a1 > b1 ? 1 : 0;
                });
            }
            else if(this.orden == 3){
            return lista.sort((nota1,nota2)=> {
                    var a1 = nota1.priority;
                    var b1 = nota2.priority;
                    return a1 > b1 ? -1 : a1 < b1 ? 1 : 0;
                });
            }
            else{
                return lista.sort((nota1,nota2)=> {
                    var a1 = nota1.text.toLowerCase();
                    var b1 = nota2.text.toLowerCase();
                    return a1 > b1 ? -1 : a1 < b1 ? 1 : 0;
                });
            }
        },
    },
    methods:{
      add: function(){
          if(this.texto != ""){
            this.todos.push({text: this.texto, checked:false, date: new Date(), symbol:"○",priority:1, id: this.generarUID});
            this.texto = "";
          }
      },
      borrar: function(nota){
        this.todos = this.todos.filter((todo)=>{
              return todo != nota;
          })
      },
      eliminaCompletados: function(){
          this.todos = this.todos.filter((todo)=>{
              return !todo.checked;
          })
      },
      changePriority: function(){
        this.$forceUpdate()
      },
      ordenar: function(nOrden){
        this.orden = nOrden;
      },
    }
  }
</script>

<style>
.list-group{
    border-color:white;
}
body{
    min-height:100vh;
}

#eliminar{
    cursor:pointer;
}
ul{
    padding-left:0;
}
#contenedor{
    min-height:100vh
}
#app{
    min-height:100vh;
}
hr{
    padding:0;
}
@media (max-width: 850px){
    h1{
        font-size: 150%!important;
    }
    #texto::placeholder{
        font-size: 15px!important;
    }
    #add{
        font-size: 16px!important;
        height:100%;
    }
    #dropdown{
        padding-left:15px!important;
    }
}
</style>
