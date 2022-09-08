<script lang="ts">
	import type { Tag } from '@packages/utils/types/tags';

	export let tags: Tag[] = [];
</script>

{#if tags.length > 0}
	{#each tags as tag}
		<span>#{tag.name}</span>
	{/each}
{/if}

<style>
	span {
		margin-right: 0.5rem;
	}
</style>
