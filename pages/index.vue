<!--Home page-->

<script setup lang="ts">
  //get companies data
  const{data:banner_img} = await useFetch('/api/images/banner_home.jpg')
  const{data:companies} = await useFetch('/api/companies/')

  //array of infos
  const card_array = [
  {
    title: "The Group",
    description:"Since its inception in 2019, MEGA Group has embarked on an inspiring journey, driven by a strong vision to make a meaningful impact in the fields of robotics, finance, healthcare, space exploration, agriculture, and sustainability. In the early years, we established a diverse and talented team, carefully selecting individuals with deep expertise and a shared passion for responsible investing.",
    button:"Learn more about us",
    path:"/about"
  },
  {
    title:"The Team",
    description:"We have supported a portfolio of highly impactful projects that are driving innovation and making a difference in the world. These projects, spanning across the fields of robotics, finance, healthcare, space exploration, agriculture, and sustainability, showcase our commitment to investing in transformative ideas with long-term potential.",
    button:"Meet our team",
    path:"/people"
  },
  {
    title:"The Impact",
    description: "We have supported a portfolio of highly impactful projects that are driving innovation and making a difference in the world. These projects, spanning across the fields of robotics, finance, healthcare, space exploration, agriculture, and sustainability, showcase our commitment to investing in transformative ideas with long-term potential.",
    button:"See our most relevant projects",
    path:"/projects/relevant"
  }
  ]

  useSeoMeta({
    title: "MEGA Group",
    description: "Introduction to venture capital MEGA Group.",
  })
</script>

<template>
  <!-- <v-container class="bg-darker-blue" fluid>
    <v-row class="justify-center align-center">
      <v-col cols="6">
        <div class="text-h1 font-weight-black pa-2">Mega Venture Capital</div>
        <div class="text-h6 font-weight-thin pa-2">This is our website and how we work</div>
      </v-col>
      <v-col cols="3">
        <v-img src="img/logo.png" height="500"/>
      </v-col>
    </v-row>
  </v-container> -->
  <v-parallax :src="banner_img?.publicUrl">
    <div class="d-flex flex-column fill-height justify-center align-center text-white text-center bg-darken">
      <v-row class="d-flex justify-center ma-0">
        <v-col class="d-flex" cols="12" md="8">
          <v-row>
            <v-col cols="12" class="text-light text-center mb-10 mt-5">
              <v-img src="img/logo.png" height="400"/>
              <div class="text-h3 font-weight-black pa-2">MEGA Group</div>
              <div class="text-h6 font-weight-thin pa-2">We believe in the dreams of young businesses. We transform your Ideas into investments for a sustainable future.</div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </v-parallax>
  <v-container class="bg-mega-grey py-10" fluid>
    <v-row class="justify-center my-10">
      <v-col cols="12" md="8" class="justify-center">
        <v-row class="d-flex justify-center">
          <v-col cols="12" class="justify-center">
            <div class="text-h3 font-weight-black text-center pa-2">Who we are</div>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
          <v-col v-for="info in card_array" cols="12" md="6">
            <InfoCard :title="info.title" :description="info.description" :button="info.button" :path="info.path"></InfoCard>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
  <v-container class="bg-dark-blue py-10" fluid>
    <v-row class="justify-center">
      <v-col cols="12" md="8" class="justify-center">
        <v-row class="d-flex justify-center">
          <v-col cols="12" class="justify-center">
            <div class="text-h6 font-weight-bold text-center pa-2">Startups we've helped</div>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
          <v-col cols="3" md="1" v-for="company in companies" class="justify-center" >
            <v-img :src="company.icon" height="50"  aspect-ratio="1" width="50" contain :alt="company.name" :key="company.id"/>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="8" class="d-flex justify-center align-center" >
        <v-divider cols="10" color="light" thickness="7" class="d-flex border-opacity-100 justify-center my-5"></v-divider>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col cols="12" md="8" class="justify-center">
        <v-row class="d-flex justify-space-around">
          <v-col  cols="12" md="3" class="justify-center d-none d-sm-flex">
            <div class="text-h6 font-weight-bold d-flex text-center">Want to talk with us?</div>
          </v-col>
          <v-col cols="10" md="4" class="d-flex justify-center">
            <v-btn to="/contacts/" class="mx-2 font-weight-bold" color="darker-blue" block>Contact Us</v-btn>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-space-around">
          <v-col  cols="12" md="3" class="justify-center d-none d-sm-flex">
            <div class="text-h6 font-weight-bold d-flex text-center">Does your project need financing?</div>
          </v-col>
          <v-col cols="10" md="4" class="d-flex justify-center align-center">
            <v-btn to="/contacts/form" class="mx-2 font-weight-bold" color="darker-blue" block>Send us your project proposal</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    
  </v-container>
</template>
