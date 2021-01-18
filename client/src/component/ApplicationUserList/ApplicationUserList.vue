<template>
  <div>
    <a-alert
      v-if="err"
      message="ApplicationUserList error"
      description="an error occurred while requesting data from the server"
      type="error"
      show-icon
      closable
    />
    <a-list item-layout="horizontal" :data-source="items">
      <a-list-item slot="renderItem" slot-scope="item">
        <a-list-item-meta
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        >
          <div slot="title">{{ item.name }}</div>
          <a-avatar slot="avatar" v-bind:src="item.avatarUrl" />
        </a-list-item-meta>
      </a-list-item>
    </a-list>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { ApplicationUser, ApplicationUserApi } from "../../openapi-generator";

const APPLICATION_USER_API = new ApplicationUserApi();

export default Vue.extend({
  data() {
    return {
      items: [] as ApplicationUser[],
      err: false as boolean
    };
  },

  mounted(): void {
    // The mounted hook returns nothing
    APPLICATION_USER_API.apiApplicationUsersGet()
      .then((response: ApplicationUser[]) => (this.items = response))
      .catch((err: Response) => (this.err = true));
  }
});
</script>
