<template>
    <v-sheet class="d-flex bg-darker-blue text-light font-weight-medium justify-center flex-wrap text-center my-3" height="580px">
        <v-container fluid class="d-flex align-center">
            <v-row class="d-flex fill-height">
                <v-col cols="12" class="d-flex flex-column align-start">
                    <v-img :src=project_image width="100%" max-height="300" :aspect-ratio="1" cover></v-img>
                </v-col>
                <v-col cols="12" class="d-flex flex-column align-cem text-left">
                    <div>
                        <div class="text-h5 pb-3 font-weight-bold">{{ project_title }}</div>
                        <div class="text-body-2">{{ project_overview }}</div>
                    </div>
                </v-col>
                <v-col cols="12" class="d-flex align-end">
                    <v-btn  variant="tonal" text @click="$router.push(`/projects/${project_id}`)">Learn more</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-sheet>
</template>
<script setup>
defineProps({
    'project_id': Number,
    'project_title': String,
    'project_overview': String,
    'project_image': String,
})
</script>