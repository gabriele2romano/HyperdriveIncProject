<script setup>

const{data:banner_img} = await useFetch('/api/images/banner_team.jpg')
const banner_title = "Our Team"
const banner_subtitle = "Discover our team of experts"
const banner_body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  nisi ut aliquip ex ea commodo consequat."

</script>

<template>
    <Banner :banner_title="banner_title" :banner_subtitle="banner_subtitle" :banner_body="banner_body" :banner_img="banner_img"></Banner>
    
    <div class="font-weight-bold text-light my-auto bg-mega-grey">
        <div style="max-width: 1200px;" class="d-flex justify-center">
            <div class="text-h2 text-left my-10">
                Meet our team of experts
            </div>

            <div class="d-flex justify-center align-center">
                <v-container fluid>
                    <v-row>
                        <v-col cols="12">

                            <NuxtLink to="/people" style="text-decoration: none;">
                            <v-sheet
                                class="bg-dark-blue-div text-light d-flex flex-column align-center py-5"
                            >
                                <v-img 
                                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                                :width="300"
                                :height="350"
                                cover
                                class="pa-5 rounded-lg"
                                >
                                </v-img>

                                <div 
                                    class="pa-2 bg-dark-blue mt-n10" 
                                    style="border: 4px solid var(--color2); position: relative; z-index: 1;"
                                >
                                    <div class="text-h5 text-center">Alberto Scarpa</div>
                                    <div class="text-h6 text-center">Partner</div>
                                </div>
                            </v-sheet>
                            </NuxtLink>

                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </div>
    </div>
    
</template>