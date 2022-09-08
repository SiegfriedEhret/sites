<script lang="ts">
	import type { Media } from '@packages/utils/types/media';

	export let image: Media;
</script>

<figure>
	<img src={image.url} alt={image.title} width={image.width} height={image.height} />
	<figcaption>{image.title}</figcaption>
</figure>

<style>
	img {
		width: 100%;
		height: auto;
		max-height: 50rem;
		object-fit: cover;
	}
</style>
