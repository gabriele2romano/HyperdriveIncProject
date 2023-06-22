<!--
    This is a simple card that displays a project title, image, short description and area icons. It's mainly used as a navigation link in page 
    All Projects and in a single person's page, to list the projects they supervise.
-->

<script setup>
    //props are, in order:
    //route to the page of the project this card presents
    //title of the project
    //main image of the project
    //short description of the project
    //list of areas this project is related to
    const props = defineProps(['pageRoute', 'title', 'image', 'description', 'areas']);
</script>

<template>
    <div>
        <NuxtLink to="/" style="text-decoration: none;">
        <v-card
            class="d-flex flex-column align-center justify-center"
            height="100%"
            max-width="300px"
            color="dark-blue"
        >
            <v-card-title
                class="text-h4 py-2 pt-4 text-light"
                style="font-family: 'Raleway', sans-serif;"
            >
                {{ title }}
            </v-card-title>

            <v-img
                width="200"
                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                class="py-2"
                cover
            >
            </v-img>

            <v-card-text class="text-h6 py-2">
                {{ description }}
            </v-card-text>
            
            <div class="d-flex flex-row py-2 pb-4">
                <v-icon
                    v-for="n in 3"
                    color="light"
                    icon="mdi-heart"
                    size="x-large"
                >
                </v-icon>
            </div>
        </v-card>
        </NuxtLink>
    </div>
</template>