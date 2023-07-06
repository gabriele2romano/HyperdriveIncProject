<!--Introductory page to the team, with cards for all members-->

<script setup>

//fetch banner image
const{data:banner_img} = await useFetch('/api/images/banner_aboutus.jpg')

    const banner_title = "Meet our Team of Experts"
    const banner_subtitle = "We are a group of many talented people. Learn more about each of us."

//fetch the whole team's pictures, names and roles
const {data:people} = await useFetch('/api/people/')

useSeoMeta({
    title: "MEGA - Our team",
    description: "List of team members at MEGA Group.",
})

</script>

<template>
    <Banner :banner_title="banner_title" :banner_subtitle="banner_subtitle" :banner_img="banner_img"></Banner>
    
    <v-container fluid class="bg-mega-grey">
        <v-row class="d-flex" justify="center">
            <v-col class="d-flex flex-column justify-center" cols="12" md="8">
                <v-row class="d-flex">
                    <!--person cards, each with picture, name and role-->
                    <v-col cols="12" md="4" sm="6" v-for="person in people" :key="person.id">
                        
                        <v-card :to="'/people/' + person.id" class="bg-dark-blue-div ma-1 font-weight-bold text-light d-flex flex-column justify-space-between" min-height="500px">
                            <div class="bg-light">
                                <v-img :lazy-src=person.image :src=person.image height="100%" cover :alt="`Picture of ${person.name} ${person.surname}`">
                                    <template v-slot:placeholder>
                                    <div class="d-flex align-center justify-center fill-height">
                                        <v-progress-circular
                                        color="grey-lighten-4"
                                        indeterminate
                                        ></v-progress-circular>
                                    </div>
                                </template>
                                </v-img>
                            </div>
                            <div class="py-4">
                                <v-card-title class="text-h5 font-weight-bold text-center">{{ person.name }} {{ person.surname }}</v-card-title>
                                <v-card-text class="text-body-1 text-center">{{ person.role }}</v-card-text>
                            </div>
                        </v-card>
                        
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>