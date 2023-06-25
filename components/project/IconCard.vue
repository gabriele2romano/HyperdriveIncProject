<script setup>
    const props = defineProps({
        'card_icon': { type:Boolean, default:true },
        'card_title': { type:Boolean, default:true },
        'icon_size': { type:Number, default:50 },
        'areas': Array
    })
</script>
<template>
    <div>
    <v-row no-gutters class="d-flex ">
            <v-col class="d-flex justify-content-center align-content-center" v-for="area in areas" :key="area.id">
                <div>
                <v-icon class="d-flex mx-auto" v-if="card_icon" :size=icon_size>{{ `mdi-${area.icon}` }}</v-icon>
                <div v-if="card_title" class="text-h5 font-weight-bold mt-2 mx-auto" style="white-space: nowrap;">{{ area.name }}</div>
                </div>
            </v-col>
    </v-row>
    </div>
</template>