<template>
    <!-- <v-sheet class="d-flex bg-darker-blue text-light font-weight-medium justify-center flex-wrap text-center my-3" height="580px" @click="$router.push(`/projects/${project_id}`)">
        <v-container fluid class="d-flex align-center">
            <v-row class="d-flex fill-height">
                <v-col cols="12" class="d-flex flex-column align-start">
                    <v-img :src=project_image width="100%" max-height="300" :aspect-ratio="1" cover></v-img>
                </v-col>
                <v-col cols="12" class="d-flex flex-column align-cem text-left" height="500px">
                    <div>
                        <div class="text-h5 pb-3 font-weight-bold">{{ project_title }}</div>
                        <div class="text-body-2">{{ project_overview }}</div>
                    </div>
                </v-col>
                <v-row class="d-flex justify-center">
                    <v-col cols="12" md="3" v-for="area in project_areas" :key="area.area.id">
                        <ProjectIconCard :card_icon="area.area.icon" :icon_size="50"/>
                    </v-col>
                </v-row>
            </v-row>
        </v-container>
    </v-sheet> -->
    <v-card :to="'/projects/' + project_id" class="bg-dark-blue ma-1" >
        <v-img :src=project_image max-height="200" width="100%" :aspect-ratio="1" cover></v-img>
        <v-card-title class="text-h5 pb-3 font-weight-bold">{{ project_title }}</v-card-title>
        <v-card-subtitle class="text-body-1">What we want to solve</v-card-subtitle>
        <v-card-text class="text-body-2">{{ project_overview }}</v-card-text>
        <v-divider width="50%" class="mx-auto my-0"></v-divider>
        <v-card-actions class="d-flex justify-center">
            <v-container fluid class="ma-1 pa-0">
            <ProjectIconCard :areas="project_areas.area" :card_title="false" :icon_size="30"/>
            </v-container>
        </v-card-actions>
    </v-card>
</template>
<script setup>
const props = defineProps({
    'project_id': Number,
    'project_title': String,
    'project_overview': String,
    'project_image': String,
})
var id = ref(props.project_id).value
const {data:project_areas} = await useFetch('/api/projects/getArea/'+id)
</script>