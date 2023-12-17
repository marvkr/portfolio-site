import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_w4DOktt1.mjs';

const _page0  = () => import('./chunks/generic_ti2FU9uV.mjs');
const _page1  = () => import('./chunks/index_tOoSWZFb.mjs');
const _page2  = () => import('./chunks/about_-CHZjxkh.mjs');
const _page3  = () => import('./chunks/menu_2nJ81Hvk.mjs');const pageMap = new Map([["node_modules/.pnpm/astro@4.0.3_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/about.astro", _page2],["src/pages/menu.astro", _page3]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
