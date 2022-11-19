<nav>
  <a href="/">Logo</a>
  <div class="links">
    <a href="/">Home</a>
    <a href="/listing">Listing</a>
    <a href="/login">Login / Account</a>
  </div>
</nav>
<slot></slot>
<footer>
  <a href="/">Logo</a>
  <div class="links linksFooter">
    <a href="/">Home</a>
    <a href="/listing">Listing</a>
    <a href="/login">Login / Account</a>
  </div>
</footer>

<style lang="scss">
nav, footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: gainsboro;
  color: black;
  padding: 20px;
  padding-left: 10%;
  padding-right: 10%;
  margin-bottom: 40px;
  a {
    text-decoration: none;
    color: black;
  }
  .links {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    &.linksFooter {
      flex-direction: column;
      align-items: flex-start;
    }
  }
}
footer {
  justify-content: space-evenly;
  margin-bottom: 0;
}
</style>