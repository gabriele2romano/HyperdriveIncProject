<template>
    <v-footer
    class="bg-indigo-lighten-1 text-center d-flex flex-column"
    >
    <v-container>
        <v-row align-self="center" justify="space-between">
            <v-col cols="12" md="4" xs="12" align-self="center" >
                <div>
                    <v-img src="/img/logo.png" max-width="100" class="mx-auto"></v-img>
                </div>
            </v-col>
            
            <v-col cols="12" md="4" xs="12" align-self="center">
                <div>
                    <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    class="mx-4"
                    :icon="icon"
                    variant="text"
                    ></v-btn>
                </div>
                
                <div class="pt-0 mx-auto" >
                    via Leonardo 38 , Milano , 20123<br> Fax : 02383598429<br>Telefono : 3189893204<br>Mail : contact@megagroup.com
                </div>
            </v-col>
        </v-row>
    </v-container>
</v-footer>
</template>
<script>
export default {
    data: () => ({
        icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
        ],
    }),
}
</script>