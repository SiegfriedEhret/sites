import { Post } from '@packages/utils/types/posts';

export function excludeAlbums(item: Post) {
	return ![
		'between-the-buried-and-me-colors-ii-2021',
		'carcass-torn-arteries-2021',
		'injury-reserve-by-the-time-i-get-to-phoenix-2021',
		'isaiah-rashad-the-house-is-burning-2021',
		'kanye-west-donda-2021',
		'lingua-ignota-sinner-get-ready-2021',
		'the-killers-pressure-machine-2021',
		'villagers-fever-dreams-2021',
		'yola-stand-for-myself-2021',
		'tokyo-jihen-music-2021'
	].includes(item.slug);
}
