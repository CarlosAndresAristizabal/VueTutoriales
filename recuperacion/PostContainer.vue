<template>
	<div class="post-container">
		<PostCard />
		<PostCard />
		<PostCard />
		<PostCard />
	</div>
</template>

<script>
import PostCard from './PostCard.vue';
export default {
	name: 'PostContainer',
	components: {
		PostCard,
	},
};
</script>

<style scoped>
.post-container {
	width: 80%;
	margin: auto;
	margin-top: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	padding: 10px;
}
</style>
