<template>
	<div class="containerButton">
		<h1>Contador con compositions</h1>
		<h3 class="numberCount">{{ contador }}</h3>
		<div class="btn-Duo">
			<button
				class="post-btn"
				@click="incrementar">
				incrementar</button
			><button
				class="post-btn reset"
				@click="reset">
				Reiniciar
			</button>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import {  Ref, ref } from 'vue';
		var contador: Ref = ref(0);
		const incrementar = (): void => {
			contador.value++;
		};
		const reset = (): void => {
			contador.value = 0;
		};
	</script>
<style scoped></style>
