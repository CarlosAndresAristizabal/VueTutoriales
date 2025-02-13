<template>
  <RouterLink :to   = "`/UserApisId_OptionsAPI/` + id">
  <div class = "post-card containerUsersWidth">
      <p>Name    : {{ name }}</p>
      <p>UserName: {{ username }}</p>
      <p>Email   : {{ email }}</p>
    </div>
  </RouterLink>
</template>

<script lang = "ts" >
import { defineComponent } from "vue"

export default defineComponent({
  name : 'UserCard_OptionsAPI',
   props : {
    id: {
      type    : Number,
      required: true,
    },
    name: {
      type    : String,
      required: true,
    },
    username: {
      type    : String,
      required: true,
    },
    email: {
      type    : String,
      required: true,
    },
  }
})
</script>

<style scoped>
.post-card {
  display        : flex;
  flex-direction : column;
  justify-content: center;
}
.containerUsersWidth {
  width : 20rem;
  height: 10rem;
}
.containerUsersWidth:hover {
  box-shadow: 0.2rem 0.2rem 0.4rem aqua;
  transition: 0.4s;
}
</style>
