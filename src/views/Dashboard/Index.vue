<template>
  <div>
    <DataTable :data-headers="headers" :data="data" :actions="actions" url="campaign" />
  </div>
</template>

<script>
export default {
  components: {
    DataTable: () => import('@/components/Base/DataTable.vue'),
  },
  data() {
    return {
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
      actions: ['details', 'update', 'delete'],
    };
  },
};
</script>
