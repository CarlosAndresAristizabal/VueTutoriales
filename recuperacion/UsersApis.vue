<template>
	<div class="containerUsers">
		<UserCard
			v-for="user in users"
			:key="user.id"
			:name="user.name"
			:username="user.username"
			:email="user.email"
			:website="user.website" />
	</div>
</template>

<script>
import UserCard from './UserCard.vue';
export default {
	name: 'UsersApis',
	components: {
		UserCard,
	},
	data() {
		return {
			users: [],
		};
	},
	async created() {
		const response = await fetch(
			'https://jsonplaceholder.typicode.com/users'
		);
		const data = await response.json();
		this.users = data;
	},
};
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
</style>
