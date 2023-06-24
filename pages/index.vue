
<script setup lang="ts">

const { data: projects } = await useFetch('/api/projects/relevant')
const { data: people } = await useFetch('/api/people/')
const { data: areas } = await useFetch('/api/areas/')
</script>
<template>
    <div> 
      <v-parallax src="img/banner_home.jpg">
        <v-container>
          <v-row class="d-flex space-between text-center">
            <v-col v-for="project in projects" :key="project.id">
                <p>{{ project.title }}</p>
            </v-col>
          </v-row>
        </v-container>
      </v-parallax>
    </div>
</template>
