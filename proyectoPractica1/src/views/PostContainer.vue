<template>
  <div class = "post-container">
    <PostCard />
    <PostCard />
    <PostCard />
    <PostCard />
  </div>
</template>

<script setup>
import PostCard from './PostCard.vue'
</script>

<style scoped>
.post-container {
  width          : 80%;
  margin         : auto;
  margin-top     : 1.25rem;
  display        : flex;
  flex-wrap      : wrap;
  justify-content: center;
  align-items    : center;
  padding        : 0.62rem;
  background     : red;
}
</style>
