<script setup>
    defineProps({
        'card_icon': String,
        'card_title': String,
        'icon_size':Number
    })
</script>
<template>
    <div>
    <v-container>
        <v-row no-gutters>
            <v-col class="d-flex flex-column justify-center align-center">
                <v-icon :size=icon_size>{{ `mdi-${card_icon}` }}</v-icon>
                <div v-if="card_title!=null" class="text-h5 font-weight-bold mt-2" style="white-space: nowrap;">{{ card_title }}</div>
            </v-col>
        </v-row>
    </v-container>
    </div>
</template>