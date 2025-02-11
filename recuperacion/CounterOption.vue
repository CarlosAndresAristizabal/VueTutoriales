<template>
	<div class="containerButton separador">
		<h1>Contador con Option</h1>
		<h3 class="numberCount">{{ count }}</h3>
		<div class="btn-Duo">
			<button class="post-btn" @click="increment">
				Incrementar
			</button>
			<button
				class="post-btn reset"
				@click="reset">
				Reiniciar
			</button>
		</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
	name: 'CounterOption',
	data() {
		return {
			count: 0,
		};
	},
	methods: {
		increment() {
			this.count++;
		},
		reset() {
			this.count = 0;
		},
	},
});
</script>

<style>
.containerButton {
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.numberCount {
	font-size: 80px;
	font-weight: 700;
	text-shadow: 2px 2px 5px white;
}
.btn-Duo {
	display: flex;
	justify-content: center;
	gap: 25px;
}
.reset {
	background-image: linear-gradient(
		45deg,
		#f63b73,
		#742222
	);
}
.reset:hover {
	box-shadow: 0 0 17px rgba(246, 59, 68, 0.5);
}
</style>
