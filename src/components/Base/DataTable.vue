<template>
  <div>
    <v-card>
      <v-card-title>
        <v-row>
          <v-col cols="8">
            Title
          </v-col>
          <v-col cols="4" class="text-right">
            <v-btn color="secondary" to="/" v-if="actions.includes('create')">
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
                    @click="deleteItemModal(item.id)"
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
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Are you sure delete this item ?</span>
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn color="blue darken-1" text @click="close">
            No
          </v-btn>
          <v-btn color="blue darken-1" text @click="deleteItem">
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
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
      dialog: false,
      deletedItemId: null,
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
  methods: {
    deleteItemModal(id) {
      this.dialog = true;
      this.deletedItemId = id;
    },
    close() {
      this.dialog = false;
      this.deletedItemId = null;
    },
    deleteItem() {
      this.$emit('delete', this.deletedItemId);
      this.close();
    },
  },
};
</script>
<style lang="scss" scoped>
.theme--light.v-data-table thead tr th {
  white-space: nowrap;
}
@media screen and (max-width: 768px) {
  table {
    tr {
      max-width: 100%;
      position: relative;
      display: block;
      border-bottom: 1px solid #cac3c3;
      td {
        justify-content: space-between;
        display: flex;
        width: 100%;
        border-bottom: none !important;
        height: auto;
        padding: 10px;
        color: rgba(0, 0, 0, 0.6);
        &:before {
          content: attr(data-label);
          padding-right: 0.5em;
          text-align: left;
          display: block;
          color: rgb(0, 0, 0);
        }
      }
    }
  }
  .v-datatable__actions__select {
    width: 50%;
    margin: 0px;
    justify-content: flex-start;
  }
  .theme--light.v-table tbody tr:hover:not(.v-datatable__expand-row) {
    background: transparent;
  }
}
</style>
