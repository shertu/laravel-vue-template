<template>
  <a-layout id="app-layout">
    <a-layout-content>
      <section id="content-viewport">
        <ApplicationUserList />
      </section>
    </a-layout-content>
    <a-layout-footer>
      <a-space>
        <a-button type="link">Privacy Policy</a-button>
      </a-space>
    </a-layout-footer>
  </a-layout>
</template>

<script lang="ts">
import ApplicationUserList from '../ApplicationUserList/ApplicationUserList.vue';

export default {
  components: {
    ApplicationUserList,
  },
};
</script>

<style>
#app-layout {
  min-height: 100vh;
}

main {
  padding-left: 8px;
  padding-right: 8px;
}

#content-viewport {
  margin-left: auto;
  margin-right: auto;
  padding-top: 2.54cm;
  max-width: 1200px;
}
</style>
