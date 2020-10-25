<template>
  <div>{{ `当前选项:${data.currectOption}` }}</div>
  <div class="options">
    <div v-for="(v, i) in data.options" v-bind:key="i">
      <button @click="data.selecting(i)">{{ v }}</button>
    </div>
  </div>
</template>

<script lang='ts'>
import { reactive } from "vue";

interface DataProps {
  options: string[];
  currectOption: string;
  selecting: (index: number) => void;
}

export default {
  name: "Reactive",
  setup() {
    const data: DataProps = reactive({
      options: ["选项1", "选项2", "选项3"],
      currectOption: "",
      selecting: (index: number) => {
        data.currectOption = data.options[index];
      },
    });
    return { data };
  },
};
</script>

<style lang="css">
.options {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>