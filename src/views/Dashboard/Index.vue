<template>
  <div>
    <DataTable
      :data-headers="headers"
      :data="data"
      :actions="actions"
      url="campaign"
      @delete="deleteItem"
    />
  </div>
</template>

<script>
import Campaign from '@/api/Campaign';

export default {
  components: {
    DataTable: () => import('@/components/Base/DataTable.vue'),
  },
  data() {
    return {
      headers: [
        { type: 'text', text: 'ID', value: 'id' },
        { type: 'number', text: 'Promotion', value: 'promotionId' },
        { type: 'text', text: 'Name', value: 'name' },
        { type: 'text', text: 'Slug', value: 'slug' },
        { type: 'text', text: 'Description', value: 'description' },
        { type: 'date', text: 'Start Date', value: 'startDate' },
      ],
      data: [],
      actions: ['details', 'update', 'delete'],
    };
  },
  methods: {
    deleteItem(deleteItemId) {
      this.data = this.data.filter(({ id }) => id !== deleteItemId);
    },
  },
  async created() {
    this.data = await Campaign.getAll();
  },
};
</script>
