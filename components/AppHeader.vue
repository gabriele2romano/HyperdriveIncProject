<template>
  <div>
    <b-navbar smart-scroll toggleable="lg" type="light" variant="darker-blue" class="pa-2 border-bottom text-light navbar-dark" fixed="top" >
      <NuxtLink to="/">
        <b-navbar-brand class="d-flex justify-left">
        <v-img src="/favicon.ico" height="30px" width="30px" :aspect-ratio="1" />
      </b-navbar-brand>
    </NuxtLink>
      
      <b-navbar-toggle target="nav-collapse"/>
      
      <b-collapse id="nav-collapse" is-nav>
        
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item style="color: light; !important">
            <ClientOnly><NuxtLink to="/" class="nav-link">Home</NuxtLink></ClientOnly>
          </b-nav-item>
          <b-nav-item>
            <ClientOnly><NuxtLink to="/people/" class="nav-link">About</NuxtLink></ClientOnly>
          </b-nav-item>
          <b-nav-item>
            <ClientOnly><NuxtLink to="/projects/" class="nav-link">Projects</NuxtLink></ClientOnly>
          </b-nav-item>
          <b-nav-item>
            <ClientOnly><NuxtLink to="/areas/" class="nav-link">Area</NuxtLink></ClientOnly>
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