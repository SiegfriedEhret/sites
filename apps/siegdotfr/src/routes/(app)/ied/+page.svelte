<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const { items } = data;
</script>

<h1>Coucou !</h1>
<p>Je m'appelle Siegfried. Je suis développeur.</p>

<section>
	<h2>Dernières notes.</h2>
	<ul>
		{#each items as item}
			<li>
				<a href={`/ied/${item.slug}`} sveltekit:prefetch>
					{item.title}
				</a>
			</li>
		{/each}
	</ul>
	<a href="/ied/notes">Toutes mes notes.</a>
</section>

<style>
	li {
		margin: 0;
		padding: 0;
	}
</style>