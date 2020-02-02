<template>
  <div class="d-flex flex-column justify-content-between container-fluid flex-grow bg-dark" id="app">
            <div class="row text-white">
                <div class="col-md-10 offset-md-1">
                    <h1 class="text-white mt-3 text-center">El tiempo</h1>
                </div>
                <div class="col-md-10 offset-md-1">
                    <h1 class="text-white mb-3 text-center">David Medina Puyol</h1>
                </div>
                <div class="col-12 col-md-10 offset-md-1 div-add">
                    <input type="text" class="form-control-lg form-control" v-model="textoBusqueda" @input="evt=>buscarPueblos(evt.target.value)" name="" id="texto" aria-describedby="helpId" placeholder="Introduce la población" required>
                </div>
                <hr class="col-12 col-md-10 offset-md-1 bg-light p-0">
                <div class="col-12 col-md-10 offset-md-1" id="datos">
                </div>
            </div>
      </div>
</template>

<script>
const axios = require('axios');
const $ = require('jquery');
// We declare it globally
window.$ = $;

export default {
  name: 'tiempo',
  components: {
  },
  data: function(){
    return{
      pueblos: [],
      textoBusqueda: ""
    }
  },
  created: function(){
       axios.get('./pueblos.json').then((datos)=>{
         this.pueblos = datos.data;
         // eslint-disable-next-line no-console
        console.log(this.pueblos);
        // eslint-disable-next-line no-console
        console.log(this.textoBusqueda);
       });
  },
  methods:{
    buscarPueblos: function(){
      
      let pueblosBusqueda = this.pueblos.filter((pueblo)=>{
        return pueblo.nombre.toUpperCase().includes(this.textoBusqueda.toUpperCase())
      })
      // eslint-disable-next-line no-console
      console.log(pueblosBusqueda);
    }
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
    min-height:100vh;
}
#app{
    min-height:100vh;
}
hr{
    padding:0;
}
</style>
