<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink :to="{ name: 'about' }">About</RouterLink>
    <RouterLink :to="{ name: 'CounterOption' }">Counter Option</RouterLink>
    <RouterLink :to="{ name: 'ListTeachers' }">List Teachers</RouterLink>
    <RouterLink :to="{ name: 'PostCard' }">Post Card</RouterLink>
    <RouterLink :to="{ name: 'UsersApis_OptionsAPI' }">Users API´S Options API</RouterLink>
    <RouterLink :to="{ name: 'UsersApis_CompositionAPI' }">Users API´S Composition API</RouterLink>
    <RouterLink :to="{ name: 'CounterCompositions' }"> Counter Compositions</RouterLink>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
export default defineComponent({
  name: 'Nav',
  components: { RouterLink },
})
</script>

<style scoped lang="scss">
nav {
  width: 100%;
  font-size: 0.75rem;
  text-align: center;
  margin: 2rem 0;

  a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 0.2rem solid var(--color-border);
    &.router-link-exact-active {
      color: var(--color-text);
    }

    &.router-link-exact-active:hover {
      background-color: transparent;
    }

    &:first-of-type {
      border: 0;
    }
  }

  @media (min-width: 1024px) {
    text-align: left;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
