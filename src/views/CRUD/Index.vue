<template>
  <div>
    <DataTable
      :data-headers="headers"
      :data="data"
      :title="`${$tc(`models.${model.name}.translation`)} ${$t('common.listing')}`"
      :actions="actions"
      :url="model.route"
      @delete="deleteItem"
    />
  </div>
</template>

<script>
import { translateModelProperty } from '@/utils/helper';

export default {
  props: {
    model: Function,
  },
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
      return this.model.operations;
    },
    headers() {
      return this.model.getListFields().map(({ name, relatedModel, ...rest }) => ({
        ...rest,
        text: relatedModel
          ? this.$tc(`models.${relatedModel.name}.translation`)
          : translateModelProperty(this.model.name, name),
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
    const results = await this.model.getAll();
    this.data = await Promise.all(results.map((item) => item.getData().catch(() => undefined)));
  },
};
</script>
