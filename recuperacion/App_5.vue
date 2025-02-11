<template>
	<div class="container">
		<div class="containerPost">
			<h1>Hola mundo con VUE</h1>
			<h2>Listado de Posts:</h2>
		</div>
		<PostContainer></PostContainer>
		<div class="counterDuo">
			<CounterOption />
			<CounterCompositions />
		</div>
		<h1>Listado de profesores:</h1>
		<ListTeachers />
		<h1>Usuario desde una API´s:</h1>
		<UsersApis />
	</div>
</template>

<script>
import PostContainer from '@/components/PostContainer.vue';
import CounterOption from '@/components/CounterOption.vue';
import CounterCompositions from '@/components/CounterCompositions.vue';
import ListTeachers from '@/components/ListTeachers.vue';
import UsersApis from '@/components/UsersApis.vue';
export default {
	name: 'App',
	components: {
		PostContainer,
		CounterOption,
		CounterCompositions,
		ListTeachers,
		UsersApis,
	},
};
</script>

<style scoped>
* {
	scroll-behavior: smooth;
}
/* style generales */
.container {
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: linear-gradient(
		90deg,
		rgba(52, 51, 74, 1) 0%,
		rgba(43, 104, 106, 1) 35%,
		rgba(0, 103, 124, 1) 100%
	);
	border-radius: 7px;
}
.containerPost {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;
}
h1 {
	color: white;
}
.counterDuo {
	width: 100%;
	display: flex;
	gap: 25px;
	justify-content: center;
	align-items: center;
}
.separador {
	border-right: 1px solid white;
}

@media screen and (max-width: 1450px) {
	.counterDuo {
		flex-direction: column;
	}
	.separador {
		border-right: none;
	}
}
</style>
