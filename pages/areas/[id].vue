<script setup>
    const route = useRoute()
    const id = route.params.id

    const { data: area } = await useFetch('/api/areas/'+id)

    const { data: area_projects } = await useFetch('/api/areas/getProjects/'+id)

    const area_name = area.value.name
    const area_description = area.value.description
    const area_banner = area.value.image.data
    const area_interest = area.value.interest
</script>

<template>
    <Banner 
        :banner_title="area_name"
        :banner_body="area_description"
        :banner_img="area_banner"
        banner_link="Go to all areas" 
        banner_path="/areas">
    </Banner>
    
    <div class="bg-mega-grey">
        <v-container fluid class="text-light" style="max-width: 1200px;">
            <v-row justify="center" class="pa-4">
                <v-col cols="12">
                    <div class="text-h4 font-weight-bold">
                        Why we're interested in {{ area_name }} 
                    </div>
                    <div class="text-body-1 pt-4 font-weight-bold">
                            {{ area_interest }}
                    </div>

                    <v-divider :thickness="3" color="light" class="border-opacity-100"></v-divider>
                    
                    <div class="text-h4 text-center font-weight-bold pt-4">
                        {{ area_name }} Projects
                    </div>
                </v-col>
            </v-row>

            <v-row class="pa-4">
                <v-col v-for="project in area_projects" cols="12" md="4">
                    <ProjectCard :project_id=project.id :project_title=project.title :project_overview=project.problem :project_image=project.images></ProjectCard>
                </v-col>
            </v-row>
            
        </v-container>
    </div>
</template>