<!--Page for most relevant projects. Layout is very similar to the one for all projects.-->

<script setup>

    //fetch banner image
    const{data:banner_img} = await useFetch('/api/images/banner_projects.jpg')

    const banner_title = "Our Most Relevant Projects"
    const banner_subtitle = "Discover our trending projects"

    //fetch relevant projects data
    const { data: projects } = await useFetch('/api/projects/relevant')

    useSeoMeta({
        title: "MEGA - Relevant Projects",
        description: "List of currently most relevant projects financed by MEGA Group."
    })

</script>

<template>
    <Banner :banner_title="banner_title" :banner_subtitle="banner_subtitle" :banner_img="banner_img"  banner_link="Go to all projects" banner_path="/projects/"></Banner>
    
    <v-container fluid class="bg-mega-grey"> 
        <v-row class="d-flex justify-center">
            <v-col class="justify-center" cols="12" md="10">  
                <v-row>
                    <!--Relevant projects cards-->
                    <v-col cols="12" md="4" sm="6" v-for="project in projects" :key="project.id">
                        <ProjectCard :project_id=project.id :project_title=project.title :project_overview="project.problem" :project_solution="project.solution" :project_image=project.images[0] :project_alt="project.alt[0]"/>
                    </v-col> 
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>