export type Language = 'en' | 'fr' | 'test';

export const ui = {
	en: {
		'post.all-notes': 'all notes',
		'post.all-notes-link': '/notes',
		'post.last-modified': 'Last modified on '
	},
	fr: {
		'post.all-notes': 'toutes les notes',
		'post.all-notes-link': '/ied/notes',
		'post.last-modified': 'Dernière modification le '
	},
	test: {
		'post.all-notes': 'all notes',
		'post.all-notes-link': '/notes',
		'post.last-modified': 'Last modified on '
	}
} as const;

export function useTranslations(lang: Language = 'en') {
	return function t(key: keyof (typeof ui)[Language]) {
		return ui[lang][key] || ui[lang][key];
	};
}
