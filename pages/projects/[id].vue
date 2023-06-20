<script setup>
//const { data: problem } = await useFetch('/api')
const problem = 'Inefficiencies in Solar Energy Management',
solution = 'Intelligent Solar Energy Management Platform'
</script>

<template>
    <NuxtLayout>
        <v-parallax height="auto" src="/img/bg-projects.jpg" >
            <v-container class="text-light">
                <!--Problem row-->
                <v-row>
                    <v-col cols="12" lg="8" md="8" sx="12">                    
                        <v-sheet class="d-flex bg-darker-blue text-light font-weight-thin justify-center align-center flex-wrap text-center mx-auto" height="250" width="100%">
                            <div>
                                <div class="text-h4">Problem</div>
                                <div class="text-body-3 mb-2">{{ problem }}</div>
                            </div>
                        </v-sheet>
                    </v-col>
                    
                    <v-col cols="12" lg="4" md="4" sx="12">
                        <v-sheet class="bg-darker-blue justify-center align-center flex-wrap text-center mx-auto" height="250" max-width="800" width="100%">
                            <v-img src="/img/bg-projects.jpg"  height="100%" cover></v-img>
                        </v-sheet>
                    </v-col>
                </v-row>
                
                <!--Solution row-->
                <v-row>
                    <v-col cols="12" lg="8" md="8" sx="12" order-md="last">                    
                        <v-sheet class="d-flex bg-darker-blue text-light font-weight-thin justify-center align-center flex-wrap text-center mx-auto" height="250" width="100%">
                            <div>
                                <div class="text-h4">Solution</div>
                                <div class="text-body-3 mb-2">{{ solution }}</div>
                            </div>
                        </v-sheet>
                    </v-col>
                    
                    <v-col cols="12" lg="4" md="4" sx="12">
                        <v-sheet class="bg-darker-blue justify-center align-center flex-wrap text-center mx-auto"  height="250" max-width="800" width="100%">
                            <v-img src="/img/bg-projects.jpg"  height="100%" cover></v-img>
                        </v-sheet>
                    </v-col>
                </v-row>
                
            </v-container>
        </v-parallax>
    </NuxtLayout>
</template>