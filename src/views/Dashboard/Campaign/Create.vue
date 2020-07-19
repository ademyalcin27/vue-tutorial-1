<template>
  <form  @submit.prevent="onSubmit" novalidate>
    <v-card class="mb-10">
      <v-card-title>
        {{ `${$tc(`models.${name}.translation`)} ${$t('common.buttons.add')}` }}
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="data.name" label="Name" />
        <v-text-field v-model="data.promotionId" label="Promotion ID" />
        <v-text-field v-model="data.slug" label="Slug" />
        <v-text-field v-model="data.description" label="description" />
        <v-text-field v-model="data.image" label="image" />
        <v-text-field v-model="data.startDate" label="startDate" />
        <v-text-field v-model="data.endDate" label="endDate" />
      </v-card-text>
    </v-card>
  </form>
</template>

<script>
import Campaign from '@/api/Campaign';
import Promotion from '@/api/Promotion';
import { translateModelProperty } from '@/utils/helper';

export default {
  data: () => ({
    data: {},
    promotionList: [],
  }),
  methods: {
    translateModelProperty,
  },
  computed: {
    backURL() {
      return `${Campaign.route}`;
    },
    name() {
      return Campaign.name;
    },
  },
  mounted() {
    Promise.all([Promotion.getAll().catch(() => undefined)])
      .then(([promotionList]) => {
        this.promotionList = promotionList;
      });
  },
};
</script>

<style>

</style>
