<template>
  <div>
    <DataTable
      :data-headers="headers"
      :data="data"
      :title="`${$tc(`models.Promotion.translation`)} ${$t('common.listing')}`"
      :actions="actions"
      url="promotions"
      @delete="deleteItem"
    />
  </div>
</template>

<script>
import { translateModelProperty } from '@/utils/helper';
import Promotion from '@/api/Promotion';

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
      return Promotion.operations;
    },
    headers() {
      return Promotion.getListFields().map(({ name, relatedModel, ...rest }) => ({
        ...rest,
        text: relatedModel
          ? this.$tc(`models.${relatedModel.name}.translation`)
          : translateModelProperty(Promotion.name, name),
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
    const results = await Promotion.getAll();
    this.data = await Promise.all(results.map((item) => item.getData().catch(() => undefined)));
  },
};
</script>
