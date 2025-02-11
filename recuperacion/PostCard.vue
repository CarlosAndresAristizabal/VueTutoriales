<template>
	<div class="post-card">
		<h3>Título</h3>
		<p>
			Lorem ipsum dolor sit amet consectetur
			adipisicing elit. Voluptate vero natus et!
			Odio voluptate quasi iste culpa debitis
			voluptas ipsum, sed fugiat quae
			consequuntur, autem ipsam doloribus deleniti
			vitae aperiam.
		</p>
		<PostButton />
	</div>
</template>

<script lang="ts" setup>
import PostButton from './PostButton.vue';
</script>

<style>
.post-card {
	border-radius: 15px;
	padding: 30px;
	margin: 5px;
	border: 1px solid #ccc;
	background-color: #fff;
	box-shadow: 2px 2px 10px 2px rgb(155, 155, 155);
}
</style>
