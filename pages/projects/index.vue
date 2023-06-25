<script setup>

const { data: projects } = await useFetch('/api/projects/')
projects.value.forEach((project,index) => {
    project.description = project.description.slice(0, 100)+'...';
});//creates a warning somehow
</script>

<template>
    <v-container fluid class="bg-mega-grey"> 
        <v-row class="d-flex" justify="center">
            <v-col class="d-flex flex-column justify-center" cols="12" lg="8" md="8" sx="12">  
                <v-row no-gutters class="d-flex">
                    <v-col cols="12" md="4" xs="12" v-for="project in projects" :key="project.id" class="d-flex flex-column">
                        <ProjectCard :project_id=project.id :project_title=project.title :project_overview=project.description :project_image=project.images[0] ></ProjectCard>
                    </v-col> 
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>