// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://yamatoworks.net',

  // 独自ドメインのときは「/」に。global.cssの/yamatoworks/の部分../に変更。
  // site: 'https://yamazo32.github.io',
  // base: '/yamatoworks/', // 独自ドメインのときは「/」に。global.cssの/yamatoworks/の部分../に変更。
  base: '/',

  integrations: [
    sitemap({
      filter: (page) =>
        ![
          'https://yamatoworks.net/404/',
          'https://yamatoworks.net/contact/',
          'https://yamatoworks.net/law/',
        ].includes(page),
    }),
  ],
});
