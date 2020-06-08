<template>
  <div>
    <AppBar />
    <SideBar />
  </div>
</template>
<script>
export default {
  components: {
    AppBar: () => import('@/components/Common/AppBar.vue'),
    SideBar: () => import('@/components/Common/SideBar.vue'),
  },
};
</script>
