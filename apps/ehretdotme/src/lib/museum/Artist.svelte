<script lang="ts">
	import type { Artist } from '$lib/museum/types';
	import {formatDateHuman} from "@packages/utils";

	export let artist: Artist;
</script>

{#if artist}
	<h2>{artist.name}</h2>
	<dl>
		<dt>Birth</dt>
		<dd>{formatDateHuman(artist.dateOfBirth)}</dd>
		<dt>Death</dt>
		<dd>{artist.dateOfDeath ? formatDateHuman(artist.dateOfDeath) : 'Not yet'}</dd>
	</dl>
	{#if artist.descriptionHtml}
		<div>{@html artist.descriptionHtml.html}</div>
	{/if}
{/if}

<style>
	dl {
		display: grid;
		grid-template-columns: 0.5fr 1fr;
	}
</style>
