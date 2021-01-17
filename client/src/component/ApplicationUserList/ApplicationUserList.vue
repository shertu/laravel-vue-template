<template>
  <div id="cheese">
    {{ message }}
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      message: 'Hello World',
    };
  },
};

// import Vue from "vue";
// import { ApplicationUser, ApplicationUserApi } from "../../openapi-generator";

// const APPLICATION_USER_API = new ApplicationUserApi();

// export default class ApplicationUserList extends Vue {
//   items: ApplicationUser[] = [];

//   mounted() {
//     APPLICATION_USER_API.apiApplicationUsersGet().then(
//       (response: ApplicationUser[]) => (this.items = response)
//     );
//   }
// }
</script>
