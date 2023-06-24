
<script setup lang="ts">

const { data: projects } = await useFetch('/api/project/relevant')
const { data: people } = await useFetch('/api/people/')
const { data: areas } = await useFetch('/api/areas/')
</script>
<template>
    <div> 
      <v-parallax src="img/banner_home.jpg">
        <v-container>
          <v-row>
            <v-col v-for="project in projects" :key="project.id">
                {{ project.title }}
            </v-col>
          </v-row>
        </v-container>
      </v-parallax>
    </div>
</template>
