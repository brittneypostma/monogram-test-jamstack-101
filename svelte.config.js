import { vitePreprocess } from "@sveltejs/kit/vite"
import adapter from '@sveltejs/adapter-auto'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    vitePreprocess({
      postcss: true
    })
  ],

  kit: {
    adapter: adapter()
  }
}

export default config
