<template>
  <div>{{ newTime }}</div>
  <button @click="refreshNewTime">启动时钟</button>
</template>

<script lang='ts'>
import {} from "vue";
import { useGetTime } from "./useGetTime";
export default {
  name: "Hook",
  setup() {
    const { newTime, refreshNewTime } = useGetTime();
    return { newTime, refreshNewTime };
  },
};
</script>