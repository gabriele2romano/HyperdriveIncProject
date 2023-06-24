<!--This is the page containing information about a single member of the VC's team-->

<script setup>
    const route = useRoute()
    const id = route.params.id
    const { data: person } = await useFetch('/api/people/'+id)

    const prevMemberRoute = "/people/" + person.value.prevMemberId
    const nextMemberRoute = "/people/" + person.value.nextMemberId

    const { data: prevMemberName } = await useFetch('/api/people/getName/'+person.value.prevMemberId)
    const { data: nextMemberName } = await useFetch('/api/people/getName/'+person.value.nextMemberId)
</script>

<template>
    <div class="bg-mega-grey d-flex justify-center align-center">
        <!--Container for the page content-->
        <v-container class="font-weight-bold my-auto" style="max-width: 1200px;">
            <!--First row: team navigation buttons under the header-->
            <v-row justify="center" class="my-4">
                <v-col cols="12" md="2" class="d-flex justify-center">
                    <NuxtLink to="/people" style="text-decoration: none;">
                    <v-btn class="text-light text-body-1 bg-dark-blue" variant="tonal" rounded=6>
                        See our whole team
                    </v-btn>
                    </NuxtLink>
                </v-col>

                <v-col cols="12" md="2" class="d-flex justify-center ml-md-auto">
                    <NuxtLink :to=prevMemberRoute style="text-decoration: none;">
                    <v-btn class="text-darker-blue text-body-1" variant="text">
                        <v-icon icon="mdi-arrow-left"></v-icon>
                        Previous member:<br>{{ prevMemberName.name }} {{ prevMemberName.surname }}
                    </v-btn>
                    </NuxtLink>
                </v-col>

                <v-col cols="12" md="2" class="d-flex justify-center">
                    <NuxtLink :to=nextMemberRoute style="text-decoration: none;">
                    <v-btn class="text-darker-blue text-body-1" variant="text">
                        Next member:<br>{{ nextMemberName.name }} {{ nextMemberName.surname }}
                        <v-icon icon="mdi-arrow-right"></v-icon>
                    </v-btn>
                    </NuxtLink>
                </v-col>
            </v-row>

            <!--Second row: person card-->
            <v-row justify="center" class="my-4">
                <v-sheet class="bg-darker-blue"> 
                    <v-container>
                        <v-row>
                            <v-col cols="12" md="3">
                                <v-img 
                                    :src=person.picture
                                    height="100%"
                                    cover
                                ></v-img>
                            </v-col>

                            <v-col cols="12" md="9">
                                <div class="d-flex flex-column flex-md-row justify-space-between">
                                    <div class="d-flex flex-column">
                                        <div class="text-h3">{{ person.name }} {{ person.surname }}</div>
                                        <div class="text-h4">{{ person.role }}</div>
                                    </div>

                                    <div class="d-flex flex-column">
                                        <div class="text-subtitle-1 py-1">
                                            <v-icon icon="mdi-phone"></v-icon>
                                            {{ person.phone }}
                                        </div>
                                        <div class="text-subtitle-1 py-1">
                                            <v-icon icon="mdi-email"></v-icon>
                                            {{ person.email }}
                                        </div>
                                    </div>
                                </div>

                                <p class="text-body-2 pt-3">
                                    {{ person.cv }}
                                </p>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-sheet>
            </v-row>

            <!--Third row: divider and supervised projects title-->
            <v-row justify="center" class="my-4">
                <v-col cols="12">
                    <v-divider :thickness="3" color="light" class="border-opacity-100"></v-divider>

                    <div class="text-h4 text-center text-light">
                        Discover the projects supervised by {{ person.name }}
                    </div>
                </v-col>
            </v-row>

            <!--Fourth row: supervised projects cards-->
            <v-row justify="center" class="my-4">
                <v-col v-for="n in 3">
                    <ProjectCard title="Coso" ></ProjectCard>
                </v-col>
            </v-row>
        </v-container>
    </div>
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