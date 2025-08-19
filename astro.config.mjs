// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://yamazo32.github.io',
  base: '/yamatoworks/', // 独自ドメインのときは「/」に。global.cssの/yamatoworks/の部分../に変更。
});
