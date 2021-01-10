import { writable } from 'svelte/store';

export const displaymenu = writable(false);

export const lightBoxCaption = writable({display:false, caption:""}); // Store for setting the necessary info for a lightbox view

export const breakpoint = writable("");