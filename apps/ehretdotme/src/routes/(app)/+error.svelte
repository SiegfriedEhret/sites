<script>
	import { dev } from '$app/environment';
	import { page } from '$app/stores';

	const offline = typeof navigator !== 'undefined' && navigator.onLine === false;

	let message = offline
		? 'To have a connection or not to have a connection, that is the question.'
		: $page.error?.message ?? 'Oops.';

	let title = offline ? 'Offline' : $page.status;
	if ($page.status === 404) {
		title = 'This is not the page you are looking for.';
	}
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<section>
	<h1>{$page.status}: {title}</h1>

	{#if $page.status === 404}
		<p>No content for <code>{$page.url.pathname}</code>.</p>
	{:else}
		<p>{message}</p>
	{/if}
	{#if dev && $page.error.stack}
		<pre>{$page.error.stack}</pre>
	{/if}
</section>
