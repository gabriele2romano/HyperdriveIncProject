<script setup>

const { data: projects } = await useFetch('/api/projects/')
</script>

<template>
<v-container fluid>
    <v-row no-gutters>
        <v-col v-for="project in projects" :key="project.id">
            <p>{{ project.title }}</p>
        </v-col>
    </v-row>
</v-container>
</template>