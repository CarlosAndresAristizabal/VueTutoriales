<template>
  <main>
    <div class="containerUsers" v-if="dataUser">
      <UserCard_CompositionAPI
        v-for="users in dataUser"
        :key="users.id"
        :id="users.id"
        :name="users.name"
        :username="users.username"
        :email="users.email"
      />
    </div>
    <div v-else class="containerUsers">Loading Data...</div>
  </main>
</template>

<script lang="ts" setup>
import UserCard_CompositionAPI from '@/components/UserCard_CompositionAPI.vue'
import { onMounted, ref } from 'vue'
import { service } from '@/services/PostService.ts'
import type IPersona from '../interfaces/IPersona.ts'

const dataUser = ref<IPersona | null>(null)

onMounted(async () => {
  try {
    await service.fetchApi()
    dataUser.value = service.getData().value
  } catch (error) {
    console.log(error)
  }
})
</script>

<style scoped>
.containerUsers {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  flex-wrap: wrap;
}
@media (hover: hover) {
  a:hover {
    text-shadow: none;
  }
}
</style>
