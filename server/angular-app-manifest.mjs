
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://analiacasali.github.io/ProgI_proyAngular2025/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/ProgI_proyAngular2025/vista"
  },
  {
    "renderMode": 2,
    "route": "/ProgI_proyAngular2025/login"
  },
  {
    "renderMode": 2,
    "route": "/ProgI_proyAngular2025/lista"
  },
  {
    "renderMode": 2,
    "route": "/ProgI_proyAngular2025/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5035, hash: '7ae8b60fffbb96b916c29a211bd07d92d3d2e1024d89f28d7d27e7be72990463', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1007, hash: '8b28f112303cf8b304977670668d9363055ee1c0dd590788cc6ec558245926a2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 13421, hash: '2fbdcc20fb5d921b78d7c7a765189c99d677d8e6fa05386eba5ce68fbcded152', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'vista/index.html': {size: 15368, hash: 'dd5b0469140a37848e26ffcc5679b697098710da6c5b0b1525288b34c50f51b8', text: () => import('./assets-chunks/vista_index_html.mjs').then(m => m.default)},
    'lista/index.html': {size: 13536, hash: 'd13865031782dc9d877cdfd9fae9331ac987ebf86b302b0a0906e9b272ce5bdb', text: () => import('./assets-chunks/lista_index_html.mjs').then(m => m.default)},
    'styles-VRDYZCWE.css': {size: 230966, hash: 'yJEOwb9t5lw', text: () => import('./assets-chunks/styles-VRDYZCWE_css.mjs').then(m => m.default)}
  },
};
