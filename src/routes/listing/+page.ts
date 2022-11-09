import type { PageLoad } from './$types';
import type {People} from '$lib/types';
 
export const load: PageLoad = async ({ fetch }) => {
  const res = await fetch('src/data/people.json');
  const item:People[] = await res.json();
 
  return { item };
}