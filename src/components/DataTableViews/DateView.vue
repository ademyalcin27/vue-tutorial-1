<template>
  <div>
    {{ data | dateFormat1 }}
  </div>
</template>
<script>
export default {
  name: 'DateView',
  props: {
    data: [String, Number],
  },
};
</script>
