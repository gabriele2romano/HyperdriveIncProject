<template>
  <div>
    <b-navbar smart-scroll toggleable="lg" type="light" class="bg-light pa-1" fixed="top">
      <b-navbar-brand href="#">
        <v-img src="/favicon.ico" max-width="50" class="mx-auto"/>
      </b-navbar-brand>
      
      <b-navbar-toggle target="nav-collapse"/>
      
      <b-collapse id="nav-collapse" is-nav>
        
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <ClientOnly><NuxtLink to="/" class="nav-link">Home</NuxtLink></ClientOnly>
          </b-nav-item>
          <b-nav-item>
            <ClientOnly><NuxtLink to="/people/." class="nav-link">About</NuxtLink></ClientOnly>
          </b-nav-item>
          <b-nav-item>
            <ClientOnly><NuxtLink to="/projects/0" class="nav-link">Projects</NuxtLink></ClientOnly>
          </b-nav-item>
          <b-nav-item>
            <ClientOnly><NuxtLink to="/contact/" class="nav-link">Contact</NuxtLink></ClientOnly>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
</script>