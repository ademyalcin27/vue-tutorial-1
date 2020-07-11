<template>
  <div>
    <v-img :src="data" height="150" width="150" v-if="data"/>
    <span v-else>---</span>
  </div>
</template>

<script>
export default {
  name: 'ImageView',
  props: {
    data: String,
  },
};
</script>

<style>

</style>
