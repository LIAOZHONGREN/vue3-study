<template>
  <div>{{ currectValue }}</div>
  <button @click="count('+')">+</button>
  <button @click="count('-')">-</button>
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Ref",
  setup() {
    const currectValue = ref(0);
    const count = (type: string) => {
      type === "+" ? (currectValue.value += 1) : (currectValue.value -= 1);
    };
    return { currectValue, count };
  },
});
</script>

<style lang="css">
</style>