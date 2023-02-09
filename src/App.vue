<template>
	<!-- MENU  -->
	<nav>
		<div
			class="burger-menu"
			@click="burger">
			<div class="bar1"></div>
			<div class="bar2"></div>
			<div class="bar3"></div>
		</div>

		<div
			v-if="burgerShow"
			id="menu">
			<a href="">About</a>
			<a href="#contact-me">Contact</a>
		</div>
	</nav>

	<main class="container d-flex flex-row gap-5">
		<section class="d-flex flex-column glass p-3 w-50">
			<h1 class="thin">Hi, my</h1>
			<h1 class="thin">name is <span class="light">Gonzalo</span></h1>
			<hr />
			<h4 class="thin align-self-end">{{ job }}</h4>
		</section>
		<section class="light glass p-3">
			{{ abMe }}
		</section>
	</main>
	<div class="position-absolute bottom-0 start-50">
		<hr>
		<a
			id="scroll"
			class="bi-2x bi-caret-down-fill "
			href="#contact-me"></a>
	</div>
	<section id="contact-me">
		<!-- <form
			id="contact-me"
			action=""
			method="post">
			<input type="text" />
			<input type="text" />
			<input type="text" />
		</form> -->
	</section>
</template>

<script>
	export default {
		mounted() {},
		data() {
			return {
				// MENU
				colores: {
					negro: '#101010',
					negroMinimal: '#191919',
					grisOscuro: '#333333',
					doradoOscuro: '#B8860B',
					marronOscuro: '#8B4513',
					blanco: '#FFFFFF',
				},
				burgerShow: false,

				// INDEX
				devs: ['Front-End', 'UI-developer'],
				abMe: "I'm a developer passionate about Javascript and Vue3. I love building things and solving problems through programming. Some of my interests are programming and hardware.",
			};
		},
		methods: {
			burger() {
				this.burgerShow = !this.burgerShow;
			},
			falso() {
				if (this.burgerShow === true) {
					this.burgerShow = !this.burgerShow;
				}
			},
		},
		computed: {
			job() {
				console.log(this.devs.join('/'));
				return this.devs.join('/');
			},
		},
	};
</script>
