<template>
    <div id="app">
        <v-app id="inspire">
            <AppHeader/>
            
            <!-- <div class="mt-10 mt-sm-10"> -->
                <div style="margin-top: 75px;">
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

    * {
        font-family: 'Raleway', sans-serif;
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
<script setup>
</script>