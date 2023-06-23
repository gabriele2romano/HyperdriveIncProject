<script setup>

const {device} = useDevice();
//const { data: problem } = await useFetch('/api')
const problem = 'Inefficiencies in Solar Energy Management'
const solution = 'Intelligent Solar Energy Management Platform'
const project_description =  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."                        
const startup_name = 'Solaris'
const startup_logo = '/img/logo.png'
const startup_description = 'Solaris is a startup that aims to solve the problem of inefficiencies in solar energy management.'
const project_areas = [
{id:0,name:"Energy",icon:"flash"},
{id:1,name:"Sustainbaility",icon:"cash"},
{id:2,name:"Renewable Energy",icon:"wind-power"}
]
const project_infocard = {
    country: 'Malaysia',
    foundation_year: '2020',
    funding_date: '2020-12-12',
}
const supervisor = {
    name: 'John',
    surname: 'Doe',
    role: 'Professor'
}
</script>

<template>
    <div>
        <v-parallax src="/img/bg-projects.jpg">
            <div class="d-flex fill-height justify-center align-center">
                <v-container class="text-light" max-width="80&" >
                    <!--Problem row-->
                    <v-row>
                        <v-col class="d-flex flex-column justify-center align-center" cols="12" md="8" sx="12">                    
                            <v-sheet class="d-flex bg-darker-blue-div text-light font-weight-thin justify-center align-center flex-wrap text-center mx-auto" height="250" width="100%">
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
                            <v-sheet class="d-flex bg-darker-blue-div text-light font-weight-thin justify-center align-center flex-wrap text-center mx-auto" height="250" width="100%">
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
                <v-col class="d-flex flex-column justify-center align-center" cols="12" lg="8" md="8" sx="12">   
                    <div class="text-h4 pa-2">Project Description</div>
                    <p class="text-left"> {{ project_description }}</p>          
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
                    <ProjectInfocard :country=project_infocard.country :foundation-year=project_infocard.foundation_year :funding-date=project_infocard.funding_date></ProjectInfocard>
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
                    <div class="justify-center align-center flex-wrap text-left pa-2 ma-2 pl-5" height="250" width="100%">
                        <div class="text-h4">{{ startup_name }}</div>
                        <div class="text-body-3 mb-2">{{ startup_description }}</div>
                    </div>
                </v-col>
            </v-row>
            <v-row class="d-flex justify-center">
                <v-col cols="8" justify-center>
                    <v-divider :thickness="4" class="border-opacity-75" color="light" style="border-radius: 10%;"></v-divider>
                </v-col>
            </v-row>
            <div class="text-h3 text-center">Involved Areas</div>
            <v-row class="d-flex justify-center">
                <v-col cols="12" md="3" v-for="area in project_areas" :key="area.id">
                    <ProjectIconCard :card_icon="area.icon" :card_title="area.name"/>
                </v-col>
            </v-row>
            <v-row class="d-flex justify-center align-items-center">
                <v-col cols="8">
                    <v-sheet class="d-flex justify-center align-center bg-darker-blue text-light font-weight-thin text-center" width="100%">
                        <v-row class="ma-5">
                            <v-col cols="12" md="8">
                                <div>
                                <div class="text-h4 pa-2">Meet the Project Supervisor</div>
                                <div class="text-body-1 pt-2 d-none d-sm-block">{{ supervisor.name }} {{ supervisor.surname }}</div>
                                <div class="text-body-2 pb-2 d-none d-sm-block">{{ supervisor.role }}</div>
                                </div>
                            </v-col>
                            <v-col cols="12" md="4" order-md="first">
                                <div class="pa-2 bg-light rounded-circle d-inline-block" >
                                    <v-img src="/img/logo.png" max-height="120" max-width="120"></v-img>
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