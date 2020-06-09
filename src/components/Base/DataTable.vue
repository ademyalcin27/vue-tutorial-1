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
            <td
              v-for="{ text, type, value } in headers"
              :key="value"
              :data-label="text"
            >
              <TextView :data="item[value]" v-if="type==='text'" />
              <NumberView :data="item[value]" v-if="type==='number'" />
              <BooleanView :data="item[value]" v-if="type==='boolean'" />
              <DateView :data="item[value]" v-if="type==='date'" />
            </td>
          </tr>
        </tbody>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  components: {
    TextView: () => import('@/components/DataTableViews/TextView.vue'),
    NumberView: () => import('@/components/DataTableViews/NumberView.vue'),
    BooleanView: () => import('@/components/DataTableViews/BooleanView.vue'),
    DateView: () => import('@/components/DataTableViews/DateView.vue'),
  },
  data() {
    return {
      search: null,
      headers: [
        { type: 'text', text: 'ID', value: 'id' },
        { type: 'number', text: 'Promotion', value: 'promotionId' },
        { type: 'text', text: 'Name', value: 'name' },
        { type: 'text', text: 'Slug', value: 'slug' },
        { type: 'text', text: 'Description', value: 'description' },
        { type: 'date', text: 'Start Date', value: 'startDate' },
      ],
      data: [
        {
          id: '1',
          promotionId: 1,
          name: 'name 1',
          slug: 'slug 1',
          description: 'description 1',
          image: 'image 1',
          startDate: 1591050772,
          endDate: 1591050772,
        },
        {
          id: '2',
          promotionId: null,
          name: 'name 2',
          slug: 'slug 2',
          description: 'description 2',
          image: 'image 2',
          startDate: 1591050712,
          endDate: 1591050712,
        },
        {
          id: '3',
          promotionId: null,
          name: 'name 3',
          slug: 'slug 3',
          description: 'description 3',
          image: 'image 3',
          startDate: 1591050821,
          endDate: 1591050821,
        },
        {
          id: '4',
          promotionId: null,
          name: 'name 4',
          slug: 'slug 4',
          description: 'description 4',
          image: 'image 4',
          startDate: 1591050761,
          endDate: 1591050761,
        },
      ],
    };
  },
};
</script>
