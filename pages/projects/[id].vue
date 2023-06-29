<script setup>
const route = useRoute()
const id = route.params.id
const { data: project } = await useFetch('/api/projects/'+id)

const project_title = project.value.title
const problem = project.value.problem
const solution = project.value.solution
const project_description =  project.value.description
const company_name = project.value.company.name
const company_logo = '/img/logo.png'
const company_description = project.value.company.description//'Solaris is a startup that aims to solve the problem of inefficiencies in solar energy management.'
const project_areas = project.value.area
const project_country = project.value.country
const project_foundation_year = project.value.foundation_year
const project_investment_date = project.value.investment_date
const supervisor = {
    name: project.value.person.name,
    surname: project.value.person.surname,
    role: project.value.person.role,
    picture: project.value.person.picture
} 
const images = project.value.images

//get height of infoBox
/* const infoBox = ref(null)
var height = ref(0)
onMounted(() => {
    height= infoBox.value.$el.clientHeight
    console.log(height)
}) */
</script>

<template>
    <div>
        <!-- Start Project title and image-->
        <!--  <v-parallax :src=images[0]> -->
            <v-container class="text-light bg-darken align-end pt-5 pb-0 px-0" fluid ref="infoBox" :style="{backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('+images[0]+')',backgroundSize:'cover'}">
                <v-row class="justify-center px-4">
                    <v-col cols="12" md="8"> 
                        <!-- Start See all projects -->
                        <v-row>
                            <v-col class="d-flex" cols="12">
                                <div>
                                    <NuxtLink to="/projects/" class="pa-2"><b-link variant="light">See all our projects</b-link></NuxtLink>
                                    <div class="text-h3 text-md-h2 pt-3 font-weight-bold">{{ project_title }}</div>
                                </div>
                            </v-col>
                        </v-row>
                        <!-- End See all projects -->
                        
                        <!-- Start Problem row -->
                        <v-row>
                            <v-col class="d-flex" cols="12" md="8">                    
                                <v-sheet class="d-flex bg-darker-blue-div text-light font-weight-medium justify-center align-center flex-wrap text-center mx-auto" height="250" width="100%">
                                    <div>
                                        <div class="text-h4">Problem</div>
                                        <div class="text-body-3 mb-2">{{ problem }}</div>
                                    </div>
                                </v-sheet>
                            </v-col>
                            
                            <v-col class="d-flex " cols="12" md="4" >
                                <v-sheet class="bg-darker-blue-div justify-center align-center flex-wrap text-center mx-auto" height="250" width="100%">
                                    <v-img :src="images[1]"  height="100%" cover></v-img>
                                </v-sheet>
                            </v-col>
                        </v-row>
                        <!-- End Problem row -->
                        
                        <!-- Start Solution row -->
                        <v-row>
                            <v-col class="d-flex " cols="12" md="8" order-md="last">                    
                                <v-sheet class="d-flex bg-darker-blue-div text-light font-weight-medium justify-center align-center flex-wrap text-center mx-auto" height="250" width="100%">
                                    <div>
                                        <div class="text-h4">Solution</div>
                                        <div class="text-body-3 mb-2">{{ solution }}</div>
                                    </div>
                                </v-sheet>
                            </v-col>
                            
                            <v-col class="d-flex " cols="12" md="4">
                                <v-sheet class="bg-darker-blue-div justify-center align-center flex-wrap text-center mx-auto"  height="250" width="100%">
                                    <v-img :src="images[2]"  height="100%" cover></v-img>
                                </v-sheet>
                            </v-col>
                        </v-row>
                        <!-- End Solution row -->
                    </v-col>
                </v-row>
                
                <!--Start Involved Areas-->
                <v-row class="bg-darker-blue-div mt-10 align-center">
                    <v-col cols="12" class="d-flex justify-center">
                        <ProjectIconCard :areas="project_areas" :icon_size="30"/>
                    </v-col>
                </v-row>
                <!--End Involved Areas-->
                
            </v-container>
            <!-- </v-parallax> -->
            <!-- End Project title and image-->
            
            <!--Project description and other images-->
            <v-container fluid class="bg-dark-blue">
                <v-row justify="center">
                    <v-col class="d-flex flex-column justify-center" cols="12" lg="8" md="8" sx="12">   
                        <div class="text-h4">Project Description</div>
                        <p class="text-body-2"> {{ project_description }}</p>          
                        <v-carousel cycle interval="5000" hide-delimiters :show-arrows="false" v-if="images.length>3">
                            <v-carousel-item v-for="i in images.length-3" :key="i" :src="images[i-1+3]" cover></v-carousel-item>
                        </v-carousel>
                        <ProjectInfoCard :country=project_country :foundation-year=project_foundation_year :funding-date=project_investment_date></ProjectInfoCard>
                    </v-col>
                </v-row>
                <!--End Project description and other images-->
                
                <!-- Start Divider -->
                <v-row class="d-flex justify-center">
                    <v-col cols="8" class="d-flex justify-center align-center" >
                        <v-divider :thickness="4" class="border-opacity-75" color="light" style="border-radius: 10%;"></v-divider>
                    </v-col>
                </v-row>
                <!-- End Divider -->
                
                <!--Start Startup infos-->
                <v-row class="d-flex justify-center align-items-center mb-5">
                    <v-col cols="12" md="2" class="d-flex justify-center">   
                        <div class="pa-6 bg-light rounded-circle d-inline-block">
                            <v-img src="/img/logo.png"  class="ma-auto" max-height="150" max-width="150"></v-img>
                        </div>
                    </v-col>
                    <v-col class="d-flex flex-column justify-center" cols="12" lg="4" md="4" sx="12"> 
                        <div class="justify-center align-center flex-wrap text-left pa-2 ma-2 pl-5 font-weight-medium" height="250" width="100%">
                            <div class="text-h4 font-weight-bold">{{ company_name }}</div>
                            <div class="text-body-3 mb-2">{{ company_description }}</div>
                        </div>
                    </v-col>
                </v-row>
                <!--End Startup Infos-->
                
                <!--Start Project Team-->
                <v-row class="d-flex justify-center align-items-center">
                    <v-col cols="12" md="8">
                        <v-sheet class="d-flex justify-center align-center text-light bg-mega-grey font-weight-thin text-center">
                            <v-row class="ma-5">
                                <v-col cols="12" md="8" class="d-flex align-self-center justify-center">
                                    <div>
                                        <div class="text-h4 pa-2 font-weight-black">Meet the Project Supervisor</div>
                                        <div class="text-body-1 pt-2 d-none d-sm-block font-weight-bold">{{ supervisor.name }} {{ supervisor.surname }}</div>
                                        <div class="text-body-2 pb-2 d-none d-sm-block font-weight-bold">{{ supervisor.role }}</div>
                                    </div>
                                </v-col>
                                <v-col cols="12" md="4" order-md="first">
                                    <div class="pa-2 bg-light rounded-circle d-inline-block" >
                                        <v-img src="/img/logo.png" max-height="250" max-width="250"></v-img>
                                    </div>
                                </v-col>
                                <v-col cols="12" class="d-md-none">
                                    <div>
                                        <div class="text-body-1 pt-2">{{ supervisor.name }} {{ supervisor.surname }}</div>
                                        <div class="text-body-2 pb-2">{{ supervisor.role }}</div>
                                    </div>
                                </v-col>
                            </v-row>                        
                        </v-sheet>
                    </v-col>
                </v-row>
                <!--End Project Team-->
            </v-container>
        </div>
    </template>