<script setup>
const props = defineProps({
    'banner_path': String,
    'banner_link': String,
    'banner_img': Object,
    'banner_title': String,
    'banner_subtitle': String,
    'banner_body': String,
})

</script>
<template>
    <!-- Start Banner -->
    <v-container fluid id="banner" :style="{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(' + banner_img.publicUrl + ')', backgroundSize:'cover'}">
        <v-row class="d-flex justify-center my-4">
            <v-col class="d-flex justify-center" cols="12" md="8">
                <div>
                    <NuxtLink v-if="banner_link!=null" :to="banner_path" class="pa-2"><b-link variant="light">{{ banner_link }}</b-link></NuxtLink>
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