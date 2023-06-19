
<script setup lang="ts">
/* const showDismissibleAlert = ref(false)

const dismissCountDown = ref(10000)
const countdown = ref(0) */

//retrieve from supabase

/* const client = useSupabaseClient()
const { data:  people } = await useAsyncData('people', async () => {
  const { data , error} = await client.from('people').select('*')//'name, surname').eq('name', 'Gabriele').single()
  //const people = ref([])
  //const { data, error } = await client.from('countries').select()
  //people.value = data
  console.log(data); // Check the structure of the data array in the browser console
  if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
  }
  return data
})  */


const { data: people } = await useFetch('/api')
</script>

<template>
  <header>
    <div>
      <h1>TITLE</h1>
    </div>
  </header>
  <div>
    <v-btn>CIAO</v-btn>
   <!--  <b-alert
    v-model="dismissCountDown"
    dismissible
    variant="warning"
    @close-countdown="countdown = $event"
    >
    <p>This alert will dismiss after {{ countdown / 1000 }} seconds...</p>
    <b-progress variant="warning" :max="dismissCountDown" :value="countdown" height="4px" />
  </b-alert>
  <b-button @click="showDismissibleAlert = !showDismissibleAlert" variant="info" class="m-1">
    {{ !showDismissibleAlert ? 'show' : 'hide' }} dismissible alert
  </b-button>     -->
  
  
  <div>
    <b-card>Hi</b-card>
  </div>
  
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

  <div>
    List
  <ul>
      <li v-for="person in people" :key="person.id">
        {{ person.name }} {{ person.surname }}
      </li>
    </ul>
    </div>
</div>
</template>