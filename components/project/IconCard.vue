<script setup>
    const props = defineProps({
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
            <v-col cols="4" class="d-flex justify-center text-center mb-2" v-for="area in areas" :key="area.id">
                <div>
                <v-icon class="d-flex mx-auto" v-if="card_icon" :size=icon_size>{{ `mdi-${area.icon}` }}</v-icon>
                <div v-if="card_title" class="text-body-h6  font-weight-thin align-self-end" >{{ area.name }}</div>
                </div>
            </v-col>
    </v-row>
    </div>
</template>