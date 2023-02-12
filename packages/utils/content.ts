import Markdoc from '@markdoc/markdoc';
import type { Config } from '@markdoc/markdoc';
import Tag from '@markdoc/markdoc/src/tag';
import hljs from 'highlight.js';

interface Title extends HTMLElement {
	id: string;
	title: string;
	level: string;
}

const heading = {
	...Markdoc.nodes.heading,
	transform(node, config) {
		const base = Markdoc.nodes.heading.transform(node, config);
		base.attributes.id = generateSlug(base.children[0]);
		return base;
	}
};

function collectHeadings(node, sections: Title[] = []) {
	if (node && node.name) {
		// Match all h1, h2, h3… tags
		if (node.name.match(/h\d/)) {
			const title = node.children[0];

			if (typeof title === 'string') {
				sections.push({
					...node.attributes,
					title,
					level: node.name
				});
			}
		}

		if (node.children) {
			for (const child of node.children) {
				collectHeadings(child, sections);
			}
		}
	}

	return sections;
}

interface ConvertedContent {
	html: string;
	headings: Title[];
}

export async function convert(input: string): Promise<ConvertedContent> {
	const codeBlocks = new Map();

	const fence = {
		...Markdoc.nodes.fence,
		async transform(node, config) {
			const { content, language = 'text' } = node.attributes;
			const id = crypto.randomUUID();
			const code = hljs.highlight(content, { language }).value;
			codeBlocks.set(id, code);

			return new Tag('pre', {}, [new Tag('code', {}, [id])]);
		}
	};

	const config: Config = {
		tags: {},
		nodes: {
			fence,
			heading
		},
		variables: {}
	};

	const ast = Markdoc.parse(input);
	const content = await Markdoc.transform(ast, config);

	const headings = collectHeadings(content);
	let html = Markdoc.renderers.html(content);
	for (const [key, value] of codeBlocks.entries()) {
		html = html.replace(key, value);
	}

	html = html.replaceAll(/&lt;!-- TAGS: [\w-,]+ --&gt;/g, '');

	return {
		headings,
		html
	};
}

export function generateSlug(input: string) {
	return input
		.trim()
		.toLowerCase()
		.normalize('NFKD')
		.replace(/[^\w]/g, '-')
		.replace(/-+/g, '-')
		.replace(/^-+|-+$/g, '');
}
