<script setup>
    const valid = ref(false);
    const rules = ref({
        required: [value => emptyInputCheck(value, 'This field is required')],
    })

    const emptyInputCheck = function(value, errorMsg) {
        if(value) return true;

        return errorMsg;
    };

    const companyInfo = ref({
        name: '',
        companyName: '',
        email: '',
        phoneNumber: '',
    });
    
    const projectInfo = ref({
        title: '',
        description: '',
        selectedAreaNames: [],
        revenue: '',
        budget: '',
        impact: '',
    });

    //these should probably be retrieved from the DB
    const areaNames = ref(['Healthcare', 'Sustainability', 'Finance', 'Robotics', 'Agriculture', 'Space Exploration']);
</script>

<template>
    <v-form v-model="valid">
        <v-container class="bg-dark-blue text-weight-bold">
            <!--Input field for name-->
            <v-row>
                <v-col
                    cols="12"
                    md="4"
                >
                    <div class="text-h6 mb-2">Full Name</div>
                    <v-text-field
                        v-model="companyInfo.name"
                        :rules="rules.required"
                        label="Full Name"
                        required
                        bg-color="light"
                    ></v-text-field>
                </v-col>
            </v-row>

            <!--Input field for company name-->
            <v-row>
                <v-col
                    cols="12"
                    md="4"
                >
                    <div class="text-h6 mb-2">Company Name</div>
                    <v-text-field
                        v-model="companyInfo.companyName"
                        :rules="rules.required"
                        label="Company Name"
                        required
                        bg-color="light"
                    ></v-text-field>
                </v-col>
            </v-row>

            <!--Input field for email-->
            <v-row>
                <v-col
                    cols="12"
                    md="4"
                >
                    <div class="text-h6 mb-2">Email</div>
                    <v-text-field
                        v-model="companyInfo.email"
                        :rules="rules.required"
                        label="Email"
                        required
                        bg-color="light"
                    ></v-text-field>
                </v-col>
            </v-row>

            <!--Input field for phone number-->
            <v-row>
                <v-col
                    cols="12"
                    md="4"
                >
                    <div class="text-h6 mb-2">Phone Number</div>
                    <v-text-field
                        v-model="companyInfo.phoneNumber"
                        :rules="rules.required"
                        label="Phone Number"
                        required
                        bg-color="light"
                    ></v-text-field>
                </v-col>
            </v-row>
            
            <v-divider :thickness="4" color="light" class="border-opacity-100"></v-divider>

            <div class="text-h5 mb-4">Project Info</div>

            <!--Input field for project title-->
            <v-row>
                <v-col
                    cols="12"
                    md="4"
                >
                    <div class="text-h6 mb-2">Project Title</div>
                    <v-text-field
                        v-model="projectInfo.title"
                        :rules="rules.required"
                        label="Project Title"
                        required
                        bg-color="light"
                    ></v-text-field>
                </v-col>
            </v-row>

            <!--Textarea field for project description-->
            <v-row>
                <v-col
                    cols="12"
                    md="4"
                >
                    <div class="text-h6 mb-2">Detailed description of the Project</div>
                    <v-textarea
                        v-model="projectInfo.description"
                        :rules="rules.required"
                        label="Provide an overview of your project"
                        required
                        auto-grow
                        bg-color="light"
                    ></v-textarea>
                </v-col>
            </v-row>

            <!--Checkboxes for area selection-->
            <v-row>
                <v-col
                    cols="12"
                    md="4"
                >
                    <div class="text-h6 mb-2">Project Areas (at most 3)</div>

                    <v-row>
                        <div v-for="area in areaNames">
                            <v-checkbox :label=area :value=area v-model="projectInfo.selectedAreaNames"></v-checkbox>
                        </div>
                    </v-row>

                    <p>{{ projectInfo.selectedAreaNames }}</p>
                </v-col>
            </v-row>

            <!--Input fields for monetary information-->
            <v-row>
                <v-col
                    cols="12"
                    md="4"
                >
                    <div class="text-h6 mb-2">Last Year's Revenues of the project</div>
                    <v-text-field
                        v-model="projectInfo.revenue"
                        :rules="rules.required"
                        required
                        bg-color="light"
                        placeholder="0"
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="12"
                    md="4"
                >
                    <div class="text-h6 mb-2">Desired Budget</div>
                    <v-text-field
                        v-model="projectInfo.budget"
                        :rules="rules.required"
                        required
                        bg-color="light"
                        placeholder="0"
                    ></v-text-field>
                </v-col>
            </v-row>

            <!--Textarea field for social impact description-->
            <v-row>
                <v-col
                    cols="12"
                    md="4"
                >
                    <div class="text-h6 mb-2">Social Impact</div>
                    <v-textarea
                        v-model="projectInfo.impact"
                        :rules="rules.required"
                        label="Describe how your project is going to make an impact"
                        required
                        auto-grow
                        bg-color="light"
                    ></v-textarea>
                </v-col>
            </v-row>

            <v-btn>Submit</v-btn>
        </v-container>
    </v-form>
</template>