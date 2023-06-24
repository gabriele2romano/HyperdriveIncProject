<script setup>
const {device} = useDevice();

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

const image=project.value.image
</script>

<template>
    <div>
        <v-parallax :src=image >
            <div class="d-flex fill-height justify-center align-center bg-darken" >
                <v-container class="text-light" max-width="80%" >
                    <v-row>
                        <v-col class="d-flex flex-column" cols="12">
                            <div class="text-h2 pt-3 font-weight-bold">{{ project_title }}</div>
                        </v-col>
                    </v-row>
                    <!--Problem row-->
                    <v-row>
                        <v-col class="d-flex flex-column justify-center align-center" cols="12" md="8" sx="12">                    
                            <v-sheet class="d-flex bg-darker-blue-div text-light font-weight-medium justify-center align-center flex-wrap text-center mx-auto" height="250" width="100%">
                                <div>
                                    <div class="text-h4">Problem</div>
                                    <div class="text-body-3 mb-2">{{ problem }}</div>
                                </div>
                            </v-sheet>
                        </v-col>
                        
                        <v-col class="d-flex flex-column justify-center align-center" cols="12" md="4" sx="12">
                            <v-sheet class="bg-darker-blue-div justify-center align-center flex-wrap text-center mx-auto" height="250" width="100%">
                                <v-img src="/img/bg-projects.jpg"  height="100%" cover></v-img>
                            </v-sheet>
                        </v-col>
                    </v-row>
                    
                    <!--Solution row-->
                    <v-row>
                        <v-col class="d-flex flex-column justify-center align-center" cols="12" md="8" sx="12" order-md="last">                    
                            <v-sheet class="d-flex bg-darker-blue-div text-light font-weight-medium justify-center align-center flex-wrap text-center mx-auto" height="250" width="100%">
                                <div>
                                    <div class="text-h4">Solution</div>
                                    <div class="text-body-3 mb-2">{{ solution }}</div>
                                </div>
                            </v-sheet>
                        </v-col>
                        
                        <v-col class="d-flex flex-column justify-center align-center" cols="12" md="4" sx="12">
                            <v-sheet class="bg-darker-blue-div justify-center align-center flex-wrap text-center mx-auto"  height="250" width="100%">
                                <v-img src="/img/bg-projects.jpg"  height="100%" cover></v-img>
                            </v-sheet>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </v-parallax>
        <!--Project description and other images-->
        <v-container fluid class="bg-dark-blue">
            <v-row justify="center">
                <v-col class="d-flex flex-column justify-center" cols="12" lg="8" md="8" sx="12">   
                    <div class="text-h4">Project Description</div>
                    <p class="text-body-2"> {{ project_description }}</p>          
                    <v-carousel hide-delimiters>
                        <v-carousel-item
                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                        cover
                        ></v-carousel-item>
                        
                        <v-carousel-item
                        src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
                        cover
                        ></v-carousel-item>
                        
                        <v-carousel-item
                        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                        cover
                        ></v-carousel-item>
                    </v-carousel>
                    <ProjectInfocard :country=project_country :foundation-year=project_foundation_year :funding-date=project_investment_date></ProjectInfocard>
                </v-col>
            </v-row>
        </v-container>
        
        <!--Startup infos-->
        <v-container fluid class="bg-mega-grey">
            <v-row class="d-flex justify-center align-items-center mt-5">
                <v-col cols="12" md="2" class="d-flex justify-center">   
                    <div class="pa-6 bg-light rounded-circle d-inline-block">
                        <v-img src="/img/logo.png"  class="ma-auto" max-height="150" max-width="150"></v-img>
                    </div>
                </v-col>
                <v-col class="d-flex flex-column justify-center align-center" cols="12" lg="4" md="4" sx="12"> 
                    <div class="justify-center align-center flex-wrap text-left pa-2 ma-2 pl-5 font-weight-medium" height="250" width="100%">
                        <div class="text-h4 font-weight-medium">{{ company_name }}</div>
                        <div class="text-body-3 mb-2">{{ company_description }}</div>
                    </div>
                </v-col>
            </v-row>
            <v-row class="d-flex justify-center">
                <v-col cols="8" justify-center>
                    <v-divider :thickness="4" class="border-opacity-75" color="light" style="border-radius: 10%;"></v-divider>
                </v-col>
            </v-row>
            <div class="text-h3 text-center font-weight-bold">Involved Areas</div>
            <v-row class="d-flex justify-center">
                <v-col cols="12" md="3" v-for="area in project_areas" :key="area.id">
                    <ProjectIconCard :card_icon="area.icon" :card_title="area.name"/>
                </v-col>
            </v-row>
            <v-row class="d-flex justify-center align-items-center">
                <v-col cols="8">
                    <v-sheet class="d-flex justify-center align-center bg-darker-blue text-light font-weight-thin text-center" width="100%">
                        <v-row class="ma-5">
                            <v-col cols="12" md="8" class="d-flex align-self-center justify-center">
                                <div>
                                <div class="text-h4 pa-2 font-weight-thin">Meet the Project Supervisor</div>
                                <div class="text-body-1 pt-2 d-none d-sm-block">{{ supervisor.name }} {{ supervisor.surname }}</div>
                                <div class="text-body-2 pb-2 d-none d-sm-block">{{ supervisor.role }}</div>
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
        </v-container>
    </div>
</template>