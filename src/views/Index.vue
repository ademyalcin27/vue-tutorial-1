<template>
  <Layout>
    <router-view :key="$router.path" />
  </Layout>
</template>

<script>
export default {
  components: {
    Layout: () => import('@/layout/default.vue'),
  },
};
</script>
