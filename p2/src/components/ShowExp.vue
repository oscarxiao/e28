<template>
  <div>
    <div>{{exp.name}}</div>
    <p>{{exp.description}}</p>
    <div>{{exp.peptideA}}</div>
    <div>{{exp.peptideB}}</div>
  </div>
</template>

<script>
export default {
  props: ["exp"],
  data: function() {
    return {};
  }
};
</script>

<style>
</style>