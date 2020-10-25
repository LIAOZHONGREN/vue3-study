<template>
  <div>
    <h3>{{title}}</h3>
    <Hook />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Ref from "./components/Ref.vue";
import Reactive from "./components/Reactive.vue";
import ToRefs from "./components/ToRefs.vue";
import LifeCycleHook from "./components/LifeCycleHook.vue";
import Watch from "./components/Watch.vue";
import Hook from "./components/hook/Hook.vue";

export default defineComponent({
  name: "App",
  components: { Hook },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
