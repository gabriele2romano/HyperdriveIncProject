<script setup>

const{ data: banner_img } = await useFetch('/api/images/banner_areas.jpg')
const banner_title = "Our Areas of Investment"
const banner_subtitle = "Take a look at the intriguing areas we focus on for the projects we finance."

const { data: areas } = await useFetch('/api/areas')

</script>

<template>
    <Banner :banner_title="banner_title" :banner_subtitle="banner_subtitle" :banner_img="banner_img"></Banner>
    
    <v-container fluid class="bg-mega-grey">
        <v-row class="d-flex" justify="center">
            <v-col class="d-flex flex-column justify-center" cols="12" md="10">
                <v-row class="d-flex">
                    <v-col cols="12" md="4" v-for="area in areas" :key="area.id" class="pa-4">
                        
                        <v-card :to="'/areas/' + area.id" class="bg-darker-blue-div ma-1 pa-4 font-weight-bold text-light d-flex flex-column align-center">
                            <v-icon :icon="'mdi-' + area.icon" color="light" size="90"></v-icon>
                            <v-card-title class="text-h5 pb-3 font-weight-bold text-center">{{ area.name }}</v-card-title>
                            <v-card-text class="text-h6 text-center">{{ area.description }}</v-card-text>
                        </v-card>

                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>