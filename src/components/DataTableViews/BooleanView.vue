<template>
  <div>
    <v-icon v-if="data" color="green">
      mdi-check
    </v-icon>
    <v-icon v-else color="red">
      mdi-close-circle-outline
    </v-icon>
  </div>
</template>
<script>
export default {
  props: {
    data: Boolean,
  },
};
</script>
