<template>
  <v-app>
    <Header />
    <v-content>
      <v-container class="v-responsive overflow-visible" fluid>
        <div class="v-responsive__content">
          <slot></slot>
        </div>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
export default {
  components: {
    Header: () => import('@/components/Common/Header.vue'),
  },
};
</script>
