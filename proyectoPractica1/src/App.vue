<template>
  <main>
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <div class="wrapper">
        <HelloWorld msg="You did it!" />
        <Nav />
      </div>
    </header>
    <RouterView />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Nav from './components/Nav.vue'
export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    Nav,
  },
})
</script>

<style scoped>
main {
  display: grid;
  grid-template-rows: auto auto;
  width: 100%;
}
header {
  width: calc(100% - var(--section-gap));
  max-height: 100vh;
  display: flex;
  flex-direction: row;
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.wrapper {
  width: 100%;
}
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    top: 0;
    width: 100%;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
  header .wrapper {
    width: 100%;
    height: max-content;
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
