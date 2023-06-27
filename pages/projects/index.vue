<script setup>

const{data:banner_img} = await useFetch('/api/images/banner_projects.jpg')
const { data: projects } = await useFetch('/api/projects/')
//const { data: areas } = await useFetch('/api/areas/names')
/* projects.value.forEach((project,index) => {
    project.description = project.description.slice(0, 150)+'...';
}); */ //creates a warning somehow

const banner_title = "Our Projects"
const banner_subtitle = "IT Solution & IT Startup"
const banner_body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  nisi ut aliquip ex ea commodo consequat."

const selectedItem= null
const validate = null
const valid  = null
</script>
<template>
    <Banner :banner_title="banner_title" :banner_subtitle="banner_subtitle" :banner_body="banner_body" :banner_img="banner_img"></Banner>
    
    <!-- Start Filter buttons -->
    <v-container fluid class="bg-mega-grey"> 
        <v-row class="d-flex" justify="center">
            <v-col class="d-flex" cols="12" md="8" sx="12">  
                <v-container>
                    <v-form v-model="valid">
                        <v-row>
                            <v-col class="d-flex" cols="6">
                                <!-- <v-select
                                    v-model="selectedItem"
                                    :items="areas"
                                    item-text="name"
                                    item-value="id"
                                    label="Select an option"
                                    ></v-select> -->
                                    <!--   <v-select>
                                        <option v-for="(id, name) in areas" v-bind:value="id">
                                            {{ name }}
                                        </option></v-select> -->
                            </v-col>
                            <v-col>
                                <v-btn class="d-flex" color="darker-blue" block @click="validate">
                                    Filter
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-form></v-container>
                </v-col>
            </v-row>
        </v-container>
        <!-- End Filter buttons -->
        
        <!-- Start Projects -->
        <v-container fluid class="bg-mega-grey"> 
            <v-row class="d-flex" justify="center">
                <v-col class="d-flex flex-column justify-center" cols="12" md="8">  
                    <v-row class="d-flex">
                        <v-col cols="12" md="4" xs="12" v-for="project in projects" :key="project.id" class="d-flex flex-column">
                            <ProjectCard :project_id=project.id :project_title=project.title :project_overview=project.problem :project_image=project.images[0]></ProjectCard>
                        </v-col> 
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
        <!-- End Projects -->
    </template>