import { ref, Ref } from 'vue'

export function useGetTime(): { newTime: Ref<string>; refreshNewTime: () => void } {
    const newTime = ref('00:00:00')
    const refreshNewTime = () => {
        const date = new Date()
        newTime.value = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        setTimeout(() => { refreshNewTime() }, 1000);
    }
    return { newTime, refreshNewTime }
}
