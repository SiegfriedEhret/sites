<script lang="ts">
	import '../../app.css';
	import Footer from '@packages/ui/Footer.svelte';
	import Header from '@packages/ui/Header.svelte';
</script>

<Header>
	<a slot="title" class="text-wevet mr-2" data-sveltekit:prefetch href="/">ehret.me</a>
	<span slot="links">
		<a class="text-wevet" data-sveltekit:prefetch href="/notes">/notes</a>
		<a class="text-wevet" data-sveltekit:prefetch href="/museum">/museum</a>
	</span>
</Header>

<main class="flex flex-col my-0 mx-4">
	<slot />
</main>

<Footer>
	<p slot="awesome">I think you are awesome. Peace.</p>
	<a slot="link" href="https://sieg.fr/ied" title="My website in French"> 🔗 sieg.fr/ied </a>
	<p slot="made-with">
		Made with <a href="https://kit.svelte.dev/">SvelteKit</a> and
		<a href="https://www.contentful.com/">Contentful</a>
	</p>
</Footer>
