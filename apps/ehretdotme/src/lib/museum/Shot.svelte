<script lang="ts">
	import {formatDateHuman} from "@packages/utils/date";
	import type {Art} from "./types";

	export let art: Art;
</script>

<h2>Shot</h2>

<dl>
	{#if art.location?.name}
		<dt>Where</dt>
		<dd>{art.location.name}</dd>
	{/if}
	<dt>When</dt>
	<dd>{formatDateHuman(art.shot)}</dd>
</dl>

<style>
	dl {
		display: grid;
		grid-template-columns: 0.5fr 1fr;
	}
</style>
