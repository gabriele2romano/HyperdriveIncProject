<!--Page for a single area. Includes a brief description and the list of projects related to the area-->

<script setup>
    const route = useRoute()
    const id = route.params.id

    //fetch data of the area
    const { data: area } = await useFetch('/api/areas/'+id)

    //fetch projects related to this area
    const { data: area_projects } = await useFetch('/api/areas/getProjects/'+id)

    const area_name = area.value.name
    const area_description = area.value.description
    const area_banner = area.value.image.data
    const area_interest = area.value.interest

    const title = ref('MEGA - ' + area_name)

    useSeoMeta({
        title,
        description: () => `Presentation of ${area_name} as one of MEGA Group's areas of investment. List of projects related to the area.`,
    })

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
        <v-container fluid class="text-light">
            <v-row class="d-flex" justify="center">
                <v-col class="d-flex flex-column justify-center" cols="12" md="10">
                    <v-row justify="center">
                        <!--introduction to the area-->
                        <v-col cols="12">
                            <div class="text-h4 font-weight-bold">
                                Why we're interested in {{ area_name }} 
                            </div>
                            <div class="text-body-1 pt-4 font-weight-bold">
                                    {{ area_interest }}
                            </div>

                            <!--divider and title for projects section-->
                            <v-divider :thickness="3" color="light" class="border-opacity-100"></v-divider>
                            
                            <div class="text-h4 text-center font-weight-bold pt-4">
                                {{ area_name }} Projects
                            </div>
                        </v-col>
                    </v-row>

                    <!--project cards-->
                    <v-row class="pa-4">
                        <v-col v-for="project in area_projects" cols="12" md="4">
                            <ProjectCard :project_id=project.id :project_title=project.title :project_overview=project.problem :project_image=project.images></ProjectCard>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>