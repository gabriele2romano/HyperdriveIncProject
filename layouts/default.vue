<template>
    <div id="app">
        <v-app id="inspire">
            <AppHeader/>
            
            <div style="margin-top:56px">
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

.bg-dark-blue-div {
    background-color: rgb(57, 72, 103, 0.75);
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

//Global and static variables
const {device} = useDevice();
</script>