<template>
  <div id="cheese">
    {{ items }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { ApplicationUser, ApplicationUserApi } from "../../openapi-generator";

const APPLICATION_USER_API = new ApplicationUserApi();

export default class ApplicationUserList extends Vue {
  items: ApplicationUser[] = [];

  mounted() {
    APPLICATION_USER_API.apiApplicationUsersGet().then(
      (response: ApplicationUser[]) => (this.items = response)
    );
  }
}
</script>
