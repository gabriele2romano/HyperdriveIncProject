<script setup>

//get all relevant projects data
const{data:banner_img} = await useFetch('/api/images/banner_projects.jpg')
const { data: projects } = await useFetch('/api/projects/relevant')

//Banner info
const banner_title = "Our Most Relevant Projects"
const banner_subtitle = "IT Solution & IT Startup"
const banner_body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  nisi ut aliquip ex ea commodo consequat."

</script>
<template>
    <Banner :banner_title="banner_title" :banner_subtitle="banner_subtitle" :banner_body="banner_body" :banner_img="banner_img"  banner_link="Go to all projects" banner_path="/projects/"></Banner>
    
    <v-container fluid class="bg-mega-grey"> 
        <v-row class="d-flex justify-center">
            <v-col class="justify-center" cols="12" md="10">  
                <v-row>
                    <v-col cols="12" md="6" sm="6" v-for="project in projects" :key="project.id">
                        <ProjectRelevantCard :project_id=project.id :project_title=project.title :project_overview=project.description :project_problem="project.problem" :project_solution="project.solution" :project_image=project.images></ProjectRelevantCard>
                    </v-col> 
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>