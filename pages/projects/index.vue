<script setup>

const{data:banner_img} = await useFetch('/api/images/banner_projects.jpg')
const { data: projects } = await useFetch('/api/projects/')
var filtered_projects = ref([])
filtered_projects.value = projects.value
const { data: areas } = await useFetch('/api/areas/names')
/* projects.value.forEach((project,index) => {
    project.description = project.description.slice(0, 150)+'...';
}); */ //creates a warning somehow

const banner_title = "Our Projects"
const banner_subtitle = "IT Solution & IT Startup"
const banner_body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  nisi ut aliquip ex ea commodo consequat."


//Filter Management
const filterByArea = (area_id) => {
    if(area_id == 0){
        return projects.value
    }
    else{
        //console.log("Project no filter: "+ JSON.stringify(projects.value))
        return projects.value.filter(project => project.area.some(area => area.id == area_id))
    }
}

var selected_area = ''
var area_id = ref(0)
const forceRender = () => {
    area_id.value = selected_area
    //console.log("LID: "+area_id.value)
    filtered_projects.value = filterByArea(selected_area)
    console.log("Projects: "+JSON.stringify(filtered_projects.value))
}

</script>
<template>
    <Banner :banner_title="banner_title" :banner_subtitle="banner_subtitle" :banner_body="banner_body" :banner_img="banner_img"></Banner>
    
        
        <v-container fluid class="bg-mega-grey"> 
            <v-row class="d-flex" justify="center">
                <v-col class="d-flex flex-column justify-center" cols="12" md="8">  
        <!-- Start Filter buttons -->
                        <b-form-select
                        v-model="selected_area"
                        :options="areas"
                        class="mb-3 mx-auto"
                        value-field="id"
                        text-field="name"
                        disabled-field="notEnabled"
                        @update:model-value="forceRender"
                        ></b-form-select>
        <!-- End Filter buttons -->

        <!-- Start Projects -->
                        <v-row class="d-flex">
                            <v-col cols="12" md="4" sm="6" v-for="project in filtered_projects" :key="filtered_projects" class="d-flex flex-column">
                                <ProjectCard :key="filtered_projects" :project_id=project.id :project_title=project.title :project_overview=project.problem :project_image=project.images[0]></ProjectCard>
                            </v-col> 
                        </v-row>
            <!-- End Projects -->
                    </v-col>
                </v-row>
            </v-container>
        </template>