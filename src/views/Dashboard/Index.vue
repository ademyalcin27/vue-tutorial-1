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
import translateModelProperty from '@/utils/helper';
import Campaign from '@/api/Campaign';

export default {
  components: {
    DataTable: () => import('@/components/Base/DataTable.vue'),
  },
  data() {
    return {
      data: [],
      actions: ['details', 'update', 'delete'],
    };
  },
  computed: {
    headers() {
      return Campaign.fields.map(({ name, ...rest }) => ({
        ...rest,
        text: translateModelProperty(Campaign.name, name),
        value: name,
      }));
    },
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
