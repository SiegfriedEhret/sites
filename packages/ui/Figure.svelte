<script lang="ts">
	import type { Media } from '@packages/utils/types/media';

	export let item: Media;
	export let width: number;
	export let height: number;
</script>

<figure>
	<img src={item.url} alt={item.title} width={width || item.width} height={height || item.height} />
	<figcaption class="text-center">{item.title}</figcaption>
</figure>
