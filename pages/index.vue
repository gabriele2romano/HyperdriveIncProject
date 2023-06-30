
<script setup lang="ts">

</script>
<template>
    <!-- <div> 
      <v-parallax src="img/banner_home.jpg">
        <v-container>
          <v-row class="d-flex space-between text-center">
            <v-col v-for="project in projects" :key="project.id">
                <p>{{ project.title }}</p>
            </v-col>
          </v-row>
        </v-container>
      </v-parallax>
    </div> -->
    <v-container class="bg-darker-blue" fluid>
      <v-row class="justify-center align-center">
        <v-col cols="6">
          <div class="text-h1 font-weight-black pa-2">Mega Venture Capital</div>
          <div class="text-h6 font-weight-thin pa-2">This is our website and how we work</div>
        </v-col>
        <v-col cols="3">
        <v-img src="img/logo.png" height="500"/>
        </v-col>
      </v-row>

    </v-container>
</template>
