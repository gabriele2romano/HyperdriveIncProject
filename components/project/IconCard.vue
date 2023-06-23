<script setup>
    defineProps({
        'card_icon': String,
        'card_title': String
    })
</script>
<template>
    <div>
        <v-container class="my-10">
        <v-row no-gutters>
            
            <v-col class="d-flex flex-column justify-center align-center">
                <v-icon size="80">{{ `mdi-${card_icon}` }}</v-icon>
                <div class="text-h5 font-weight-bold mt-2" style="white-space: nowrap;">{{ card_title }}</div>
            </v-col>
                       
        </v-row>
    </v-container>
    </div>
</template>