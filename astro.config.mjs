// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://yamazo32.github.io',
  base: '/', // 独自ドメインのときは「/」に。global.cssの/yamatoworks/の部分../に変更。
  // base: '/yamatoworks/', // 独自ドメインのときは「/」に。global.cssの/yamatoworks/の部分../に変更。
});

// npm run deploy 後は必ず、GithubpageのCustomDomainを確認。空なら入力すること。
