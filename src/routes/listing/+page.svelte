<script lang="ts">
import PeopleList from "../../lib/PeopleList.svelte";
import type {People} from '$lib/types';

export let data: People[];
</script>

<div class="list">
  <PeopleList data={data}/>
</div>