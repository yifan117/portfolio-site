import sveltePreprocess from 'svelte-preprocess'

import adaptor from '@sveltejs/adapter-netlify'

const config = {
  kit: {
    target: '#svelte',
    adapter: adapter()
  }
};

export default config;
