<template>
  <ValidationObserver ref="observer">
    <form  @submit.prevent="onSubmit" novalidate>
      <v-card class="mb-10">
        <v-card-title>
          {{ `${$tc(`models.${name}.translation`)} ${$t('common.buttons.add')}` }}
        </v-card-title>
        <v-card-text>
          <ValidationProvider v-slot="{ errors }" name="Name" rules="required|max:10">
            <v-text-field v-model="data.name" label="Name" :error-messages="errors"/>
          </ValidationProvider>
          <v-text-field v-model="data.promotionId" label="Promotion ID" />
          <v-text-field v-model="data.slug" label="Slug" />
          <v-text-field v-model="data.description" label="description" />
          <v-text-field v-model="data.image" label="image" />
          <v-text-field v-model="data.startDate" label="startDate" />
          <v-text-field v-model="data.endDate" label="endDate" />
        </v-card-text>
        <button type="submit">Submit</button>
      </v-card>
    </form>
  </ValidationObserver>
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
    onSubmit() {
      this.$refs.observer.validate();
    },
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
