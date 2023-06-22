<template>
  <header>

    <b-navbar>
        <b-nav-item><NuxtLink to="/">Home</NuxtLink></b-nav-item>
        <b-nav-item><NuxtLink to="/about">About</NuxtLink></b-nav-item>
        <b-nav-item><NuxtLink to="/people">People</NuxtLink></b-nav-item>
    </b-navbar>
 
  </header>
  
  <div>
    <!--NuxtWelcome /-->
    <!-- <ProjectCard title="Coso" description="Sample description"></ProjectCard> -->
    <NuxtPage/>
  </div>
</template>
