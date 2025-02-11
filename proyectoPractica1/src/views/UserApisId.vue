<template>
  <div class = "containerUsers">
    <h1>User Data: </h1>
    <p v-if = "usersId">
      Id      : {{ usersId.id }} <br />
      Name    : {{ usersId.name }} <br />
      Username: {{ usersId.username }} <br />
      Email   : {{ usersId.email }}<br />
      City    : {{ usersId.address.city }}<br />
      Phone   : {{ usersId.phone }}<br />
      Website : {{ usersId.website }}
    </p>
    <PostButton text = "BACK" @click = "back" class = "Post-button danger" />
  </div>
</template>

<script lang = "ts">
import { defineComponent } from 'vue'
import PostButton from './PostButton.vue'

interface User {
  id      : number
  name    : string
  username: string
  email   : string
  address : {
    city: string
  }
  phone  : string
  website: string
}

export default defineComponent({
  name : 'UsersApisId',
  props: {
    id: {
      type    : String,
      required: true,
    },
  },
  components: { PostButton },
  data() {
    return {
      usersId: null as User | null,
    }
  },
  methods: {
    back() {
      this.$router.push('/UsersAPIS')
    },
    async fetchUser() {
      try {
        const response     = await fetch(`https://jsonplaceholder.typicode.com/users/${this.id}`)
        const data         = (await response.json()) as User
              this.usersId = data
      } catch (error) {
        console.error('Error fetching user:', error)
      }
    },
  },
  watch: {
    id() {
      this.fetchUser()
    },
  },
  async created() {
    await this.fetchUser()
  },
})
</script>

<style scoped>
.containerUsers {
  position       : relative;
  margin         : 0 auto;
  width          : 20rem;
  display        : flex;
  flex-direction : column;
  align-items    : left;
  gap            : 1.2rem;
  background     : linear-gradient(45deg, #4b9ee26a, #42afa46a);
  backdrop-filter: blur(0.7rem);
  padding        : 1.5rem 2rem;
  border-radius  : 0.5rem;
  color          : rgb(5, 5, 5);
  letter-spacing : 0.01rem;
  font-size      : 0.9rem;
  font-weight    : 900;

  }
   .Post-button {
  animation: none;
  margin   : 0;
}

</style>
