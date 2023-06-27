<script setup>

const{data:banner_img} = await useFetch('/api/images/banner_team.jpg')

const {data:people} = await useFetch('/api/people/')

const banner_title = "Meet our team of experts"
const banner_subtitle = "We are a group of many talented people. Learn more about each of us."

</script>

<template>
    <Banner :banner_title="banner_title" :banner_subtitle="banner_subtitle" :banner_img="banner_img"></Banner>
    
    <v-container fluid class="bg-mega-grey">
        <v-row class="d-flex" justify="center">
            <v-col class="d-flex flex-column justify-center" cols="12" lg="8" md="8" sx="12">
                <v-row class="d-flex">
                    <v-col cols="12" md="4" xs="12" v-for="person in people" :key="person.id" class="d-flex flex-column">
                        
                        <v-card :to="'/people/' + person.id" class="bg-darker-blue-div ma-1 font-weight-bold text-light">
                            <v-img :src=person.image max-height="350" width="100%" cover></v-img>
                            <v-card-title class="text-h5 pb-3 font-weight-bold text-center">{{ person.name }} {{ person.surname }}</v-card-title>
                            <v-card-text class="text-h6 text-center">{{ person.role }}</v-card-text>
                        </v-card>

                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>