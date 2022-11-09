<script>
    import { email, pass, connection } from '..//store';


</script>



<div class="home">
  <div class="hLeft">
    <h1>Bienvenue sur l'annuaire</h1>
    <p>Connectez vous pour avoir accès au différentes pages et aux profils des personnes</p>
  </div>
  <div class="hRight">
    {#if $email == '' || $pass == '' || $connection == false}
      <div class="form ">
        <label for="mail">Mail</label>
        <input name="mail" type="text" placeholder="mail@mail.fr" bind:value={$email}>
        <label for="password">Mot de passe</label>
        <input name="password" type="text" placeholder="mot de passe" bind:value={$pass}>
        <div class="formButton" on:click="{() => $connection = !$connection}">Se connecter</div>
      </div>
    {:else if $email !== '' || $pass !== '' || $connection == true}
      <div class="connect">
        <div class="cText">Vous êtes bien connecté</div>
        <div class="cTitle">Rendez vous sur la page <a href="/listing">Listing</a> pour voir la liste de tous les étudiants</div>
      </div>
    {/if}
  </div>

</div>


<style lang="scss">
  .home {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin-left: auto;
    margin-right: auto;
    max-width: 1000px;
    padding-bottom: 70px;
    padding-top: 70px;
    height: 60vh;
    .hLeft {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      text-align: center;
      h1 {
        font-size: 30px;
        font-weight: bold;
        font-family: 'Barlow Condensed', sans-serif;

      }
      p {
        font-size: 20px;
        max-width: 400px;
      }
    }
    .hRight{
      width: 50%;
      .form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        width: 100%;
        input {
          width: 100%;
          border: 1px solid black;
          padding: 10px;
        }
        label {
          padding-top: 15px;
        }
        button {
          margin-top: 15px;
        }
        .formButton {
          border: 0;
          background-color: royalblue;
          color: white;
          padding: 10px;
          width: fit-content;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          &:hover {
            background-color: blue;
          }
        }
      }
      .connect {
        max-width: 200px;
        margin-right: auto;
        margin-left: auto;
        .cTitle, .cText {
          text-align: center;
          a {
            text-decoration: none;
            font-weight: bold;
            color: black;
          }
        }
        .cText {
          text-align: center;
          margin-bottom: 20px;
        }
      }
    }
  }
</style>
