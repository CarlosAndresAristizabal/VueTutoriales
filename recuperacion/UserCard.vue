<template>
	<div class="post-card containerUsersWidth">
		<p>Name: {{ name }}</p>
		<p>UserName: {{ username }}</p>
		<p>Email: {{ email }}</p>
		<p>
			WebSite:
			<a
				href="https://{{ website }}"
				target="_blank"
				>{{ website }}</a
			>
		</p>
	</div>
</template>

<script>
export default {
	name: 'UserCard',
	props: ['name', 'username', 'email', 'website'],
};
</script>

<style scoped>
.containerUsersWidth {
	width: 20rem;
}

</style>
