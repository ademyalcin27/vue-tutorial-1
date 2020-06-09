<template>
  <div>
    <DataTable />
  </div>
</template>

<script>
export default {
  components: {
    DataTable: () => import('@/components/Base/DataTable.vue'),
  },
};
</script>
