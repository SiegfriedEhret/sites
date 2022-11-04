<script lang="ts">
	import { formatDate, getYear } from '../utils/date';
	import Tags from './Tags.svelte';
	import type { Post } from '@packages/utils/types/posts';

	export let items: Post[] = [];
	export let page: 'index' = null;
</script>

{#if items.length === 0}
	<p>Nothing to see here.</p>
{:else if page === 'index'}
	<ul>
		{#each items as item}
			<li>
				<a href={`/${item.slug}`} data-sveltekit:prefetch>
					{item.title}
				</a>
			</li>
		{/each}
	</ul>
{:else}
	{#each items as item}
		<section data-year={getYear(item.publicationDate)}>
			<h2>
				<a href={`/${item.slug}`} data-sveltekit:prefetch>
					{item.title}
				</a>
			</h2>
			<div>
				<time datetime={item.publicationDate}>{formatDate(item.publicationDate)}</time>
				<Tags tags={item.contentfulMetadata.tags} />
			</div>
			<p>{item.description}</p>
		</section>
	{/each}
{/if}

<style>
	time {
		font-variant: tabular-nums;
	}

	li {
		margin: 0;
		padding: 0;
	}

	section {
		margin: 1rem 0;
	}

	section > * {
		margin: 0;
	}

	section[data-year]::before {
		display: block;
		background: var(--prime);
		color: var(--wevet);
		padding: 0.5rem 1rem;
		font-weight: bold;
		font-variant: tabular-nums;
		border: 2px solid var(--back);
	}

	@media screen and (min-width: 60rem) {
		section[data-year]::before {
			position: absolute;
			transform: rotate(-90deg) translateX(-1rem) translateY(-4.5rem);
		}
	}

	section[data-year='2023']::before {
		content: '2023';
	}
	section[data-year='2022']::before {
		content: '2022';
	}
	section[data-year='2021']::before {
		content: '2021';
	}
	section[data-year='2020']::before {
		content: '2020';
	}
	section[data-year='2019']::before {
		content: '2019';
	}
	section[data-year='2018']::before {
		content: '2018';
	}
	section[data-year='2017']::before {
		content: '2017';
	}
	section[data-year='2016']::before {
		content: '2016';
	}
	section[data-year='2015']::before {
		content: '2015';
	}
	section[data-year='2014']::before {
		content: '2014';
	}
	section[data-year='2013']::before {
		content: '2013';
	}
	section[data-year='2012']::before {
		content: '2012';
	}
	section[data-year='2011']::before {
		content: '2011';
	}

	section[data-year='2022'] + section[data-year='2022']::before,
	section[data-year='2021'] + section[data-year='2021']::before,
	section[data-year='2020'] + section[data-year='2020']::before,
	section[data-year='2019'] + section[data-year='2019']::before,
	section[data-year='2018'] + section[data-year='2018']::before,
	section[data-year='2017'] + section[data-year='2017']::before,
	section[data-year='2016'] + section[data-year='2016']::before,
	section[data-year='2015'] + section[data-year='2015']::before,
	section[data-year='2014'] + section[data-year='2014']::before,
	section[data-year='2013'] + section[data-year='2013']::before,
	section[data-year='2012'] + section[data-year='2012']::before,
	section[data-year='2011'] + section[data-year='2011']::before {
		content: '';
		padding: 0;
		border: 0;
	}
</style>
