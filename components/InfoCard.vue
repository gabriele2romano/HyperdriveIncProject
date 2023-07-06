<!--This card is used in the home page to introduce the main sections of the website.-->

<script setup>
  const props = defineProps({
    title: String,
    description: String,
    button: String,
    path: String
  })
</script>
<template>
  
  <v-hover v-slot="{ isHovering, props }">
    <v-card :to="path" color="dark-blue" class="px-7 py-3" :elevation="isHovering ? 12 : 2" :class="{ 'on-hover': isHovering }" v-bind="props" height="100%">
      <v-card-title class="text-h4 font-weight-black">{{title}}</v-card-title>
      <v-card-text class="text-body-h1 font-weight-medium">{{description}}</v-card-text>
      <v-card-actions>
        <v-btn :to="path" variant="text" class="btn-card bg-darker-blue" style="overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;">{{button}}</v-btn>
      </v-card-actions>
      
    </v-card>
  </v-hover>
</template>
<style scoped>
.v-card {
  transition: opacity .6s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.8;
}


</style>