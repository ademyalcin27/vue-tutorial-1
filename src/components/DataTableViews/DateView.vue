<template>
  <div>
    {{ data | dateFormat1 }}
  </div>
</template>
<script>
export default {
  props: {
    data: [String, Number],
  },
};
</script>
