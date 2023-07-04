<!--Used in page most relevant projects. Presents a preview of each project and allows navigation to that project's page. Slightly
different from the card used in other pages-->

<template>
    <div>
        <v-card :to="'/projects/' + project_id" class="bg-dark-blue d-flex flex-column" height="100%" >
            <v-img :src=project_image[0] max-height="300" width="100%" :aspect-ratio="1" cover></v-img>
            <v-card-title class="text-h5 pb-3 font-weight-bold" style="white-space: normal;">{{ project_title }}</v-card-title>
            <v-spacer></v-spacer>
                <v-carousel height="100px" :show-arrows="false" hide-delimiters :continuous="false">
                    <v-carousel-item>
                        <v-card-subtitle class="text-body-1">What is the problem</v-card-subtitle>
                        <v-card-text class="text-body-2 pb-1">{{ project_problem }}</v-card-text>
                    </v-carousel-item>
                    <v-carousel-item>    
                        <v-card-subtitle class="text-body-1">How we will solve</v-card-subtitle>
                        <v-card-text class="text-body-2 pb-1">{{ project_solution }}</v-card-text>
                    </v-carousel-item>
                </v-carousel>
            <!-- <v-divider width="50%" class="mx-auto my-0"></v-divider> -->
            <v-card-actions class="d-flex justify-center mb-0">
                <v-container fluid class="ma-auto pa-auto">
                    <ProjectIconCard :areas="project_areas.area" :card_title="false" :icon_size="30" :font_size="'text-h5'"/>
                </v-container>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script setup>
    const props = defineProps({
        'project_id': Number,
        'project_title': String,
        'project_overview': String,
        'project_problem': String,
        'project_solution': String,
        'project_image': Array,
    })
    var id = ref(props.project_id).value
    const {data:project_areas} = await useFetch('/api/projects/getArea/'+id)
</script>