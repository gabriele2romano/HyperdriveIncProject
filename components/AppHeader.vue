<template>
  <div>
    <b-navbar smart-scroll toggleable="lg" type="light" class="bg-light pa-1" fixed="top">
      <NuxtLink to="/"><b-navbar-brand>
        <v-img src="/favicon.ico" max-width="50" class="mx-auto"/>
      </b-navbar-brand></NuxtLink>
      
      <b-navbar-toggle target="nav-collapse"/>
      
      <b-collapse id="nav-collapse" is-nav>
        
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <ClientOnly><NuxtLink to="/" class="nav-link">Home</NuxtLink></ClientOnly>
          </b-nav-item>
          <b-nav-item>
            <ClientOnly><NuxtLink to="/people/1" class="nav-link">About</NuxtLink></ClientOnly>
          </b-nav-item>
          <b-nav-item>
            <ClientOnly><NuxtLink to="/projects/" class="nav-link">Projects</NuxtLink></ClientOnly>
          </b-nav-item>
          <b-nav-item>
            <ClientOnly><NuxtLink to="/contacts/" class="nav-link">Contact</NuxtLink></ClientOnly>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
</script>