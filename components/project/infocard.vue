<script setup>
    const props = defineProps(['country', 'foundation-year', 'funding-date']);
</script>

<template>
    <v-container>
        <v-row>
            <v-col class="d-flex flex-column justify-center align-center">
                <v-icon icon="mdi-flag-variant" size="x-large"></v-icon>
                <div class="text-h4">Country</div>
                <div class="text-body-3 mb-2">{{country}}</div>
            </v-col>

            <v-col class="d-flex flex-column justify-center align-center">
                <v-icon icon="mdi-flag-variant" size="x-large"></v-icon>
                <div class="text-h4">Founded In</div>
                <div class="text-body-3 mb-2">{{foundation-year}}</div>
            </v-col>

            <v-col class="d-flex flex-column justify-center align-center">
                <v-icon icon="mdi-flag-variant" size="x-large"></v-icon>
                <div class="text-h4">Funding started in</div>
                <div class="text-body-3 mb-2">{{funding-date}}</div>
            </v-col>
        </v-row>
    </v-container>
</template>