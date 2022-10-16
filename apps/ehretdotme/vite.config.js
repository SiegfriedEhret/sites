import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	plugins: [sveltekit()],
	server: {
		port: 5173
	}
};

export default config;
