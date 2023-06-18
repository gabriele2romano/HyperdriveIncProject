<!--
    This is a simple card that displays a project title, image and area icons. It's mainly used as a navigation link in page All Projects
    and in a single person's page, to list the projects they supervise.
-->

<script setup>
    //props are, in order:
    //route to the page of the project this card presents
    //title of the project
    //main image of the project
    //list of areas this project is related to
    const props = defineProps(['pageRoute', 'title', 'image', 'areas']);
</script>

<template>
    <div>
        <NuxtLink to="/">
        <v-card
            class="d-flex flex-column justify-center align-center"
            width="400px"
            color="#394867"
        >
            <v-card-title
                style="color:#f1f6f9; font-family: 'Raleway', sans-serif;"
            >
                {{ title }}
            </v-card-title>

            <v-img
                :width="200"
                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
            >
            </v-img>

            

        </v-card>
        </NuxtLink>
    </div>
</template>