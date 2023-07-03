<script setup>

const{data:banner_img} = await useFetch('/api/images/banner_aboutus.jpg')

const {data:people} = await useFetch('/api/people/')

const banner_title = "Meet our team of experts"
const banner_subtitle = "We are a group of many talented people. Learn more about each of us."

</script>

<template>
    <Banner :banner_title="banner_title" :banner_subtitle="banner_subtitle" :banner_img="banner_img"></Banner>
    
    <v-container fluid class="bg-mega-grey">
        <v-row class="d-flex" justify="center">
            <v-col class="d-flex flex-column justify-center" cols="12" md="8">
                <v-row class="d-flex">
                    <v-col cols="12" md="4" v-for="person in people" :key="person.id">
                        
                        <v-card :to="'/people/' + person.id" class="bg-dark-blue-div ma-1 font-weight-bold text-light d-flex flex-column justify-space-between" min-height="500px">
                            <div class="bg-light">
                                <v-img :src=person.image height="100%" cover></v-img>
                            </div>
                            <div class="py-4">
                                <v-card-title class="text-h4 font-weight-bold text-center">{{ person.name }} {{ person.surname }}</v-card-title>
                                <v-card-text class="text-h6 text-center">{{ person.role }}</v-card-text>
                            </div>
                        </v-card>

                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>