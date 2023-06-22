
<script setup lang="ts">

//const { data: people } = await useFetch('/api')
</script>
<template>
    <div> 
      
      <b-accordion class="col-3">
        <b-accordion-item title="Accordion Item #1" visible>
          Accordion 1
        </b-accordion-item>
        <b-accordion-item title="Accordion Item #2">
          Accordion 2
        </b-accordion-item>
        <b-accordion-item title="Accordion Item #3">
          Accordion 3
        </b-accordion-item>
      </b-accordion>
      
      <!-- <div>
        List
        <ul>
          <li v-for="person in people" :key="person.id">
            {{ person.name }} {{ person.surname }}
          </li>
        </ul>
      </div> -->
    </div>
</template>
