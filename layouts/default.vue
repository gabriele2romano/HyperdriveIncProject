<template>
    <div>
        <AppHeader />
        <!-- <v-container fluid>
            <v-row>
                <v-col cols="12" md="12">
                    <slot/>
                </v-col>
            </v-row>
        </v-container> -->
        <!--AppFooter /-->
        <slot/>
    </div>
</template>

<style>
:root {
    --color1 : #000000;
    --color2 : #f1f6f9;
    --color3 : #394867;
    --color4 : #212a3e;
    --color5 : #9ba4b5;
    
    --main-font: 'Raleway', sans-serif;
}
</style>