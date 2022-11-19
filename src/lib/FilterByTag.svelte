<script lang='ts'>
  export let tag:any;
  import { createEventDispatcher } from "svelte";

  const tagSelect = createEventDispatcher();

  function selectedTag(tag:any) {
    tagSelect('tag', {
      selectedTag: tag
    });
  }
</script>

<div class="tagButton" on:click={() => selectedTag({tag})}>{tag}</div>


<style>
.tagButton {
  background-color: orangered;
  border: 2px solid orangered;
  color: white;
  border-radius: 25px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  min-width: 100px;
  width: fit-content;
  cursor: pointer;
  margin: 10px;
}
.tagButton:hover {
  background-color: #242424;
  border: 2px solid white;
}
.tagButton:active {
  background-color: white;
  border: 2px solid white;
  color: orangered;
}
</style>