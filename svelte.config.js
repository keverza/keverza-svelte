import adapter from '@sveltejs/adapter-auto';
import preprocess from "svelte-preprocess";
import path from 'path'




/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		vite: {
		resolve: {
			alias: {
				$stores: path.resolve( "./src/stores"),
				$components: path.resolve( "./src/components"),
				$api: path.resolve( "./src/routes/api"),				
				$styles: path.resolve( "./src/styles"),
				
			}
		}
	}
	},
	preprocess: preprocess(),
	experimental:{
		useVitePreprocess: true
	},
	
};

export default config;
