<template>
  <div>
    <div>{{ exp.name }}</div>
    <p>{{ exp.description }}</p>
    <div>{{ exp.pepA }}</div>
    <div>{{ exp.pepB }}</div>
    <div>{{ exp.pepC }}</div>
    <div>{{ exp.pepD }}</div>
    <div>{{ exp.pepZero1 }}</div>
    <div>{{ exp.pepZero2 }}</div>
    <div>{{ exp.pop1ug }}</div>
    <div>{{ exp.pairSeq }}</div>
  </div>
</template>

<script>
export default {
  props: ["exp"],
  data: function() {
    return {};
  },
};
</script>

<style></style>
