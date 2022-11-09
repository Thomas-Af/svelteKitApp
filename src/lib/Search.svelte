<script lang='ts'>
    export let data:any;

    let value:string = '';
    let array_name:string[] = [];        

  function searchFunction(value:any) {
    console.log('data', data)
    console.log('value', value)
    
    let valueMini:string = value.value.toLowerCase();
    console.log('valueMini', valueMini)
    
    data.forEach(element => {
      if (element.name.toLowerCase().includes(valueMini)) {
        console.log('son nom est', element.name)
        array_name.push(element.name)

        array_name = [...new Set(array_name)]

        console.log(array_name)
      } else {
        // console.log('jai pas trouvé')
        if (array_name.includes(element.name)) {
          array_name = array_name.filter((name) => name !== element.name)
        }
      }
    });
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