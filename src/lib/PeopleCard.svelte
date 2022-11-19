<script lang=ts>
  export let infos:any;
  export let email:any;
  export let pass:any;
</script>

<div class="card">
  <p class="cName">{infos.name}</p>
  {#if email !== '' && pass!== ''}
    <p>{infos.phone}</p>
    <p>{infos.email}</p>
  {:else}
    <p class="cItalic">Connectez vous pour voir ces infos</p>
  {/if}
  <p>{infos.city}, {infos.country}</p>
  <p>{infos.post}, {infos.company}</p>
</div>

<style>
.card {
  width: 300px;
  padding: 15px;
  background-color: white;
  color: black;
  border-radius: 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  margin-bottom: 15px;
  border: 1px solid burlywood;
}

.card .cName {
  font-weight: bold;
  font-size: 18px;
  color: orangered;
  text-align: center;
}

.card .cItalic {
  font-weight: bold;
  font-size: 15px;
  font-style: italic;
  text-align: center;
}
</style>