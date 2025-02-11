<template>
	<button class="post-btn">ACCEDER</button>
</template>

<script lang="ts" setup></script>

<style>
.post-btn {
	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 8px 16px;
	font-size: 16px;
	font-weight: 500;
	cursor: pointer;
	transition: all 0.3s ease;
	color: #ffffff;
	border: 1px solid black 4px;
	border-radius: 4px;
	background-image: linear-gradient(
		135deg,
		#3b82f6,
		#3a2274
	);
	box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
	text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
	animation: float 3s ease-in-out infinite;
}

.post-btn:hover {
	transition: all 0.3s ease;
	box-shadow: 0 0 17px rgba(59, 130, 246, 0.5);
}

@keyframes float {
	0% {
		transform: translateY(0px);
	}
	50% {
		transform: translateY(-6px);
	}
	100% {
		transform: translateY(0px);
	}
}
</style>
