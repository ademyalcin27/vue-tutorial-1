<template>
  <div>
    <template v-if="!loading">
      <v-card>
        <v-card-title>
          <v-row>
            <v-col cols="8">
              {{ `${$tc(`models.${model.name}.translation`)} ${$t('common.details')}` }}
            </v-col>
            <v-col cols="4" class="text-right">
              <VBtn
                v-if="model.operations.includes('update')"
                :to="`${this.$route.path}/edit`"
                color="secondary"
                dark
                class="ml-2"
                icon
              >
                <VIcon>mdi-pencil</VIcon>
              </VBtn>
            </v-col>
          </v-row>
        </v-card-title>
        <v-card-text>
          <v-row
            v-for="{ name, type, relatedModel, ...rest } in fields"
            :key="name"
            class="item-row text-left align-center"
          >
            <v-col cols="4" xs="2" class="font-weight-bold">
              {{
                relatedModel
                  ? $tc(`models.${relatedModel.name}.translation`)
                  : translateModelProperty(model.name, name)
              }}
            </v-col>
            <v-col cols="8" xs="10">
              <component :is="`${makeUpperCase(type)}View`" v-bind="{ data: data[name], ...rest}"/>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </template>
    <v-overlay :value="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
import { firstLetterToUpperCase, translateModelProperty } from '@/utils/helper';

export default {
  props: {
    model: Function,
  },
  data() {
    return {
      loading: true,
    };
  },
  components: {
    TextView: () => import('@/components/DataTableViews/TextView.vue'),
    NumberView: () => import('@/components/DataTableViews/NumberView.vue'),
    BooleanView: () => import('@/components/DataTableViews/BooleanView.vue'),
    DateView: () => import('@/components/DataTableViews/DateView.vue'),
    ImageView: () => import('@/components/DataTableViews/ImageView.vue'),
  },
  methods: {
    makeUpperCase(val) {
      return firstLetterToUpperCase(val);
    },
    translateModelProperty(...args) {
      return translateModelProperty(...args);
    },
  },
  async mounted() {
    const resource = await this.model.getById(this.$route.params.id);
    this.data = await resource.getData();
    this.loading = false;
  },
  computed: {
    fields() {
      return this.model.getDetailsFields();
    },
  },
};
</script>

<style>

</style>
