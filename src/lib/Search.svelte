<script lang='ts'>

  let value:string = '';

  function searchFunction(value:any) {
    console.log(value)
  }
</script>

<div class="searchbar">
  <input type="text" placeholder="Votre recherche" bind:value={value} on:keyup={() => searchFunction({value})}>
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