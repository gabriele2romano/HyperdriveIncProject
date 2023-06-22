<!--This is the page containing information about a single member of the VC's team-->

<script setup>
    const prevMember = "Kad Nellalav",
          nextMember = "Son Kadut",
          name = "Steve Kadend",
          role = "General Administrator"
</script>

<template>
    <NuxtLayout>
    <div class="bg-mega-grey">
        <!--Container for the page content-->
        <v-container 
            fluid 
            class="font-weight-bold my-auto"
            max-width="1140"
        >
            <!--First row: team navigation buttons under the header-->
            <v-row>
                <v-spacer></v-spacer>

                <v-col>
                    <v-btn
                        class="text-light text-body-1 bg-dark-blue font-weight-bold"
                        variant="tonal" 
                        rounded=6
                    >
                        See our whole team
                    </v-btn>
                </v-col>

                <v-col>
                    <v-btn
                        class="text-light text-body-1 font-weight-bold"
                        variant="text"
                        :ripple="false"
                    >
                        <v-icon icon="mdi-arrow-left" color="darker-blue"></v-icon>
                        Previous member:<br>{{ prevMember }}
                    </v-btn>
                </v-col>

                <v-col>
                    <v-btn
                        class="text-light text-body-1 font-weight-bold"
                        variant="text"
                        :ripple="false"
                    >
                        Next member:<br>{{ nextMember }}
                        <v-icon icon="mdi-arrow-right" color="darker-blue"></v-icon>
                    </v-btn>
                </v-col>

                <v-spacer></v-spacer>
            </v-row>

            <!--Second row: container for the person card-->
            <v-row>
            <v-sheet
                class="text-body-2 mx-auto bg-darker-blue"
                max-width="1140"
            >
                <v-container fluid>
                <v-row>
                    <v-col cols="12" md="3">
                    <!--Person's picture-->
                    <v-img 
                        src="https://cdn.vuetifyjs.com/docs/images/graphics/img-placeholder.png" height="100%" cover></v-img>
                    </v-col>

                    <v-col cols="12" md="9">
                        <v-container>
                        <v-row align-content="space-between">
                            <v-col cols="9">
                                <div class="text-h3 pa-2">{{ name }}</div>
                                <div class="text-h4 pa-2">{{ role }}</div>
                            </v-col>

                            <v-col justify="end">
                                <div class="text-subtitle-2 pa-2">
                                    <v-icon icon="mdi-phone"></v-icon>
                                    +39 (123) 4567890
                                </div>
                                <div class="text-subtitle-2 pa-2">
                                    <v-icon icon="mdi-email"></v-icon>
                                    stevekad@mega.inc
                                </div>
                            </v-col>
                        </v-row>

                        <v-row>
                        <v-col cols="12">
                            <p class="text-body-2 pa-2">
                                Testo di Esempio lungo. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.Testo di Esempio lungo. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.Testo di Esempio lungo. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.Testo di Esempio lungo. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
                            </p>
                        </v-col>
                        </v-row>
                        </v-container>
                    </v-col>
                </v-row>
                </v-container>
            </v-sheet>
            </v-row>

            <!--Third row: divider for the supervised projects section-->
            <v-row justify="center">
            <v-col cols="12">
                <v-divider :thickness="7" color="light" class="border-opacity-100"></v-divider>

                <div class="text-h4 text-center text-light font-weight-bold">
                    Discover the projects supervised by {{ name }}
                </div>
            </v-col>
            </v-row>

            <!--Fourth row: list of project cards-->
            <v-row justify="center">
            <v-col v-for="n in 3" cols="2">
                <ProjectCard title="Coso" description="Sample description"></ProjectCard>
            </v-col>
            </v-row>
        </v-container>
    </div>
    </NuxtLayout>
</template>

<!--
<style scoped>
    .team-nav-button {
        font-family: var(--main-font);
        font-weight: bold;
        color: var(--color4);
    }

    #back-to-team-button {
        color: var(--color2);
        background-color: var(--color3);
    }
</style>
-->