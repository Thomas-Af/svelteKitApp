import { writable } from 'svelte/store';

export let email = writable();
export let pass = writable();
export let connection = writable();

email.set('');
pass.set('');
connection.set(false);