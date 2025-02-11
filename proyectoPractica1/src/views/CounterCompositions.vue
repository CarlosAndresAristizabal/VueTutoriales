<template>
  <div class = "containerButton">
    <h1>Contador con compositions</h1>
    <h3      class = "numberCount">{{ contador }}</h3>
    <div     class = "btn-Duo">
    <button  class = "post-btn" @click       = "incrementar">incrementar</button
    ><button class = "post-btn reset" @click = "reset">Reiniciar</button>
    </div>
  </div>
</template>

<script lang = "ts" setup>
import { ref } from 'vue'
let   contador    = ref(0)
const incrementar = () => {
  contador.value++
}
const reset = () => {
  contador.value = 0
}
</script>

