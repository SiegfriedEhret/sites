<script lang="ts">
	import List from '@packages/ui/v1/List.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { items } = data;
</script>

<svelte:head>
	<title>/ [ehret.me]</title>
	<meta property="og:title" content={`/ [ehret.me]`} />
	<meta
		property="og:description"
		name="description"
		content="My name is Siegfried Ehret. I am a developer."
	/>
	<meta name="description" content="My name is Siegfried Ehret. I am a developer." />
</svelte:head>

<article>
	<h1>Hello!</h1>

	<p>My name is Siegfried Ehret. I am a developer.</p>

	<section>
		<h2>Latest notes.</h2>
		<List {items} page="index" />
		<a href="/notes">All notes.</a>
	</section>

	<section>
		<h2>Some projects.</h2>
		<p>🚧 This section is it progress. 🚧</p>
		<dl>
			<dt>
				<a href="https://git.sr.ht/~siegfriedehret/tagzytout"> tagzytout </a>
			</dt>
			<dd>A tool to automate tag creation from git commits.</dd>
		</dl>
	</section>
</article>
