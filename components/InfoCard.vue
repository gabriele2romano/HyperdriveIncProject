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
    <v-card color="dark-blue" class="px-7 py-3" :elevation="isHovering ? 12 : 2" :class="{ 'on-hover': isHovering }" v-bind="props" height="100%">
      <v-card-title class="text-h4 font-weight-black">{{title}}</v-card-title>
      <v-card-text class="text-body-h1 font-weight-medium">{{description}}</v-card-text>
      <v-btn :to="path" variant="text" class="btn-card" style="overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;">{{button}}</v-btn>
    </v-card>
  </v-hover>
</template>
<style scoped>
.v-card {
  transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
}


</style>