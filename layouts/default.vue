<!--Default layout used by all pages. Includes the header and footer-->

<template>
    <div id="app">
        <v-app id="inspire">
            <NuxtLoadingIndicator color="#f1f6f9" :height=6 />
            <AppHeader/>

            <div style="margin-top: 75px;">
                <slot/>
            </div>
            
            <!--This button anchors to the bottom right and allows
            getting back to the page top quickly-->
            <v-btn
                v-show="showUpButton"
                v-scroll="onScroll"
                icon="mdi-arrow-up-bold"
                color="darker-blue"
                location="bottom right"
                position="fixed"
                style="z-index: 3; border: 2px solid white;"
                class="ma-3"
                @click="toTop"
            ></v-btn>

            <AppFooter/>
        </v-app>
    </div>
</template>

<script setup>
    const showUpButton = ref(false)
    const top = ref(0)

    function toTop() {
        window.scrollTo(0, 0)
    }

    function onScroll(e) {
        if (typeof window === 'undefined') return
        top.value = window.scrollY || e.target.scrollTop || 0
        showUpButton.value = top.value > 200
    }
</script>

<style>
    :root {
        --color1 : #000000;
        --color2 : #f1f6f9;
        --color3 : #394867;
        --color4 : #212a3e;
        --color5 : #9ba4b5;
        
        --main-font: 'Raleway', sans-serif;
    }

    * {
        font-family: 'Raleway', sans-serif;
    }

    /* classes useful to some components for setting a transparent or darkened background */
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
    
    .nuxt-link-active{
        color: var(--color1);
        font-weight: bold;
    }
    
    .card-bordered{
        border-radius: 4px;
    }
    
    /* Full screen image */
    .overlay {
        position: fixed; /* Sit on top of the page content */
        width: 100%; /* Full width (cover the whole page) */
        height: 100%; /* Full height (cover the whole page) */
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
        cursor: pointer; /* Add a pointer on hover */
    }

    .be-pointed{
        cursor:pointer;
    }
    
</style>