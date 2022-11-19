<script lang='ts'>
  import { createEventDispatcher } from "svelte";
  const searchBar = createEventDispatcher();

  function searched(search:any) {
    searchBar('search', {
      searched: search
    });
  }

  let value:string = '';
</script>

<div class="searchbar">
  <input type="text" placeholder="Rechercher un nom ou un prénom" bind:value={value} on:keyup={() => searched({value})}>
</div>

<style lang="scss">
.searchbar {
  margin-left: 10%;
  margin-right: 10%;
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid black;
  }
}
</style>