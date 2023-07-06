<!--Introductory page to all areas-->

<script setup>

//fetch banner image
const{ data: banner_img } = await useFetch('/api/images/banner_areas.jpg')
const banner_title = "Our Areas of Investment"
const banner_subtitle = "Take a look at the intriguing areas we focus on for the projects we finance."

//fetch all areas' data
const { data: areas } = await useFetch('/api/areas')

useSeoMeta({
    title: "MEGA - Areas",
    description: "List of all areas of investment that MEGA Group is interested in.",
})

</script>

<template>
    <Banner :banner_title="banner_title" :banner_subtitle="banner_subtitle" :banner_img="banner_img"></Banner>
    
    <!--area cards-->
    <v-container fluid class="bg-mega-grey">
        <v-row class="d-flex" justify="center">
            <v-col class="d-flex flex-column justify-center" cols="12" md="10">
                <v-row class="d-flex">
                    <v-col cols="12" md="4" sm="6" v-for="area in areas" :key="area.id" class="pa-4">
                        <v-hover
                        v-slot="{ isHovering, props }"
                        >
                        <v-card  :elevation="isHovering ? 8 : 2" v-bind="props" :to="'/areas/' + area.id" class="bg-dark-blue-div pa-4 font-weight-bold text-light d-flex flex-column align-center fill-height"
                        >
                        <v-icon :icon="'mdi-' + area.icon" color="light" size="90"></v-icon>
                        <v-card-title class="text-h5 pb-3 font-weight-bold">{{ area.name }}</v-card-title>
                        <v-card-text class="text-body-1 text-left">{{ area.description }}</v-card-text>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
    </v-col>
</v-row>
</v-container>
</template>