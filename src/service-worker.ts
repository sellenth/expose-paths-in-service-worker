import { paths } from '$service-worker';

self.addEventListener('install', (_) => {
  console.log('you should be seeing the svelte-config paths displayed below (from the service worker)')
  console.log(paths);
});