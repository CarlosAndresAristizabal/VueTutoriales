<template>
  <div class="containerUsers">
    <h1>User Data:</h1>
    <div v-if="user">
      <p>Id : {{ user.id }}</p>
      <p>Name : {{ user.name }}</p>
      <p>Username: {{ user.username }}</p>
      <p>Email : {{ user.email }}</p>
      <p>Phone : {{ user.phone }}</p>
      <p>City : {{ user.address.city }}</p>
      <p>Website : {{ user.website }}</p>
    </div>
    <div v-else>Cargando...</div>
    <PostButton text="BACK" @click="handleClickBack" class="Post-button danger" />
  </div>
</template>

<script lang="ts" setup>
import PostButton from '../components/PostButton.vue'
import { useRouter } from 'vue-router'
import { defineProps, onMounted, ref } from 'vue'
interface User {
  id: number
  name: string
  username: string
  email: string
  address: {
    city: string
  }
  phone: string
  website: string
}

const props = defineProps<{
  id: number | string
}>()
const user = ref<User | null>(null)
const router = useRouter()

const handleClickBack = () => {
  router.push('/UsersAPIS_CompositionAPI')
}
async function fetchUser() {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/` + props.id)
    user.value = (await response.json()) as User
    // console.log(user.value)//object complete del user
    // console.log(user.value.id)//id del user
  } catch (error) {
    console.error('Error fetching user:', error)
  }
}

onMounted(fetchUser)
</script>

<style scoped>
.containerUsers {
  position: relative;
  margin: 0 auto;
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 19.2px;
  background: linear-gradient(45deg, #4b9ee26a, #42afa46a);
  backdrop-filter: blur(11.2px);
  padding: 24px 32px;
  border-radius: 8px;
  color: rgb(5, 5, 5);
  letter-spacing: 0.16px;
  font-size: 14.4px;
  font-weight: 900;
}
.Post-button {
  animation: none;
  margin: 0;
}
</style>
