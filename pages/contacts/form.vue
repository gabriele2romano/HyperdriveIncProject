<script setup>

    const{data:banner_img} = await useFetch('/api/images/banner_contact.jpg')
    const banner_title = "Work with us"
    const banner_subtitle = "Send us your project proposal by filling the form below. We'll contact you back as soon as possible."

    const companyInfo = ref({
        senderName: '',
        companyName: '',
        email: '',
        phone: '',
    })

    const projectInfo = ref({
        title: '',
        description: '',
        areas: [
            {text: 'Healthcare', value: '1'},
            {text: 'Sustainability', value: '2'},
            {text: 'Finance', value: '3'},
            {text: 'Robotics', value: '4'},
            {text: 'Agriculture', value: '5'},
            {text: 'Space Exploration', value: '6'},
        ],
        selectedAreas: [],
        revenue: '',
        budget: '',
        impact: '',
    })

    var validate = ref(false)

    function onSubmit(event) {
        event.preventDefault()
        validate.value = true
    }

</script>

<template>
    <Banner :banner_img="banner_img" :banner_title="banner_title" :banner_subtitle="banner_subtitle"></Banner>
    
    <div class="bg-mega-grey">
        <v-container>
            <v-row justify="center">
                <v-col cols="12" md="6">
                    <div class="bg-dark-blue pa-8 font-weight-bold text-light">
                        <!--Contact form-->
                        <b-form @submit="onSubmit" :validated="validate">
                            <!--Name-->
                            <b-form-group
                                label="Full Name *"
                                label-for="input-name"
                                class="pb-5"
                            >
                                <b-form-input
                                    id="input-name"
                                    v-model="companyInfo.senderName"
                                    placeholder="Your full name"
                                    required
                                >
                                </b-form-input>
                            </b-form-group>

                            <!--Company name-->
                            <b-form-group
                                label="Company Name *"
                                label-for="input-company-name"
                                class="pb-5"
                            >
                                <b-form-input
                                    id="input-company-name"
                                    v-model="companyInfo.companyName"
                                    placeholder="Company name"
                                    required
                                >
                                </b-form-input>
                            </b-form-group>
                            
                            <!--Email-->
                            <b-form-group
                                label="Email *"
                                label-for="input-email"
                                class="pb-5"
                            >
                                <b-form-input
                                    id="input-email"
                                    v-model="companyInfo.email"
                                    placeholder="Your email or a company reference email"
                                    type="email"
                                    required
                                >
                                </b-form-input>
                            </b-form-group>

                            <!--Phone-->
                            <b-form-group
                                label="Phone Number"
                                label-for="input-phone"
                                class="pb-5"
                            >
                                <b-form-input
                                    id="input-phone"
                                    v-model="companyInfo.phone"
                                    placeholder="Your number or a company reference one"
                                    type="tel"
                                >
                                </b-form-input>
                            </b-form-group>

                            <!--Divider-->
                            <v-divider :thickness="4" color="light" class="border-opacity-100"></v-divider>

                            <div class="text-h6 mb-4 text-center font-weight-bold">Project Info</div>

                            <!--Project title-->
                            <b-form-group
                                label="Project Title *"
                                label-for="input-title"
                                class="pb-5"
                            >
                                <b-form-input
                                    id="input-title"
                                    v-model="projectInfo.title"
                                    placeholder="Project title"
                                    required
                                >
                                </b-form-input>
                            </b-form-group>

                            <!--Project description-->
                            <b-form-group
                                label="Detailed Description of the Project *"
                                label-for="input-description"
                                class="pb-5"
                            >
                                <b-form-textarea
                                    id="input-description"
                                    v-model="projectInfo.description"
                                    placeholder="Provide an overview of your project"
                                    required
                                    rows="5"
                                    max-rows="15"
                                >
                                </b-form-textarea>
                            </b-form-group>

                            <!--Project areas-->
                            <b-form-group
                                label="Project Areas (at most 3) *"
                                label-for="input-areas"
                                v-slot="{ ariaDescribedBy }"
                                class="pb-5"
                            >
                                <b-form-checkbox-group
                                    id="input-areas"
                                    v-model="projectInfo.selectedAreas"
                                    :options="projectInfo.areas"
                                    :aria-describedby="ariaDescribedby"
                                >
                                </b-form-checkbox-group>

                                <div>Selected: <strong>{{ projectInfo.selectedAreas }}</strong></div>
                            </b-form-group>

                            <!--Revenue and budget-->
                            <b-form-group class="pb-5">
                                <div class="pb-5">
                                    <label for="input-revenue" class="pb-2">Last Year's Revenue of the Project</label>
                                    <b-form-input
                                        id="input-revenue"
                                        v-model="projectInfo.revenue"
                                        placeholder="0"
                                    >
                                    </b-form-input>
                                </div>
                                
                                <div>
                                    <label for="input-budget" class="pb-2">Desired Budget *</label>
                                    <b-form-input
                                        id="input-budget"
                                        v-model="projectInfo.budget"
                                        placeholder="0"
                                        required
                                    >
                                    </b-form-input>
                                </div>
                            </b-form-group>

                            <!--Social impact-->
                            <b-form-group
                                label="Social Impact"
                                label-for="input-impact"
                                class="pb-5"
                            >
                                <b-form-textarea
                                    id="input-impact"
                                    v-model="projectInfo.impact"
                                    placeholder="Describe how your project is going to make an impact"
                                    rows="3"
                                    max-rows="15"
                                >
                                </b-form-textarea>
                            </b-form-group>

                            <!--Submit button-->
                            <div class="d-flex justify-center pt-10">
                                <b-button type="submit" class="text-light text-h5 bg-darker-blue font-weight-bold border-transparent" size="lg">
                                    Submit
                                </b-button>
                            </div>
                        </b-form>
                    </div>
                </v-col>
            </v-row>
        </v-container> 
    </div>
</template>