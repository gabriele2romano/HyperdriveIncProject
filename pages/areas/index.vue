<script setup>

const{data:banner_img} = await useFetch('/api/images/banner_areas.jpg')
const banner_title = "Our Areas"
const banner_subtitle = "Discover our team of experts"
const banner_body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  nisi ut aliquip ex ea commodo consequat."

</script>

<template>
    <Banner :banner_title="banner_title" :banner_subtitle="banner_subtitle" :banner_body="banner_body" :banner_img="banner_img"></Banner>
    
</template>