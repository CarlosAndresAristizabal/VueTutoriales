<template>
  <main>
    <div class="containerUsers" v-if="user">
      <UserCard_CompositionAPI
        v-for="users in user"
        :key="users.id"
        :id="users.id"
        :name="users.name"
        :username="users.username"
        :email="users.email"
      />
    </div>
    <div v-else class="containerUsers">Cargando...</div>
  </main>
</template>

<script lang="ts" setup>
import UserCard_CompositionAPI from '@/components/UserCard_CompositionAPI.vue'
import { onMounted, ref } from 'vue'

interface User {
  id: number
  name: string
  username: string
  email: string
}

const user = ref<User[] | null>(null)

async function fetchUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    user.value = (await response.json()) as User[]
  } catch (error) {
    console.error('Error fetching user:', error)
  }
}

onMounted(fetchUser)
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
