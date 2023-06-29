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
    <v-container fluid :style="{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(' + banner_img.publicUrl + ')', backgroundSize:'cover'}">
        <v-row class="d-flex justify-center">
            <v-col class="d-flex" cols="12" md="8">
                <div>
                    <b-link v-if="banner_link!=null" :to="banner_path" class="link-light mx-2" variant="light">{{ banner_link }}</b-link>
                    <div v-if="banner_title!=null" class="text-h3 text-md-h1 text-light font-weight-black mx-2 my-5">{{ banner_title }}</div>
                    <div v-if="banner_subtitle!=null" class="text-h5 text-md-h6 text-light font-weight-bold pa-2" >{{ banner_subtitle }}</div>
                    <div v-if="banner_body!=null" class="text-body-h4 body-text-md-h2 text-light font-weight-bold pa-2" >{{ banner_body }}</div>
                </div>
            </v-col>
        </v-row>
    </v-container>
    <!-- End Banner -->
</template>
<style scoped>

</style>