<script setup>

const{data:banner_img} = await useFetch('/api/images/banner_contact.jpg')
const banner_title = "Contact Us"
const banner_subtitle = "IT Solution & IT Startup"
const banner_body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  nisi ut aliquip ex ea commodo consequat."

</script>

<template>
    <Banner :banner_img="banner_img" :banner_title="banner_title" :banner_subtitle="banner_subtitle" :banner_body="banner_body"></Banner>
    
    <v-container fluid>
        <v-row class="justify-center">
            <v-col cols="12" md="8">
                <ContactForm></ContactForm>
            </v-col>
        </v-row>
    </v-container>    
</template>