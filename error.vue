<!--
    This is an error page.
    Whenever a route that doesn't exist is called, this page will be shown.
-->
<template>
    <NuxtLayout>
            <v-container class="bg-darker-blue text-center" fluid>
                <v-row class="d-flex align-items-center"> 
                    <v-col class="d-flex justify-center align-center">
                        <div>
                            <div class="text-h3 font-weight-bold pa-2">Oops, something went wrong with your request</div>
                            <v-btn color="red" class="body-text-2 font-weight-medium pa-2" @click="$router.push(`/`)">Go back</v-btn>
                        </div>
                    </v-col> 
                </v-row>
            </v-container>
    </NuxtLayout>
</template>

<script setup>

</script>
