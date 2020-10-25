<template>
  <div>{{ `当前选项是选项3:${isOption3}` }}</div>
  <div class="options">
    <div v-for="(v, i) in options" v-bind:key="i">
      <button @click="selecting(i)">{{ v }}</button>
    </div>
  </div>
</template>

<script lang='ts'>
import { reactive, toRefs, watch } from "vue";

interface DataProps {
  options: string[];
  currectOption: string;
  selecting: (index: number) => void;
  isOption3: boolean;
}

export default {
  name: "Watch",
  setup() {
    const data: DataProps = reactive({
      options: ["选项1", "选项2", "选项3"],
      currectOption: "",
      selecting: (index: number) => {
        data.currectOption = data.options[index];
      },
      isOption3: false,
    });

    watch([() => data.currectOption], (newValue, oldValue) => {
      data.isOption3 = newValue[0] === "选项3";
    });

    const dataRefs = toRefs(data);
    return { ...dataRefs };
  },
};
</script>