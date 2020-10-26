<template>
  <div>
    <h3>{{ title }}</h3>
    <div class="test">
      <h6>演示Ref</h6>
      <Ref />
    </div>
    <div class="test">
      <h6>演示Reactive</h6>
      <Reactive />
    </div>
    <div class="test">
      <h6>演示ToRefs</h6>
      <ToRefs />
    </div>
    <div class="test">
      <h6>演示LifeCycleHook</h6>
      <LifeCycleHook />
    </div>
    <div class="test">
      <h6>演示Watch</h6>
      <Watch />
    </div>
    <div class="test">
      <h6>演示hook</h6>
      <Hook />
    </div>
    <div class="test">
      <h6>演示"app.config.errorHandler"</h6>
      <button @click="throw_">抛一个异常</button>
    </div>
    <div class="test">
      <h6>演示自定义指令</h6>
      <div v-insert="'我是insert指令插入的文本'"></div>
    </div>
    <div class="test">
      <h6>演示自定义插件</h6>
      <div>{{ pro }}{{ $plugin() }}</div>
    </div>
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
  components: { Ref, Reactive, ToRefs, LifeCycleHook, Watch, Hook },
  inject: ["pro"],
  setup() {
    const throw_ = () => {
      throw new Error("...");
    };
    return { throw_ };
  },
  // mounted() {
  //   const that: any = this;
  //   that.$plugin();
  // },
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

.test {
  position: relative;
  width: 100%;
  padding: 5px 0;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: solid #2c3e50 1px;
}
</style>
