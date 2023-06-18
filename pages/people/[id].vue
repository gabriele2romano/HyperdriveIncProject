<!--This is the page containing information about a single member of the VC's team-->

<script setup>
    const prevMember = "Kad Nellalav",
          nextMember = "Son Kadut"
</script>

<template>
    <NuxtLayout>
    <div>
        <!--Container for the three navigation buttons under the header-->
        <v-container>
            <v-row
                no-gutters
            >
                <v-col>
                    <v-btn
                        id="back-to-team-button"
                        class="team-nav-button"
                        variant="tonal" 
                        rounded=6
                    >
                        See our whole team
                    </v-btn>
                </v-col>

                <v-spacer></v-spacer>

                <v-col>
                    <v-btn
                        class="team-nav-button"
                        variant="text"
                        :ripple="false"
                    >
                        Previous member:<br>{{ prevMember }}
                    </v-btn>
                </v-col>

                <v-col>
                    <v-btn
                        class="team-nav-button"
                        variant="text"
                        :ripple="false"
                    >
                        Next member:<br>{{ nextMember }}
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
    </NuxtLayout>
</template>

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