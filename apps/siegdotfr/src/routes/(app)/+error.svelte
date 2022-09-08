<script>
	import { dev } from '$app/environment';
	import { page } from '$app/stores';

	const offline = typeof navigator !== 'undefined' && navigator.onLine === false;

	let message = offline
		? 'Avoir une connexion ou ne pas avoir de connexion, telle est la question.'
		: $page.error?.message ?? 'Oups.';

	let title = offline ? 'Hors ligne' : $page.status;
	if ($page.status === 404) {
		title = "Ce n'est pas la page que vous recherchez.";
	}
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<section>
	<h1>{$page.status}: {title}</h1>

	{#if $page.status === 404}
		<p>Pas de contenu pour <code>{$page.url.pathname}</code>.</p>
	{:else}
		<p>{message}</p>
	{/if}
	{#if dev && $page.error.stack}
		<pre>{$page.error.stack}</pre>
	{/if}
</section>
