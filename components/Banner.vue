<script setup>
const props = defineProps({
    'banner_img': Object,
    'banner_title': String,
    'banner_subtitle': String,
    'banner_body': String,
})

</script>
<template>
    <!-- Start Banner -->
    <!-- <v-row class="d-flex">
        <v-col class="d-flex justify-center h-auto" cols="12">
            <v-img v-if="banner_img!=null" :src=banner_img.publicUrl cover class="align-center" height="300px"  style="overflow: hidden;">
                <v-sheet class="d-flex text-light font-weight-medium pa-3" color="transparent">
                    <v-row class="d-flex justify-center align-self-center">
                        <v-col class="d-flex flex-column" cols="12" md="8" xs="12">
                            <div>
                                <div class="text-md-h1 text-h3 text-light font-weight-black pa-2">{{ banner_title }}</div><br>
                                <div class="text-md-h6 text-h5 text-light font-weight-bold pa-2">{{ banner_subtitle }}</div>
                                <div class="body-text-md-h2 body-text-h4 text-light font-weight-bold pa-2">{{ banner_body }}</div>
                            </div>
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-img>
        </v-col>
    </v-row> --><!-- <v-container fluid id="banner" style="background: url(${banner_img.publicUrl}) no-repeat center center fixed !important;background-size: cover;"> -->
    
    <v-container fluid id="banner" :style="{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(' + banner_img.publicUrl + ')', backgroundSize:'cover'}">
        <v-row class="d-flex justify-center my-4">
            <v-col class="d-flex justify-center" cols="12" md="8">
                <div>
                    <div class="text-md-h1 text-h3 text-light font-weight-black pa-2">{{ banner_title }}</div>
                    <div class="text-md-h6 text-h5 text-light font-weight-bold pa-2">{{ banner_subtitle }}</div>
                    <div class="body-text-md-h2 body-text-h4 text-light font-weight-bold pa-2">{{ banner_body }}</div>
                </div>
            </v-col>
        </v-row>
    </v-container>
    <!-- End Banner -->
</template>
<style scoped>
#banner{
    background-size: cover;
}

</style>