<script setup>

//get all projects data
const{data:banner_img} = await useFetch('/api/images/banner_projects.jpg')
const { data: projects } = await useFetch('/api/projects/')
var filtered_projects = ref([])
filtered_projects.value = projects.value
const { data: areas } = await useFetch('/api/areas/names')
areas.value.unshift({id:0, name:' -- Select an Area to Filter -- ',disabled:true})

//Banner Info
const banner_title = "Our Projects"
const banner_subtitle = "Discover the projects we finance"

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
var selected_area = ref(0)
var area_id = ref(0)
const forceRender = () => {
    area_id.value = selected_area.value
    //console.log("LID: "+area_id.value)
    filtered_projects.value = filterByArea(selected_area.value)
    //console.log("Projects: "+JSON.stringify(filtered_projects.value))
}
const resetFilter = () => {
    selected_area.value = 0
    filtered_projects.value = projects.value
}

</script>
<template>
    <Banner :banner_title="banner_title" :banner_subtitle="banner_subtitle" :banner_body="banner_body" :banner_img="banner_img" banner_link="Go to most relevant projects" banner_path="/projects/relevant"></Banner>
    <v-container fluid class="bg-mega-grey"> 
        <v-row class="d-flex justify-center">
            <v-col cols="12" md="10" class="mb-5 justify-center">  
                <!-- Start Filter buttons -->
                <v-row>
                    <v-col cols="12" md="8">
                        <b-form-select class="mx-auto" aria-label="Default select example" v-model="selected_area" :options="areas" value-field="id" text-field="name" label-field="Select an Area to Filter" :key = "selected_area" @update:model-value="forceRender">
                        </b-form-select>
                    </v-col>
                    <v-col>
                        <v-btn color="darker-blue" block @click="resetFilter">Reset Filter</v-btn>
                    </v-col>
                </v-row>
                <!-- End Filter buttons -->
                <v-divider cols="12" class="my-6"></v-divider>
                <!-- Start Projects -->
                <v-row>
                    <v-col v-if="filtered_projects.length==0" ><div  class="text-h6 font-weight-thin ">No Projects with selected area</div></v-col>
                    <v-col cols="12" md="4" sm="6" v-for="project in filtered_projects" :key="filtered_projects">
                        <ProjectCard :key="filtered_projects" :project_id=project.id :project_title=project.title :project_overview=project.problem :project_image=project.images[0]></ProjectCard>
                    </v-col> 
                </v-row>
                <!-- End Projects -->
            </v-col>
        </v-row>
    </v-container>
</template>

