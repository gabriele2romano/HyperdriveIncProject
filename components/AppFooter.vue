<template>
    <v-footer class="bg-darker-blue text-center d-flex flex-column">
        <v-container>
            <v-row align-self="center" justify="space-between">
                <!--MEGA logo-->
                <v-col cols="12" md="4" xs="12" align-self="center" >
                    <div>
                        <v-img src="/img/logo.png" max-width="100" class="ma-auto" alt="MEGA Group logo"></v-img>
                    </div>
                </v-col>
                
                <v-col cols="12" md="4" xs="12" align-self="center">
                    <!--navigation buttons to social media-->
                    <div>
                        <v-btn
                            v-for="icon in icons"
                            :key="icon"
                            class="mx-4"
                            :icon="icon.name"
                            variant="text"
                            :aria-label="icon.aria"
                        ></v-btn>
                    </div>

                    <!--some contact info-->
                    <div class="pt-0 mx-auto font-weight-medium" >
                        Via Leonardo 38, Milano (IT), 20123<br> Fax : 0238359842<br>Phone Number: +39 318 989 3204<br>Mail: contact@mega.inc
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>

<script setup>
    const icons = [
    { name: 'mdi-facebook', link: 'https://facebook.com/', aria: 'facebook'},
    { name: 'mdi-twitter', link: 'https://twitter.com/', aria: 'twitter'},
    { name: 'mdi-linkedin', link: 'https://linkedin.com/', aria: 'linkedin'},
    { name: 'mdi-instagram', link: 'https://www.instagram.com/', aria: 'instagram'},
    ]
</script>