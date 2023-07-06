<!--About Us page. It contains several pieces of information concerning the VC's achievements, history and ethics.-->

<script setup>
    //fetch banner image
    const { data: banner_image } = await useFetch('/api/images/banner_aboutus.jpg')

    //fetch numerical data about the venture's achievements
    const { data: info } = await useFetch('/api/text/about_info')
    const info_items = info.value

    //fetch data that describes the venture's history, grouped by year
    const { data: history } = await useFetch('/api/text/about_history')
    const years_array = history.value.years_array

    //fetch data that describes the venture's values
    const { data: values } = await useFetch('/api/text/about_values')
    const value_array = values.value.value_array

    useSeoMeta({
        title: "MEGA - About Us",
        description: "Detailed presentation of MEGA Group. Main achievements, brief history and values of the venture.",
    })
</script>

<template>
    <!--top banner-->
    <Banner
        banner_title="About Us"
        banner_subtitle="Get to know us a bit more"
        :banner_img="banner_image"
    ></Banner>

    <div class="bg-mega-grey text-light">
        <v-container fluid>
            <v-row justify="center">
                <!--page introduction-->
                <v-col cols="12" md="10">
                    <div class="text-h4 text-center pa-3 font-weight-bold">
                        Who are we?
                    </div>
                    <div class="text-h5 text-center">
                        We believe facts are worth much more than words, and numbers speak for themselves. 
                        Even though we're a young venture capital firm, we have achieved a few remarkable milestones in our journey so far. 
                        So, instead of a lengthy introduction, here's a few of those facts and figures.
                    </div>

                    <!--info pieces-->
                    <v-container>
                        <v-row justify="center" class="text-center">
                            <v-col cols="12" md="4" class="d-flex flex-column align-center">
                                <v-icon icon="mdi-account" size="100" color="light"></v-icon>
                                <div class="text-h5 pb-2 font-weight-bold">{{ info_items.members }} Experts</div>
                                <NuxtLink to="/people" style="text-decoration: none;">
                                    <v-btn class="bg-darker-blue font-weight-bold">Meet our team</v-btn>
                                </NuxtLink>
                            </v-col>

                            <v-col cols="12" md="4" class="d-flex flex-column align-center">
                                <v-icon icon="mdi-note-edit" size="100" color="light"></v-icon>
                                <div class="text-h5 pb-2 font-weight-bold">{{ info_items.projects }} Projects Funded</div>
                                <NuxtLink to="/projects" style="text-decoration: none;">
                                    <v-btn class="bg-darker-blue font-weight-bold">Discover our projects</v-btn>
                                </NuxtLink>
                            </v-col>

                            <v-col cols="12" md="4" class="d-flex flex-column align-center">
                                <v-icon icon="mdi-handshake" size="100" color="light"></v-icon>
                                <div class="text-h5 pb-2 font-weight-bold">{{ info_items.jobs }} New Jobs</div>
                            </v-col>
                        </v-row>

                        <v-row justify="center" class="text-center">
                            <v-col cols="12" md="4" class="d-flex flex-column align-center">
                                <v-icon icon="mdi-cash-multiple" size="100" color="light"></v-icon>
                                <div class="text-h5 pb-2 font-weight-bold">{{ info_items.capital }} of Managed Capital</div>
                            </v-col>

                            <v-col cols="12" md="4" class="d-flex flex-column align-center">
                                <v-icon icon="mdi-office-building" size="100" color="light"></v-icon>
                                <div class="text-h5 pb-2 font-weight-bold">Collaborated with {{ info_items.startups }} Innovative Startups</div>
                            </v-col>

                            <v-col cols="12" md="4" class="d-flex flex-column align-center">
                                <v-icon icon="mdi-finance" size="100" color="light"></v-icon>
                                <div class="text-h5 pb-2 font-weight-bold">{{ info_items.ROI }} Average ROI</div>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-col>
            </v-row>

            <!--divider and second section title-->
            <v-row justify="center">
                <v-col cols="12" md="10">
                    <v-divider :thickness="3" color="light" class="border-opacity-100"></v-divider>

                    <div class="text-h4 text-center pa-3 font-weight-bold">A taste of our history</div>
                </v-col>
            </v-row>

            <v-row justify="center">
                <v-col cols="12" md="6">
                    <!--carousel with history cards, each about one year-->
                    <v-carousel
                        color="light"
                        :continuous="true"
                        :hide-delimiter-background="true"
                        class="fill-height card-bordered"
                    >
                        <v-carousel-item v-for="year_item in years_array" :key="i" cover class="d-flex flex-column align-center justify-center">
                            <div class="bg-dark-blue-div text-light pt-5 pb-12 px-12" style="min-height: 400px;">
                                <div class="text-h4 py-3 text-center font-weight-bold">
                                    {{ year_item.year }}
                                </div>

                                <div class="text-h6 text-md-center" style="padding-left: 10%; padding-right: 10%;">
                                    {{ year_item.story }}
                                </div>
                            </div>
                        </v-carousel-item>
                    </v-carousel>
                </v-col>
            </v-row>

            <v-row justify="center">
                <v-col cols="12" md="10">
                    <v-divider :thickness="3" color="light" class="border-opacity-100"></v-divider>

                    <div class="text-h4 text-center pa-3 font-weight-bold">Why choose us?</div>

                    <!--value cards-->
                    <v-container>
                        <v-row justify="center">
                            <v-col cols="12" md="8">
                                <v-row justify="center">
                                    <v-col v-for="value_item in value_array" :key="i" cols="12" md="6">
                                        <div class="bg-dark-blue-div card-bordered pa-4 d-flex flex-column justify-center" style="min-height: 340px;">
                                            <div class="text-h5 text-center pt-3 font-weight-bold">
                                                {{ value_item.name }}
                                            </div>

                                            <div class="text-body-1 text-center pa-3">
                                                {{ value_item.description }}
                                            </div>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>