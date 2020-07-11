<template>
  <div>
    {{ data }}
  </div>
</template>
<script>
export default {
  name: 'NumberView',
  props: {
    data: [String, Number],
  },
};
</script>
