<!--
    This is an error page.
    Whenever a route that doesn't exist is called, this page will be shown.
-->
<template>
    <NuxtLayout>
        <v-container class="bg-mega-grey text-center" fluid>
            <v-row justify="center" align="center"> 
                <v-col cols="12" md="8">
                    <div class="text-h4 pa-2 bg-dark-blue card-bordered">
                        What are you doing here? You are not supposed to be on this page.<br>
                        We're sorry you got lost, so we'll quickly bring you back to the home page.
                    </div>
                    <v-btn color="darker-blue" size="x-large" class="text-h4 font-weight-medium pa-2 ma-3" to="/">Back to home</v-btn>
                </v-col> 
            </v-row>
        </v-container>
    </NuxtLayout>
</template>