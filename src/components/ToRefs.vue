<template>
  <div>{{ `当前选项:${currectOption}` }}</div>
  <div class="options">
    <div v-for="(v, i) in options" v-bind:key="i">
      <button @click="selecting(i)">{{ v }}</button>
    </div>
  </div>
</template>

<script lang='ts'>
import { reactive, toRefs } from "vue";

interface DataProps {
  options: string[];
  currectOption: string;
  selecting: (index: number) => void;
}

export default {
  name: "ToRefs",
  setup() {
    const data: DataProps = reactive({
      options: ["选项1", "选项2", "选项3"],
      currectOption: "",
      selecting: (index: number) => {
        data.currectOption = data.options[index];
      },
    });
    const dataRefs = toRefs(data);
    return { ...dataRefs };
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