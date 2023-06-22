<template>
  <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light" v-bind:class=" { 'navbarOpen': show }">
    <div class="container">
      <v-img src="/favicon.ico" max-width="30" class="mx-auto"></v-img>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" @click.stop="toggleNavbar()">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent" v-bind:class="{ 'show': show }">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <NuxtLink to="/" class="nav-link">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/people/0" class="nav-link">About</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/projects/0" class="nav-link">Projects</NuxtLink>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Contact</a>
            NuxtLink to="/contact/" class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Contact</NuxtLink>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav> -->

  <b-navbar toggleable="lg" type="light" bg="light">
    <b-navbar-brand href="#"><v-img src="/favicon.ico" max-width="30" class="mx-auto"></v-img></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item>
            <ClientOnly ><NuxtLink to="/" class="nav-link">Home</NuxtLink></ClientOnly >
          </b-nav-item>
          <b-nav-item>
            <ClientOnly ><NuxtLink to="/people/." class="nav-link">About</NuxtLink></ClientOnly >
          </b-nav-item>
          <b-nav-item>
            <ClientOnly ><NuxtLink to="/projects/0" class="nav-link">Projects</NuxtLink></ClientOnly >
          </b-nav-item>
          <b-nav-item>
            <ClientOnly ><NuxtLink to="/contact/" class="nav-link">Contact</NuxtLink></ClientOnly >
          </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
/* export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    toggleNavbar() {
      this.show = !this.show
    }
  }
} */
</script>