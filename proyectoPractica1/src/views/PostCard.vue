<template>
  <div class = "post-card">
  <h3  class = "subtitulo">Título</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate vero natus et! Odio
      voluptate quasi iste culpa debitis voluptas ipsum, sed fugiat quae consequuntur, autem ipsam
      doloribus deleniti vitae aperiam.
    </p>
    <br />
    <PostButton text = "ACCEDER" />
  </div>
</template>

<script lang = "ts">
import { defineComponent } from 'vue';
import PostButton from './PostButton.vue'
export default defineComponent({
  name      : 'PostCard',
  components: {
    PostButton,
  },
})
</script>

<style scoped>
.post-card {
  position: relative;
  margin  : 0 auto;
}

</style>
