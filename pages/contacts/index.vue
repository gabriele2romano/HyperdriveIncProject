<script setup>
const { data:banner_img } = await useFetch('/api/images/banner_contact.jpg')

const size_icon = 80
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

<!-- <div class="bg-mega-grey d-flex flex-column justify-center align-center pa-10"> -->
    <!--Contacts card-->
    <!-- <v-sheet color="dark-blue" class="pa-10 ma-10">
        <v-container>
            <v-row>
                <v-col cols="12" md="6" class="d-flex align-center">
                    <v-icon icon="mdi-map-marker" :size="100" color="light">
                    </v-icon>
                    <div class="text-h5 text-light font-weight-bold">Via Leonardo 38 - Milano (IT)</div>
                </v-col>
                
                <v-col cols="12" md="6" class="d-flex align-center">
                    <v-icon icon="mdi-email" :size="100" color="light">
                    </v-icon>
                    <div class="text-h5 text-light font-weight-bold">contact@megagroup.com</div>
                </v-col>
            </v-row>
            
            <v-row>
                <v-col cols="12" md="6" class="d-flex align-center">
                    <v-icon icon="mdi-phone" :size="100" color="light">
                    </v-icon>
                    <div class="text-h5 text-light font-weight-bold">+39 318 989 3204</div>
                </v-col>
                
                <v-col cols="12" md="6" class="d-flex align-center">
                    <v-icon icon="mdi-fax" :size="100" color="light">
                    </v-icon>
                    <div class="text-h5 text-light font-weight-bold">0238359842</div>
                </v-col>
            </v-row>
            
            <v-row>
                <v-col cols="12" md="6" class="d-flex align-center">
                    <v-icon icon="mdi-receipt-text" :size="100" color="light">
                    </v-icon>
                    <div class="text-h5 text-light font-weight-bold">P. IVA</div>
                </v-col>
            </v-row>
        </v-container>
    </v-sheet>
    
    <div class="d-flex flex-column" style="max-width: 1200px;">
        <v-divider color="light" thickness="7" class="border-opacity-100">
        </v-divider>
        
        <div class="text-h4 text-light font-weight-bold">
            Are you a company? Would you like to get<br>funding for your latest project?
        </div>
        <NuxtLink to="/contacts/form" class="ml-auto mt-5" style="text-decoration: none;">
            <v-btn class="text-light text-h6 bg-darker-blue font-weight-bold" size="x-large" variant="tonal" rounded=6>
                Send us your proposal
            </v-btn>
        </NuxtLink>
    </div> 
</div> -->
<v-container fluid class="bg-mega-grey">
    <v-row class="d-flex justify-center my-5">
        <v-col cols="12" md="8" class="justify-center align-center">
            <v-sheet color="dark-blue" rounded class="pa-2 pa-md-10">
                <v-container>
                    <v-row>
                        <v-col cols="12" md="6" class="d-flex align-center" v-for="contact_det in contacts">
                            <v-icon :icon="contact_det.icon" :size="size_icon" color="light">
                            </v-icon>
                            <div class="text-body-h6 text-body-md-h5 text-light font-weight-bold pa-2">{{contact_det.text}}</div>
                        </v-col>
                    </v-row>
                </v-container>
            </v-sheet>
            
            <v-row class="d-flex justify-center">
                <v-col cols="8" class="d-flex justify-center align-center" >
                    <v-divider  cols="10" color="light" thickness="7" class="d-flex border-opacity-100 justify-center my-10"></v-divider>
                </v-col>
            </v-row>
            
            <div class="text-h4 text-light font-weight-bold d-none d-md-flex">
                Are you a company? Would you like to get<br>funding for your latest project?
            </div>
            <NuxtLink to="/contacts/form" class="d-flex mt-5" style="text-decoration: none;">
                <v-btn class="text-light text-h6 bg-darker-blue font-weight-bold mr-auto ml-auto mr-md-0" size="x-large" variant="tonal" rounded=6>
                    Send us your proposal
                </v-btn>
            </NuxtLink>
        </v-col>
    </v-row>
    
</v-container>
</template>