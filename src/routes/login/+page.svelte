<script>
  import { email, pass, connection } from '../../store';

  function disconnect() {
    $email = ''
    $pass = ''
    $connection = ''
  }

</script>

<div class="container">
  <div class="form " class:connected="{$connection}">
    <label for="mail">Mail</label>
    <input name="mail" type="text" placeholder="mail@mail.fr" bind:value={$email}>
    <label for="password">Mot de passe</label>
    <input name="password" type="password" placeholder="mot de passe" bind:value={$pass}>
    <div class="formButton" on:click="{() => $connection = !$connection}">Se connecter</div>
  </div>
  <div class="infos" class:connected="{$connection == false}">
    <h2>Vous êtes bien connectés</h2>

    <div class="card">
      <div class="cText">Vos information personnelles</div>
      <div class="cMail">Votre mail : <span>{$email}</span></div>
      <div class="cPass">Votre mot de passe : <span>{$pass}</span></div>
    </div>

    <div class="disconnect">
      <div class="dBtn" on:click={disconnect}>Se deconnecter</div>
    </div>

  </div>
</div>


<style lang="scss">
  .container {
    margin-left: 10%;
    margin-right: 10%;
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
    .infos {
      margin-top: 60px;
      margin-bottom: 60px;
      padding-left: 10%;
      padding-right: 10%;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;
      width: fit-content;
      .card {
        background-color: gainsboro;
        border-radius: 10px;
        padding: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        .cText {
          font-weight: bold;
          font-size: 18px;
        }
        .cMail, .cPass {
          span {
            font-weight: bold;
          }
        }
      }
      .disconnect {
        .dBtn {
          background-color: royalblue;
          border: 2px solid white;
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
      }
    }
  }
  .connected {
    display: none!important;
  }
</style>