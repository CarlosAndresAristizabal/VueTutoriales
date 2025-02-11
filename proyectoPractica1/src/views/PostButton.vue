<template>
  <button class = "post-btn">{{ text }}</button>
</template>

<script lang = "ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name : 'PostButton',
  props: {
    text: {
      type    : String,
      required: true,
    },
  },
})
</script>

<style scoped>
.success {
  margin          : 10px;
  background-image: linear-gradient(135deg, #64f63b, #227435);
  animation       : none;
}
.success:hover {
  transition: all 0.3s ease;
  box-shadow: 0 0 17px rgba(72, 246, 59, 0.5);
}
.danger {
  margin          : 10px;
  background-image: linear-gradient(135deg, #f63b44, #742225);
  animation       : none;
}
.danger:hover {
  transition: all 0.3s ease;
  box-shadow: 0 0 17px rgba(246, 59, 59, 0.5);
}
</style>
