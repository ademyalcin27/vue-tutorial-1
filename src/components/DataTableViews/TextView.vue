<template>
  <div>
    {{ data }}
  </div>
</template>
<script>
export default {
  name: 'TextView',
  props: {
    data: [String, Number],
  },
};
</script>
