<template>
  <div class="containerButton separador">
    <h1>Contador con Option</h1>
    <h3 class="numberCount">{{ count }}</h3>
    <div class="btn-Duo">
      <button class="post-btn" @click="increment">Incrementar</button>
      <button class="post-btn reset" @click="reset">Reiniciar</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'CounterOptionView',
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    increment() {
      this.count++
    },
    reset() {
      this.count = 0
    },
  },
})
</script>
