<!--This is the About Us page. It contains several pieces of information concerning the VC's history, work and ethics.-->

<script setup>
    //fetch banner image
    const { data: banner_image } = await useFetch('/api/images/banner_aboutus.jpg')

    const years = ['2019', '2020', '2021', '2022', '2023', 'Future Growth and Impact']
    const stories = [
        `In 2019, our investment company was founded with a bold vision to transform the investment landscape in the fields of robotics, 
        finance, healthcare, space exploration, agriculture, and sustainability. We assembled a highly skilled and diverse team, bringing 
        together experts in finance, technology, and sustainability, united by a passion for responsible investing.`,
        `During 2020, we dedicated significant efforts to developing a robust investment strategy. Our team conducted thorough market research, 
        identifying emerging trends, disruptive technologies, and sustainable business models. This research formed the foundation of our 
        investment approach, which focused on identifying opportunities that aligned with our core areas of interest and had the potential for 
        long-term growth and positive impact.`,
        `In 2021, we made our initial investments, carefully selecting companies that showcased promising potential in their respective fields. 
        Our team conducted rigorous due diligence, evaluating financial performance, market positioning, and the alignment of the companies' 
        values with our sustainability goals. These early investments marked the beginning of our journey towards building a diversified portfolio 
        of high-potential ventures.`,
        `As our team's expertise and reputation grew, we expanded our focus into new sectors. We recognized the transformative potential of space 
        exploration and made strategic investments in companies pushing the boundaries of satellite technology and deep space exploration. 
        Additionally, we saw the opportunity to drive innovation and sustainability in the agriculture sector, investing in companies that 
        leveraged technology to promote efficient and environmentally friendly farming practices.`,
        `In 2023, we witnessed significant progress in our portfolio companies, with many achieving notable milestones and generating substantial 
        returns. Our strategic investments in robotics revolutionized industries such as manufacturing, healthcare, and logistics, driving 
        automation and efficiency. Simultaneously, our investments in finance and healthcare led to the development of innovative solutions that 
        improved accessibility and quality of services.`,
        `As we move forward, our investment company is poised for continued growth and impact. We remain committed to identifying disruptive 
        technologies, sustainable business models, and socially responsible investments across our target sectors. Our team's extensive 
        experience and expertise in investment analysis enable us to navigate complex market dynamics and capture emerging opportunities for our 
        investors while driving positive change in the world.`
    ]

    const values = ['Professionalism', 'Loyalty', 'Passion', 'Uniqueness']
    const value_descriptions = [
    `Professionalism is at the core of everything we do. Our team of experts brings a wealth of 
    knowledge and experience to the table, ensuring meticulous analysis, strategic decision-making, 
    and diligent execution. We hold ourselves to the highest standards of integrity, professionalism, 
    and ethical conduct. Our commitment to professionalism enables us to provide our investors with reliable, 
    well-informed advice and deliver exceptional results.`,
    `Loyalty is the cornerstone of our relationships, both with our investors and our portfolio companies. 
    We prioritize long-term partnerships built on trust, transparency, and mutual respect. We are dedicated to 
    fostering enduring relationships, standing by our commitments, and supporting the growth and success of our partners. 
    Our loyalty extends beyond financial gains, as we strive to be a trusted ally throughout the journey, through both the ups and downs.`,
    `Passion is the driving force behind our investment endeavors. We are passionate about identifying and supporting innovative 
    ideas that have the potential to make a positive impact. Our team's genuine enthusiasm for entrepreneurship, technological 
    advancements, and sustainable solutions fuels our dedication to finding and nurturing exceptional ventures. It is this passion 
    that propels us to go the extra mile, bringing energy and excitement to every investment opportunity.`,
    `What sets us apart is our unique blend of expertise, perspectives, and values. We embrace diversity and foster an inclusive 
    culture that encourages creativity and out-of-the-box thinking. Our ability to see opportunities where others may not, 
    combined with our forward-thinking approach, allows us to uncover hidden gems and unlock their true potential. Our commitment 
    to sustainability and responsible investing further distinguishes us, as we seek ventures that align with our vision for a better 
    and more sustainable future.`,
    ]
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
                <v-col cols="12" md="10">
                    <div class="text-h4 text-center pa-3 font-weight-bold">
                        Who are we?
                    </div>
                    <div class="text-h5 text-center">
                        We believe facts are worth much more than words, and numbers speak for themselves. 
                        Even though we're a young venture capital firm, we have achieved a few remarkable milestones in our journey so far. 
                        So, instead of a lengthy introduction, here's a few of those facts and figures.
                    </div>

                    <!--data points-->
                    <v-container>
                        <v-row justify="center" class="text-center">
                            <v-col cols="12" md="4" class="d-flex flex-column align-center">
                                <v-icon icon="mdi-account" size="100" color="light"></v-icon>
                                <div class="text-h5 pb-2 font-weight-bold">12 Experts</div>
                                <NuxtLink to="/people" style="text-decoration: none;">
                                    <v-btn class="bg-darker-blue font-weight-bold">Meet our team</v-btn>
                                </NuxtLink>
                            </v-col>

                            <v-col cols="12" md="4" class="d-flex flex-column align-center">
                                <v-icon icon="mdi-note-edit" size="100" color="light"></v-icon>
                                <div class="text-h5 pb-2 font-weight-bold">17 Projects Funded</div>
                                <NuxtLink to="/projects" style="text-decoration: none;">
                                    <v-btn class="bg-darker-blue font-weight-bold">Discover our projects</v-btn>
                                </NuxtLink>
                            </v-col>

                            <v-col cols="12" md="4" class="d-flex flex-column align-center">
                                <v-icon icon="mdi-handshake" size="100" color="light"></v-icon>
                                <div class="text-h5 pb-2 font-weight-bold">2.000+ New Jobs</div>
                            </v-col>
                        </v-row>

                        <v-row justify="center" class="text-center">
                            <v-col cols="12" md="4" class="d-flex flex-column align-center">
                                <v-icon icon="mdi-cash-multiple" size="100" color="light"></v-icon>
                                <div class="text-h5 pb-2 font-weight-bold">$30 Million of Managed Capital</div>
                            </v-col>

                            <v-col cols="12" md="4" class="d-flex flex-column align-center">
                                <v-icon icon="mdi-office-building" size="100" color="light"></v-icon>
                                <div class="text-h5 pb-2 font-weight-bold">Collaborated with 10 Innovative Startups</div>
                            </v-col>

                            <v-col cols="12" md="4" class="d-flex flex-column align-center">
                                <v-icon icon="mdi-finance" size="100" color="light"></v-icon>
                                <div class="text-h5 pb-2 font-weight-bold">25% Average ROI</div>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-col>
            </v-row>

            <v-row justify="center">
                <v-col cols="12" md="8">
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
                        <v-carousel-item v-for="(year, i) in years" :key="i" cover class="d-flex flex-column align-center justify-center">
                            <div class="bg-dark-blue-div text-light pt-5 pb-12 px-12" style="min-height: 400px;">
                                <div class="text-h4 py-3 text-center font-weight-bold">
                                    {{ year }}
                                </div>

                                <div class="text-h6 text-md-center" style="padding-left: 10%; padding-right: 10%;">
                                    {{ stories[i] }}
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
                                    <v-col v-for="(value, i) in values" :key="i" cols="12" md="6">
                                        <div class="bg-dark-blue-div card-bordered pa-4 d-flex flex-column justify-center" style="min-height: 340px;">
                                            <div class="text-h5 text-center pt-3 font-weight-bold">
                                                {{ value }}
                                            </div>

                                            <div class="text-body-1 text-center pa-3">
                                                {{ value_descriptions[i] }}
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