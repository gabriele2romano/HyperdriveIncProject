<!--Page for a single member of the VC's team-->

<script setup>
    const route = useRoute()
    const id = route.params.id

    //fetch person's data, including previous and next team members' names
    const { data: person } = await useFetch('/api/people/'+id)

    const prevMemberRoute = "/people/" + (parseInt(id)-1)
    const nextMemberRoute = "/people/" + (parseInt(id)+1)

    //fetch projects that the person supervises
    const { data: projects } = await useFetch('/api/people/getProjects/'+id)

    const title = ref("MEGA - " + person.value.name + " " + person.value.surname)

    useSeoMeta({
        title,
        description: () => `Presentation of MEGA Group's team member ${person.value.name + " " + person.value.surname}, ${person.value.role}.`,
    })
</script>

<template>
    <div class="bg-mega-grey d-flex justify-center align-center">
        <v-container class="my-auto">
            <!--First row: team navigation buttons under the header-->
            <v-row justify="center" class="my-4">
                <v-col cols="12" md="2" class="d-flex justify-center">
                    <!--button to get back to the team page-->
                    <NuxtLink to="/people" style="text-decoration: none;">
                        <v-btn class="text-light text-body-1 bg-dark-blue" variant="tonal" rounded=6>
                            See our whole team
                        </v-btn>
                    </NuxtLink>
                </v-col>
                
                <v-col v-if="person.prevname != null" cols="12" md="2" class="d-flex justify-center ml-md-auto">
                    <!--previous member button. Not displayed if the person is the first of the list-->
                    <NuxtLink :to=prevMemberRoute style="text-decoration: none;">
                        <v-btn class="text-darker-blue text-body-1" variant="text">
                            <v-icon icon="mdi-arrow-left"></v-icon>
                            Previous member:<br>{{ person.prevname }} {{ person.prevsurname }}
                        </v-btn>
                    </NuxtLink>
                </v-col>
                
                <v-col v-if="person.nextname != null" cols="12" md="2" class="d-flex justify-center">
                    <!--next member button. Not displayed if the person is the last of the list-->
                    <NuxtLink :to=nextMemberRoute style="text-decoration: none;">
                        <v-btn class="text-darker-blue text-body-1" variant="text">
                            Next member:<br>{{ person.nextname }} {{ person.nextsurname }}
                            <v-icon icon="mdi-arrow-right"></v-icon>
                        </v-btn>
                    </NuxtLink>
                </v-col>
            </v-row>
            
            <!--Second row: person card-->
            <v-row justify="center">
                <v-col cols="12" md="10">

                    <v-card class="bg-dark-blue"> 
                        <v-container fluid>
                            <v-row class="ma-n4">
                                <!--Picture-->
                                <v-col cols="12" md="3" class="pa-0 ma-0">
                                    <div class="bg-light fill-height">
                                        <v-img 
                                        :src=person.picture
                                        height="100%"
                                        cover
                                        ></v-img>
                                    </div>
                                </v-col>
                                
                                <!--Description: name, role, phone, email and small cv-->
                                <v-col cols="12" md="9" align-self="center" class="px-10">
                                    <div class="d-flex flex-column flex-md-row justify-space-between">
                                        <div class="d-flex flex-column">
                                            <div class="text-h3 font-weight-bold">{{ person.name }} {{ person.surname }}</div>
                                            <div class="text-subtitle-1">{{ person.role }}</div>
                                        </div>
                                        
                                        <div class="d-flex flex-column pr-5">
                                            <div class="text-subtitle-1 py-1">
                                                <v-icon icon="mdi-phone"></v-icon>
                                                {{ person.phone }}
                                            </div>
                                            <div class="text-subtitle-1 py-1">
                                                <v-icon icon="mdi-email"></v-icon>
                                                {{ person.email }}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <p class="text-body-1 pt-3">
                                        {{ person.cv }}
                                    </p>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>

                </v-col>
            </v-row>
            
            <!--The following rows are only displayed if there are projects to show-->
            <div v-if="projects.length > 0">
                <!--Third row: divider and supervised projects title-->
                <v-row justify="center" class="my-4">
                    <v-col cols="12" md="10">
                        <v-divider :thickness="3" color="light" class="border-opacity-100"></v-divider>
                        
                        <div class="text-h4 text-center text-light font-weight-bold">
                            Discover the projects supervised by {{ person.name }} {{ person.surname }}
                        </div>
                    </v-col>
                </v-row>
                
                <!--Fourth row: supervised projects cards-->
                <v-row justify="center" class="my-4">
                    <v-col v-for="project in projects" cols="12" md="3">
                        <ProjectCard  :project_id=project.id :project_title=project.title :project_overview=project.problem :project_image=project.images></ProjectCard>
                    </v-col>
                </v-row>
                
            </div>
        </v-container>
    </div>
</template>