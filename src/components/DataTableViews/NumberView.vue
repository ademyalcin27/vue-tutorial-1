<template>
  <div>
    {{ data }}
  </div>
</template>
<script>
export default {
  props: {
    data: [String, Number],
  },
};
</script>
