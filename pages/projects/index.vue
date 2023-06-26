<script setup>

const{data:banner_img} = await useFetch('/api/images/banner_projects.jpg')
const { data: projects } = await useFetch('/api/projects/')
const { data: areas } = await useFetch('/api/areas/names')
projects.value.forEach((project,index) => {
    project.description = project.description.slice(0, 150)+'...';
}); //creates a warning somehow

const selectedItem= null
const validate = null
const valid  = null
</script>
<template>
    <!-- Start Banner -->
    <v-row class="d-flex">
        <v-col class="d-flex justify-center h-auto" cols="12">
            <v-img :src=banner_img.publicUrl cover :aspect-ratio="1" gradient="rgba(0,0,0,.8), rgba(0,0,0,.8)" class="align-center" max-height="350px" style="overflow: hidden;">
                <v-sheet class="d-flex text-light font-weight-medium pa-3" color="transparent">
                    <v-row class="d-flex justify-center align-self-center">
                        <v-col class="d-flex flex-column" cols="12" md="8" xs="12">
                            <div>
                                <div class="text-md-h1 text-h3 text-light font-weight-black pa-2">Our Projects</div><br>
                                <div class="text-md-h6 text-h5 text-light font-weight-bold pa-2">IT Solution & IT Startup</div>
                                <div class="body-text-md-h2 body-text-h4 text-light font-weight-bold pa-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                                    veniam, quis nostrud exercitation  nisi ut aliquip ex ea 
                                    commodo consequat.</div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-sheet>
                </v-img>
            </v-col>
        </v-row>
        <!-- End Banner -->
        
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
                    <v-col class="d-flex flex-column justify-center" cols="12" lg="8" md="8" sx="12">  
                        <v-row no-gutters class="d-flex">
                            <v-col cols="12" md="4" xs="12" v-for="project in projects" :key="project.id" class="d-flex flex-column">
                                <ProjectCard :project_id=project.id :project_title=project.title :project_overview=project.problem :project_image=project.images[0]></ProjectCard>
                            </v-col> 
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
            <!-- End Projects -->
        </template>