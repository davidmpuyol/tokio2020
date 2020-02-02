<template>
  <div id="contenedor">
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <a class="navbar-brand logo" href="#"><img class="img-fluid" src="./assets/logo.svg"></a>
      <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
          aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="collapsibleNavId">
        <ul class="navbar-nav mt-2 mt-lg-0">
          <li class="nav-item active">
            <router-link to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/notas">Notas</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/tiempo">Tiempo</router-link>
          </li>
        </ul>
      </div>
      <div class="nav-item">
        <input name="" id="" class="btn btn-primary mr-2" type="button" value="Login" data-toggle="modal" data-target="#login">
        <input name="" id="" class="btn btn-primary" type="button" value="Registro" data-toggle="modal" data-target="#registro">
      </div>
    </nav>
    <router-view></router-view>
    <!--Modal login-->
    <div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Login</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="usuario">Usuario:</label>
              <input type="text" name="usuario" id="usuario" class="form-control">
              <label for="password">Contraseña:</label>
              <input type="password" class="form-control" name="password" id="password">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Enviar</button>
          </div>
        </div>
      </div>
    </div>
    <!--Modal registro-->
    <div class="modal fade" id="registro" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Login</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="usuario">Usuario:</label>
              <input type="text" name="usuario" id="usuario" class="form-control" required>
              <label for="password">Contraseña:</label>
              <input type="password" class="form-control" name="password" id="password" required>
              <label for="password">Repetir contraseña:</label>
              <input type="password" class="form-control" name="password" id="password" required>
              <label for="email">Email:</label>
              <input type="email" class="form-control" name="email" id="email" aria-describedby="helpId" placeholder="example@correo.com">
              <label for="email">Confirmar email:</label>
              <input type="mail" class="form-control" name="email" id="email" aria-describedby="helpId" placeholder="example@correo.com">

            </div>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-secondary" data-dismiss="modal">Enviar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
.nav-item{
  margin: 10px;
  display:flex;
  flex-flow: row nowrap;
  align-items:center;
  justify-content: center;
}
a{
  color:white!important;
  text-decoration:none;
}
.navbar-brand img{
  height:50px;
}
.router-link-active{
  color:lightseagreen;
  text-decoration:underline;
}
</style>
