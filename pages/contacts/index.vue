<script setup>
const { data:banner_img } = await useFetch('/api/images/banner_contact.jpg')

const size_icon = 90
const contacts = [
{
    icon: "mdi-map-marker",
    text: "Via Leonardo 38 - Milano (IT)"
},
{
    icon: "mdi-email",
    text: "contact@megagroup.com"
},
{
    icon: "mdi-phone",
    text: "+39 318 989 3204"
},
{
    icon: "mdi-fax",
    text: "0238359842"
},
{
    icon: "mdi-receipt-text",
    text: "P.IVA 1234567890"
}
]
</script>

<template>
    <Banner 
    banner_title="Contact Us" 
    banner_subtitle="We love questions and feedback and we're always happy to help! Here are some ways to contact us."
    :banner_img="banner_img"
    banner_link="Go to project proposal form"
    banner_path="/contacts/form"
    >
</Banner>
<v-container fluid class="bg-mega-grey">
    <v-row class="d-flex justify-center my-5">
        <v-col cols="12" md="10" class="justify-center align-center">
            <v-sheet color="dark-blue" rounded class="pa-2 pa-md-10">
                <v-container>
                    <v-row>
                        <v-col cols="12" md="6" class="d-flex align-center" v-for="contact_det in contacts">
                            <v-icon :icon="contact_det.icon" :size="size_icon" color="light">
                            </v-icon>
                            <div class="text-body-1 text-md-h6 text-light font-weight-bold pa-2">{{contact_det.text}}</div>
                        </v-col>
                    </v-row>
                </v-container>
            </v-sheet>
            
            <v-row class="d-flex justify-center">
                <v-col cols="8" class="d-flex justify-center align-center" >
                    <v-divider  cols="10" color="light" thickness="7" class="d-flex border-opacity-100 justify-center mt-10 mb-3"></v-divider>
                </v-col>
            </v-row>
            <v-row class="d-flex">
                <v-col cols="12" md="8" class="d-flex justify-center ">
                    <div class="text-body-1 text-md-h4 text-light font-weight-bold text-left">
                        Are you a company? Would you like to get<br>funding for your latest project?
                    </div>
                </v-col>
                <v-col cols="12" md="4" class="d-flex justify-center my-auto">
                    <NuxtLink to="/contacts/form" class="d-flex my-auto" style="text-decoration: none;">
                        <v-btn class="text-light text-h6 bg-darker-blue font-weight-bold mr-auto ml-auto mr-md-0" size="x-large" variant="tonal" rounded=6>
                            Send us your project proposal
                        </v-btn>
                    </NuxtLink>
                </v-col>
            </v-row>
            
        </v-col>
    </v-row>
    
</v-container>
</template>