<template>
    <div>
        <!--b-alert show variant="primary"><a href="#" class="alert-link">Primary Alert</a></b-alert-->
        <b-alert :model-value="true">Default Alert</b-alert>
        <!--b-alert
      :show="dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>
      <b-progress
        variant="warning"
        :max="dismissSecs"
        :value="dismissCountDown"
        height="4px"
      ></b-progress>
    </b-alert>
    <b-button @click="showAlert" variant="info" class="m-1">
      Show alert with count-down timer
    </b-button>
    </div-->
    
  <div class="m-5">
    <b-button variant="success">Success</b-button>
    <b-button variant="danger">Danger</b-button>
    <b-button variant="warning">Warning</b-button>

  </div>
  <div>
    <b-card>Hi</b-card>
  </div>

  <b-accordion class="col-3">
        <b-accordion-item title="Accordion Item #1" visible>
          Accordion 1
        </b-accordion-item>
        <b-accordion-item title="Accordion Item #2">
          Accordion 2
        </b-accordion-item>
        <b-accordion-item title="Accordion Item #3">
          Accordion 3
        </b-accordion-item>
      </b-accordion>
</div>
</template>
<script setup lang="ts">
const show = ref(false)
/* export default {
     data() {
      return {
        dismissSecs: 10,
        dismissCountDown: 0,
        showDismissibleAlert: false
      }
    },
    methods: {
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert() {
        this.dismissCountDown = this.dismissSecs
      }
    }
  } */


</script>