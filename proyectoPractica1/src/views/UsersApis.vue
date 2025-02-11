<template>
  <div class = "containerUsers" v-if = "users">
    <UserCard
        v-for   = "user in users"
      :key      = "user.id"
      :name     = "user.name"
      :username = "user.username"
      :email    = "user.email"
      :id       = "user.id"
    />
  </div>
</template>
<script lang = "ts">
import { defineComponent } from 'vue'
import UserCard from './UserCard.vue'

interface User {
  id      : number
  name    : string
  username: string
  email   : string
}

export default defineComponent({
  name      : 'UsersApis',
  components: {
    UserCard,
  },
  data() {
    return {
      users: null as User[] | null,
    }
  },
  async created() {
    const response   = await fetch('https://jsonplaceholder.typicode.com/users')
    const data       = (await response.json()) as User[]
          this.users = data
  },
})
</script>
<style scoped>
.containerUsers {
  display        : flex;
  flex-direction : row;
  align-items    : center;
  justify-content: center;
  gap            : 1.2rem;
  flex-wrap      : wrap;
}
@media (hover: hover) {
  a:hover {
    text-shadow: none;
  }
}
</style>
