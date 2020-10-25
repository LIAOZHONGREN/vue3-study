<template>
  <div>
    <div v-for="(v, i) in hookTips" v-bind:key="i">{{ v }}</div>
    <button @click="triggerFunc()">
      点击触发更新组件{{ trigger ? "" : "" }}
    </button>
  </div>
</template>

<script lang='ts'>
import {
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onRenderTracked,
  onRenderTriggered,
} from "vue";

interface DataProps {
  hookTips: string[];
  trigger: boolean;
  triggerFunc: () => void;
}

export default {
  name: "LifeCycleHook",
  setup() {
    const data: DataProps = reactive({
      hookTips: [],
      trigger: false,
      triggerFunc: () => {
        data.trigger = !data.trigger;
      },
    });
    const dataRefs = toRefs(data);
    const tips = "1:开始创建组件------setup";
    console.log(tips);
    data.hookTips.push(tips);

    onBeforeMount(() => {
      const tips = "2:挂载组件之前------onBeforeMount";
      data.hookTips.push(tips);
      console.log(tips);
    });

    onMounted(() => {
      const tips = "3:组件挂载完成后------onMounted";
      data.hookTips.push(tips);
      console.log(tips);
    });

    onBeforeUpdate(() => {
      const tips = "4:组件更新之前------onBeforeUpdate";
      console.log(tips);
    });

    onUpdated(() => {
      const tips = "5:组件更新完成后------onUpdated";
      console.log(tips);
    });

    //跟踪每次对状态的get操作
    onRenderTracked((ev) => {
      console.log(ev);
    });

    //跟踪发生set操作的状态,提供新值和旧值
    onRenderTriggered((ev) => {
      console.log(ev);
    });

    //onBeforeUnmount() 组件卸载之前执行
    //onUnmount() 组件卸载完成后执行
    //onActivated() 组件激活后执行 组件被<keep-alive></keep-alive>包裹才具备此hook
    //onDeactivated() 组件转到后台(被缓存起来,备后续激活显示)后执行 组件被<keep-alive></keep-alive>包裹才具备此hook
    //onErrorCaptured() 捕获子组件异常时执行

    return { ...dataRefs };
  },
};
</script>
