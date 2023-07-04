<!--Used in the page for a single project. Displays an array of area icons and names, each used to navigate to that area's page-->

<script setup>
    const props = defineProps({
        'clickable': {Boolean , default:false},
        'card_icon': { type:Boolean, default:true },
        'card_title': { type:Boolean, default:true },
        'icon_size': { type:Number, default:50 },
        'font_size': { type:String, default:"text-h5" } ,
        'font_weight': { type:String, default:"font-weight-bold" } ,
        'justify': { type:String, default:"center" } ,
        'areas': Array
    })
</script>

<template>
    <div>
    <v-row class="d-flex" :justify="justify">
        <v-col v-if="clickable" v-ripple cols="4" class="rounded-circle d-flex justify-center text-center mb-2 be-pointed" @click="$router.push('/areas/'+area.id)" v-for="area in areas">
            <div>
            <v-icon class="d-flex mx-auto" v-if="card_icon" :size=icon_size >{{ `mdi-${area.icon}` }}</v-icon>
            <div v-if="card_title" class="text-body-h6  font-weight-thin align-self-end" >{{ area.name }}</div>
            </div>
        </v-col>
        <v-col v-else cols="4" class="d-flex justify-center text-center mb-2" v-for="area in areas">
            <div>
            <v-icon class="d-flex mx-auto" v-if="card_icon" :size=icon_size>{{ `mdi-${area.icon}` }}</v-icon>
            <div v-if="card_title" class="text-body-h6  font-weight-thin align-self-end" >{{ area.name }}</div>
            </div>
        </v-col>
    </v-row>
    </div>
</template>