<template>
  <v-card>
    <v-card-title>
      <v-row>
        <v-col cols="8">
          Title
        </v-col>
        <v-col cols="4" class="text-right">
          <v-btn color="secondary" to="/">
            Add
          </v-btn>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          />
        </v-col>
      </v-row>
    </v-card-title>
    <v-data-table :headers="headers" :items="data" :search="search">
      <template v-if="data.length" v-slot:body="{ items }">
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td v-for="{ text, type, value } in dataHeaders" :key="value" :data-label="text">
              <TextView :data="item[value]" v-if="type==='text'" />
              <NumberView :data="item[value]" v-if="type==='number'" />
              <BooleanView :data="item[value]" v-if="type==='boolean'" />
              <DateView :data="item[value]" v-if="type==='date'" />
            </td>
            <td data-label="actions" v-if="isVisibleActions" style="whiteSpace:nowrap">
              <div>
                <v-btn
                  v-if="actions.includes('details')"
                  :to="`${url}/${item.id}`"
                  fab
                  x-small
                  icon
                  color="secondary"
                >
                  <v-icon>mdi-eye</v-icon>
                </v-btn>
                <v-btn
                  v-if="actions.includes('update')"
                  :to="`${url}/${item.id}/edit`"
                  fab
                  x-small
                  icon
                  color="secondary"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn
                  v-if="actions.includes('delete')"
                  fab
                  x-small
                  icon
                  color="secondary"
                >
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </div>
            </td>
          </tr>
        </tbody>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  props: {
    dataHeaders: Array,
    data: Array,
    actions: Array,
    url: String,
  },
  components: {
    TextView: () => import('@/components/DataTableViews/TextView.vue'),
    NumberView: () => import('@/components/DataTableViews/NumberView.vue'),
    BooleanView: () => import('@/components/DataTableViews/BooleanView.vue'),
    DateView: () => import('@/components/DataTableViews/DateView.vue'),
  },
  data() {
    return {
      search: null,
      availabeActions: ['details', 'update', 'delete'],
    };
  },
  computed: {
    isVisibleActions() {
      return this.actions.some((item) => this.availabeActions.includes(item));
    },
    headers() {
      if (this.isVisibleActions) {
        return [...this.dataHeaders, { text: 'Actions', value: 'actions', sortable: false }];
      }
      return this.dataHeaders;
    },
  },
};
</script>
