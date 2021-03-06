import { writable } from 'svelte/store';

export const columns     = writable([]);
export const history     = writable([]);
export const moves       = writable(0);
export const settings    = writable({});
export const timeElapsed = writable(0);
export const started     = writable(false);