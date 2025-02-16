<template>
  <div class="containerUsers">
    <h1>User Data:</h1>
    <div v-if="errorMessage" class="error">
      {{ errorMessage }}
    </div>
    <div v-if="usersId">
      <p>Id : {{ usersId.id }}</p>
      <p>Name : {{ usersId.name }}</p>
      <p>Username: {{ usersId.username }}</p>
      <p>Email : {{ usersId.email }}</p>
      <p>Phone : {{ usersId.phone }}</p>
      <p>City : {{ usersId.address?.city }}</p>
      <p>Website : {{ usersId.website }}</p>
    </div>
    <div v-else>Loading Data...</div>
    <PostButton text="BACK" @click="handleClickBack" class="Post-button danger" />
  </div>
</template>

<script lang="ts" setup>
import PostButton from '../components/PostButton.vue'
import { useRouter } from 'vue-router'
import { defineProps, onMounted, ref } from 'vue'
import { service } from '@/services/PostService'
import type IPersona from '@/interfaces/IPersona'

const props = defineProps<{
  id: string | number
}>()
const usersId = ref<IPersona | null>(null)
const router = useRouter()
const errorMessage = ref<string>('')

const handleClickBack = () => {
  router.push('/UsersAPIS_CompositionAPI')
}
onMounted(async () => {
  try {
    const idNumber = typeof props.id === 'string' ? parseInt(props.id, 10) : props.id

    if (isNaN(idNumber)) {
      throw new Error('Invalid user ID format')
    }
    await service.fetchUserById(idNumber)
    const userData = service.getCurrentUser().value

    if (!userData) {
      throw new Error('User not found')
    }
    usersId.value = userData
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'Failed to load user data'
    console.error('Error fetching user:', error)
  }
})
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
.error {
  color: #dc3545;
  padding: 1rem;
  border: 1px solid #dc3545;
  border-radius: 4px;
  margin: 1rem 0;
}

.loading {
  color: #666;
  font-style: italic;
  padding: 1rem;
}
</style>
