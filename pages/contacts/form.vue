<script setup>

//fetch the banner image
const { data: banner_img } = await useFetch('/api/images/banner_contact.jpg')
const banner_title = "Work with us"
const banner_subtitle = "Send us your project proposal by filling the form below. We'll contact you back as soon as possible."

//fetch the names of areas
const { data: area_data } = await useFetch('/api/areas/names')

let areas = ref([])
for (var area of area_data.value) {
    areas.value.push({ text: area.name, value: area.id })
}

const company_info = reactive({
    sender_name: '',
    company_name: '',
    email: '',
    phone: '',
})

const project_info = reactive({
    title: '',
    description: '',
    selected_areas: [],
    revenue: '',
    budget: '',
    impact: '',
})

const areaCheck = computed(() => {
    return project_info.selected_areas.length > 0 && project_info.selected_areas.length <= 3
})

function onSubmit(event) {
    event.preventDefault()
    sent.value = true
}

function onReset(event) {
    event.preventDefault()
    company_info.sender_name = ''
    company_info.company_name = ''
    company_info.email = ''
    company_info.phone = ''

    project_info.title = ''
    project_info.description = ''
    project_info.selected_areas = []
    project_info.revenue = ''
    project_info.budget = ''
    project_info.impact = ''

    sent.value = false

    window.scrollTo(0, 0)
}

const sent = ref(false)

function greet() {
    alert('Coso')
}

</script>

<template>
    <Banner :banner_img="banner_img" :banner_title="banner_title" :banner_subtitle="banner_subtitle"
        banner_link="Go to contact info" banner_path="/contacts/">
    </Banner>

    <div class="bg-mega-grey">
        <v-container>
            <v-row justify="center">
                <v-col cols="12" md="6">
                    <div class="bg-dark-blue pa-8 font-weight-bold text-light">
                        <!--Contact form-->
                        <b-form @submit="onSubmit" :validated="true">
                            <!--Name-->
                            <b-form-group label="Full Name *" label-for="input-name" class="pb-5">
                                <b-form-input id="input-name" v-model="company_info.sender_name" placeholder="Your full name"
                                    required>
                                </b-form-input>

                                <b-form-invalid-feedback>
                                    This field is required.
                                </b-form-invalid-feedback>
                            </b-form-group>

                            <!--Company name-->
                            <b-form-group label="Company Name *" label-for="input-company-name" class="pb-5">
                                <b-form-input id="input-company-name" v-model="company_info.company_name"
                                    placeholder="Company name" required>
                                </b-form-input>

                                <b-form-invalid-feedback>
                                    This field is required.
                                </b-form-invalid-feedback>
                            </b-form-group>

                            <!--Email-->
                            <b-form-group label="Email *" label-for="input-email" class="pb-5">
                                <b-form-input id="input-email" v-model="company_info.email"
                                    placeholder="Your email or a company reference email" required type="email">
                                </b-form-input>

                                <b-form-invalid-feedback v-if="company_info.email.length == 0">
                                    This field is required.
                                </b-form-invalid-feedback>
                                <b-form-invalid-feedback>
                                    This must be a valid email address.
                                </b-form-invalid-feedback>
                            </b-form-group>

                            <!--Phone-->
                            <b-form-group label="Phone Number" label-for="input-phone" class="pb-5">
                                <b-form-input id="input-phone" v-model="company_info.phone"
                                    placeholder="Your number or a company reference one" type="tel"
                                    pattern="[0-9]+">
                                </b-form-input>

                                <b-form-invalid-feedback>
                                    The number must only contain digits.
                                </b-form-invalid-feedback>
                            </b-form-group>

                            <!--Divider-->
                            <v-divider :thickness="4" color="light" class="border-opacity-100"></v-divider>

                            <div class="text-h6 mb-4 text-center font-weight-bold">Project Info</div>

                            <!--Project title-->
                            <b-form-group label="Project Title *" label-for="input-title" class="pb-5">
                                <b-form-input id="input-title" v-model="project_info.title" placeholder="Project title"
                                    required>
                                </b-form-input>

                                <b-form-invalid-feedback>
                                    This field is required.
                                </b-form-invalid-feedback>
                            </b-form-group>

                            <!--Project description-->
                            <b-form-group label="Detailed Description of the Project *" label-for="input-description"
                                class="pb-5">
                                <b-form-textarea id="input-description" v-model="project_info.description"
                                    placeholder="Provide an overview of your project" required rows="5" max-rows="15">
                                </b-form-textarea>

                                <b-form-invalid-feedback>
                                    This field is required.
                                </b-form-invalid-feedback>
                            </b-form-group>

                            <!--Project areas-->
                            <b-form-group label="Project Areas *" label-for="input-areas" class="pb-5">
                                <div class="bg-light pa-2 rounded-lg">
                                    <b-form-checkbox-group id="input-areas" v-model="project_info.selected_areas"
                                        :options="areas" aria-describedby="areas-help" name="project areas checkboxes" :state="areaCheck">
                                    </b-form-checkbox-group>
                                </div>
                                <b-form-text id="areas-help" text-variant="light">
                                    Select at least one, at most three of the areas above.
                                </b-form-text>


                                <b-form-invalid-feedback :state="areaCheck">
                                    Wrong number of areas selected.
                                </b-form-invalid-feedback>
                            </b-form-group>

                            <!--Revenue and budget-->
                            <b-form-group class="pb-5" label="Last Year's Revenue of the Project" label-for="input-revenue">
                                <b-form-input id="input-revenue" v-model="project_info.revenue" placeholder="0 EUR"
                                    name="revenue input field" aria-describedby="revenue-help" pattern="[1-9][0-9]*[ ][A-Z]+">
                                </b-form-input>

                                <b-form-text id="revenue-help" text-variant="light">
                                    Format: 1234 EUR
                                </b-form-text>

                                <b-form-invalid-feedback>
                                    Incorrect format.
                                </b-form-invalid-feedback>
                            </b-form-group>

                            <b-form-group class="pb-5" label="Desired Budget *" label-for="input-budget">                                
                                <b-form-input id="input-budget" v-model="project_info.budget" placeholder="0 EUR" required
                                    name="budget input field" aria-describedby="budget-help" pattern="[1-9][0-9]*[ ][A-Z]+">
                                </b-form-input>

                                <b-form-text id="budget-help" text-variant="light">
                                    Format: 1234 EUR
                                </b-form-text>

                                <b-form-invalid-feedback v-if="project_info.budget.length == 0">
                                    This field is required.
                                </b-form-invalid-feedback>
                                
                                <b-form-invalid-feedback>
                                    Incorrect format.
                                </b-form-invalid-feedback>
                            </b-form-group>

                            <!--Social impact-->
                            <b-form-group label="Social Impact" label-for="input-impact" class="pb-5">
                                <b-form-textarea id="input-impact" v-model="project_info.impact"
                                    placeholder="Describe how your project is going to make an impact" rows="3"
                                    max-rows="15">
                                </b-form-textarea>
                            </b-form-group>

                            <!--Submit button-->
                            <div class="d-flex justify-center pt-10">
                                <b-button type="submit"
                                    class="text-light text-h5 bg-darker-blue font-weight-bold border-transparent" size="lg">
                                    Submit
                                </b-button>
                            </div>
                        </b-form>
                    </div>
                </v-col>
            </v-row>

            <!--Dynamic success message-->
            <v-row justify="center" v-if="sent">
                <v-divider :thickness="3" color="light" class="border-opacity-100"></v-divider>

                <v-col cols="8">
                    <v-sheet class="rounded-lg bg-dark-blue ma-2 pa-3 text-light font-weight-bold d-flex flex-column align-center">
                        <v-icon icon="mdi-check" size="50" class="pt-3"></v-icon>
                        <div class="text-h5 text-center">Thank you, your proposal has been sent.<br>We'll contact you back soon.</div>

                        <div class="text-h6 text-center pt-10">Would you like to send another proposal?</div>
                        <v-btn v-on:click="onReset" class="bg-darker-blue my-3" size="large">Reset form</v-btn>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>