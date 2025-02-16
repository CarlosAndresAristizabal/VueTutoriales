<template>
  <main>
    <div class="containerUsers" v-if="dataUser.length > 0">
      <UserCard_OptionsAPI
        v-for="user in dataUser"
        :key="user.id"
        :id="user.id"
        :name="user.name"
        :username="user.username"
        :email="user.email"
      />
    </div>
    <div v-else class="containerUsers">Loading Data...</div>
  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import UserCard_OptionsAPI from '../components/UserCard_OptionsAPI.vue'
import { service } from '@/services/PostService'
import type IPersona from '@/interfaces/IPersona'

export default defineComponent({
  name: 'UsersApis_OptionsAPIView',
  components: {
    UserCard_OptionsAPI,
  },
  data() {
    return {
      dataUser: [] as IPersona[],
      loading: false,
    }
  },
  methods: {
    async loadData() {
      this.loading = true
      try {
        await service.fetchApi()
        this.dataUser = service.getData().value
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    },
  },
  created() {
    this.loadData()
  },
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
