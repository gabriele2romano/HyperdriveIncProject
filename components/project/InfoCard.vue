<!--Used in the page for a single project. Displays three key features of the project: country, foundation year and month-year when
the project was first funded-->

<script setup>
    defineProps({
        'country': String,
        'foundationYear': String,
        'fundingDate': String,
    })
</script>

<template>
    <v-container fluid class="mt-5">
        <v-row >
            
            <v-col class="d-flex flex-column justify-center align-center">
                <v-icon icon="mdi-flag-variant" size="80"></v-icon>
                <div class="text-h5 font-weight-bold mt-2" style="white-space: nowrap;">Country</div>
                <div class="text-h6 mt-1">{{country}}</div>
            </v-col>

            <v-col class="d-flex flex-column justify-center align-center">
                <v-icon icon="mdi-calendar-month" size="80"></v-icon>
                <div class="text-h5 font-weight-bold mt-2" style="white-space: nowrap;">Founded in</div>
                <div class="text-h6 mt-1">{{foundationYear}}</div>
            </v-col>

            <v-col class="d-flex flex-column justify-center align-center">
                <v-icon icon="mdi-hand-coin" size="80"></v-icon>
                <div class="text-h5 font-weight-bold mt-2" style="white-space: nowrap;">Funding started in</div>
                <div class="text-h6 mt-1">{{fundingDate}}</div>
            </v-col>
           
        </v-row>
    </v-container>
</template>
