<!--Work with us page. Includes a form to be used by companies to send project proposals to the VC in order to get funding-->

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

    //reactive objects with fields for user input
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

    const status = ref('')

    //check for the correct number of areas
    const areaCheck = computed(() => {
        return project_info.selected_areas.length > 0 && project_info.selected_areas.length <= 3
    })

    async function onSubmit(event) {
        event.preventDefault()

        //send fields to the server and check for correctness
        const res = await $fetch('/api/form', {
                    method: "POST",
                    body: {
                        company: company_info,
                        project: project_info
                    }
                })

        status.value = res
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

        status.value = ''

        window.scrollTo(0, 0)
    }

    useSeoMeta({
        title: "MEGA - Work with us",
        description: "Form to be used by companies to send their project proposals to MEGA Group, in order to be financed.",
    })

</script>

<template>
    <Banner :banner_img="banner_img" :banner_title="banner_title" :banner_subtitle="banner_subtitle"
        banner_link="Go to contact info" banner_path="/contacts/">
    </Banner>

    <div class="bg-mega-grey">
        <v-container>
            <v-row justify="center">
                <v-col cols="12" md="9">
                    <div class="bg-dark-blue pa-8 font-weight-bold text-light card-bordered">
                        <!--Contact form-->
                        <b-form @submit="onSubmit" :validated="true">
                            <!--Name, required-->
                            <b-form-group label="Full Name *" label-for="input-name" class="pb-5">
                                <b-form-input id="input-name" v-model="company_info.sender_name" placeholder="Your full name"
                                    required>
                                </b-form-input>

                                <b-form-invalid-feedback>
                                    This field is required.
                                </b-form-invalid-feedback>
                            </b-form-group>

                            <!--Company name, required-->
                            <b-form-group label="Company Name *" label-for="input-company-name" class="pb-5">
                                <b-form-input id="input-company-name" v-model="company_info.company_name"
                                    placeholder="Company name" required>
                                </b-form-input>

                                <b-form-invalid-feedback>
                                    This field is required.
                                </b-form-invalid-feedback>
                            </b-form-group>

                            <!--Email, required, has format validation-->
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

                            <!--Phone, optional, has format validation-->
                            <b-form-group label="Phone Number" label-for="input-phone" class="pb-5">
                                <b-form-input id="input-phone" v-model="company_info.phone"
                                    placeholder="Your number or a company reference one (optional)" type="tel"
                                    pattern="[0-9]+">
                                </b-form-input>

                                <b-form-invalid-feedback>
                                    The number must only contain digits.
                                </b-form-invalid-feedback>
                            </b-form-group>

                            <!--Divider and section title-->
                            <v-divider :thickness="4" color="light" class="border-opacity-100"></v-divider>

                            <div class="text-h6 mb-4 text-center font-weight-bold">Project Info</div>

                            <!--Project title, required-->
                            <b-form-group label="Project Title *" label-for="input-title" class="pb-5">
                                <b-form-input id="input-title" v-model="project_info.title" placeholder="Project title"
                                    required>
                                </b-form-input>

                                <b-form-invalid-feedback>
                                    This field is required.
                                </b-form-invalid-feedback>
                            </b-form-group>

                            <!--Project description, required-->
                            <b-form-group label="Detailed Description of the Project *" label-for="input-description"
                                class="pb-5">
                                <b-form-textarea id="input-description" v-model="project_info.description"
                                    placeholder="Provide an overview of your project" required rows="5" max-rows="15">
                                </b-form-textarea>

                                <b-form-invalid-feedback>
                                    This field is required.
                                </b-form-invalid-feedback>
                            </b-form-group>

                            <!--Project areas, required, has validation on the number of selected options-->
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

                            <!--Revenue, optional, and budget, required. Both have format validation-->
                            <b-form-group class="pb-5" label="Last Year's Revenue of the Project" label-for="input-revenue">
                                <b-form-input id="input-revenue" v-model="project_info.revenue" placeholder="0 EUR (optional)"
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

                            <!--Social impact, optional-->
                            <b-form-group label="Social Impact" label-for="input-impact" class="pb-5">
                                <b-form-textarea id="input-impact" v-model="project_info.impact"
                                    placeholder="Describe how your project is going to make an impact (optional)" rows="3"
                                    max-rows="15">
                                </b-form-textarea>
                            </b-form-group>

                            <!--Submit button-->
                            <v-row class="justify-center mt-5">
                                <v-col cols="6">
                                    <v-btn type="submit" block class="text-light bg-darker-blue font-weight-bold">Submit </v-btn>
                                </v-col>
                            </v-row>
                        </b-form>
                    </div>
                </v-col>
            </v-row>

            <!--Dynamic success/failure message, only displays on validated form submit-->
            <v-row justify="center" v-if="status !== ''">
                <v-col cols="8" md="6">
                    <v-divider  cols="10" color="light" thickness="7" class="d-flex border-opacity-100 justify-center "></v-divider>
                </v-col>

                <v-col cols="12" md="9">
                    <!--success message-->
                    <v-sheet v-if="status === 'valid'" class="bg-dark-blue  pa-3 text-light font-weight-bold d-flex flex-column align-center card-bordered">
                        <v-icon icon="mdi-check" size="50" class="pt-3"></v-icon>
                        <div class="text-h5 text-center">Thank you, your proposal has been sent.<br>We'll contact you back soon.</div>

                        <!--Reset button to clear fields and restart the form-->
                        <div class="text-h6 text-center pt-10">Would you like to send another proposal?</div>
                        <v-btn v-on:click="onReset" class="bg-darker-blue my-3" size="large">Reset form</v-btn>
                    </v-sheet>

                    <!--failure message-->
                    <v-sheet v-if="status === 'invalid'" class="bg-dark-blue  pa-3 text-light font-weight-bold d-flex flex-column align-center card-bordered">
                        <v-icon icon="mdi-close" size="50" class="pt-3"></v-icon>
                        <div class="text-h5 text-center">Sorry, something went wrong with your request.<br>Try again later.</div>

                        <!--Reset button to clear fields and restart the form-->
                        <div class="text-h6 text-center pt-10">Would you like to reset the form?</div>
                        <v-btn v-on:click="onReset" class="bg-darker-blue my-3" size="large">Reset form</v-btn>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>