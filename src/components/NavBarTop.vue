<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#" style = "font-family:Comic Sans">MUSICAL HENDRIX</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-navbar-nav>
        <b-nav-item href="/">Home</b-nav-item>
        <b-nav-item href="/producto">Productos</b-nav-item>
        <li class="nav-item">
          <router-link to="/destino" class="nav-link">¿Dónde estamos?</router-link>
        </li>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Buscar"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Buscar</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>


<style lang=''></style>
