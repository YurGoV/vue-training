<template>
  <div>
    <h1>Multiply</h1>
    {{ result }}
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { onBeforeRouteUpdate, useRouter } from 'vue-router'
const router = useRouter()
const routeSection = router.currentRoute.value

const num1 = ref(null)
const num2 = ref(null)

const result = computed(() => num1.value * num2.value)

onMounted(() => {
  num1.value = Number(routeSection.params.num1)
  num2.value = Number(routeSection.params.num2)
})

// onBeforeRouteUpdate((to, from) => {
onBeforeRouteUpdate((to) => {
  num1.value = Number(to.params.num1)
  num2.value = Number(to.params.num2)
})
</script>

<style scoped>
</style>
