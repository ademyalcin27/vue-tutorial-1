<template>
  <div>
    <DataTable
      :data-headers="headers"
      :data="data"
      :title="`${$tc(`models.Campaign.translation`)} ${$t('common.listing')}`"
      :actions="actions"
      url="campaign"
      @delete="deleteItem"
    />
  </div>
</template>

<script>
import { translateModelProperty } from '@/utils/helper';
import Campaign from '@/api/Campaign';

export default {
  components: {
    DataTable: () => import('@/components/Base/DataTable.vue'),
  },
  data() {
    return {
      data: [],
    };
  },
  computed: {
    actions() {
      return Campaign.operations;
    },
    headers() {
      return Campaign.getListFields().map(({ name, relatedModel, ...rest }) => ({
        ...rest,
        text: relatedModel
          ? this.$tc(`models.${relatedModel.name}.translation`)
          : translateModelProperty(Campaign.name, name),
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
    const results = await Campaign.getAll();
    this.data = await Promise.all(results.map((item) => item.getData().catch(() => undefined)));
  },
};
</script>
