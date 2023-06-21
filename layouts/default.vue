<template>
    <div>
        <v-app>
            <AppHeaderMobile v-if="$device.isMobile"/>
            <AppHeaderDesktop v-else/>
            <slot/>
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
</style>
<script setup>
const {device} = useDevice();
</script>