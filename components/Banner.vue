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
    <v-row class="d-flex">
        <v-col class="d-flex justify-center h-auto" cols="12">
            <v-img v-if="banner_img!=null" :src=banner_img.publicUrl cover :aspect-ratio="1" gradient="rgba(0,0,0,.8), rgba(0,0,0,.8)" class="align-center" max-height="350px" style="overflow: hidden;">
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
        </v-row>
        <!-- End Banner -->
</template>