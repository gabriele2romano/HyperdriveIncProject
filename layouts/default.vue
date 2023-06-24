<template>
    <div id="app">
        <v-app id="inspire">
            <!-- <AppHeaderMobile v-if="$device.isMobile"/>
                <AppHeaderDesktop v-else/> -->
                <AppHeader/>
                
                <div style="margin-top:50px">
                    <slot/>
                </div>
                <AppFooter/>
            </v-app>
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
    /* class useful to some components */
    .bg-darker-blue-div{
        background-color: rgba(33, 42, 62, 0.75);
    }

    .bg-darken
    {
        background-color: rgba(0, 0, 0, 0.3);
    }

    .bg-blurred{
        filter: blur(8px);
        -webkit-filter: blur(8px);
    }
</style>
<script setup>

const {device} = useDevice();
</script>