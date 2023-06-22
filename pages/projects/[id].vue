<script setup>
//const { data: problem } = await useFetch('/api')
const problem = 'Inefficiencies in Solar Energy Management'
const solution = 'Intelligent Solar Energy Management Platform'
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
                    <v-col cols="12" lg="8" md="8" sx="12">   
                        <div class="text-h4">Project Description</div>
                        <p class="text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>          
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
                        <project-infocard country="Veneto" foundation-year='2022' funding-date="March 2022"></project-infocard>
                    </v-col>
                </v-row>
            </v-container>

            <!--Startup infos-->
            <v-container fluid class="bg-mega-grey">
                <v-row justify="center">
                    <v-col cols="12" lg="8" md="8" sx="12">   
                        <div class="text-h4">Project Description</div>
                        <p class="text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>          
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
                        <project-infocard country="Veneto" foundation-year='2022' funding-date="March 2022"></project-infocard>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </template>