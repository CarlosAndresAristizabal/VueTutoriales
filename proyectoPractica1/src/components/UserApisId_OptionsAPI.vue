<template>
  <div class="containerUsers">
    <h1>User Data:</h1>
    <p v-if="usersId">
      Id : {{ usersId.id }} <br />
      Name : {{ usersId.name }} <br />
      Username: {{ usersId.username }} <br />
      Email : {{ usersId.email }}<br />
      City : {{ usersId.address.city }}<br />
      Phone : {{ usersId.phone }}<br />
      Website : {{ usersId.website }}
    </p>
    <div v-else>Loading data...</div>
    <PostButton text="BACK" @click="back" class="Post-button danger" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PostButton from '../components/PostButton.vue'
import { service } from '@/services/PostService'
import type IPersona from '@/interfaces/IPersona'

export default defineComponent({
  name: 'UserApisId_OptionsAPI',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  components: { PostButton },
  data() {
    return {
      usersId: null as IPersona | null,
      loading: false,
    }
  },
  methods: {
    back() {
      this.$router.push('/UsersApis_OptionsAPI')
    },
    async loadData() {
      this.loading = true
      try {
        const idNumber = parseInt(this.id, 10)
        if (isNaN(idNumber)) throw new Error('Invalid user ID')
        await service.fetchUserById(idNumber)
        this.usersId = service.getCurrentUser().value
        if (!this.usersId) throw new Error('User not found')
      } catch (error) {
        console.error('Error')
        this.usersId = null
      } finally {
        this.loading = false
      }
    },
  },
  watch: {
    id() {
      this.loadData()
    },
  },
  async created() {
    await this.loadData()
  },
})
</script>

<style scoped>
.containerUsers {
  position: relative;
  margin: 0 auto;
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 1.2rem;
  background: linear-gradient(45deg, #4b9ee26a, #42afa46a);
  backdrop-filter: blur(0.7rem);
  padding: 1.5rem 2rem;
  border-radius: 0.5rem;
  color: rgb(5, 5, 5);
  letter-spacing: 0.01rem;
  font-size: 0.9rem;
  font-weight: 900;
}
.Post-button {
  animation: none;
  margin: 0;
}
</style>
