<script>
  import { displaymenu } from '../stores.js';

  export let segment;
  let showmenu;

  function toggleMenu() {
    displaymenu.update(value => !value);
  }
</script>

<style lang="scss">
@import "./static/global.scss";
  nav {
    border-bottom: 1px solid $vlight-gray;
    font-weight: 300;
    position: static;
    width: 100%;
    z-index: 10;
    box-sizing: border-box;
    position: fixed;
    background: #FFF;
    height: 80px;
    overflow: hidden;
    transition: height 0.3s ease-in-out;
    display: flex;
    flex-flow: column;
  }

  #homelink {
	  font-family: archivo-black, sans-serif;
	  font-size: 1.25em;
	  letter-spacing: -0.2px;
  }

  #navcontainer {
    display: flex;
    box-sizing: border-box;
		justify-content: space-between;
		align-items: center;
		margin: 0 auto;
    height: 80px;
    width: 100%;
    flex: 0 0 auto;
    padding: 0 48px;
  }

  #fullscreen-nav ul {
    margin-bottom: 148px;
    transition: margin-bottom 0.8s ease, opacity 0.4s 0.3s ease;
    opacity: 0;
  }

  #fullscreen-nav ul.onDisplay {
    margin-bottom: 80px;
    opacity: 1;
  }

  #fullscreen-nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 1 auto;
    transition: height 5.7s ease;
  }

  #fullscreen-nav  li {
    font-family: lemonde-journal, serif;
    font-weight: 600;
    @include u4;
    margin-bottom: 16px;
  }

  .selected {
    position: relative;
    display: inline-block;
  }

  #homelink {
    text-decoration: none;
  }

  ul a {
    text-decoration: none;
  }

  nav.displaynav {
    height: 100vh;
  }

  @media (max-width:$bp-md) {
		#navcontainer {
			padding: 0 32px;
		}
	}

	@media (max-width:$bp-sm) {
		#navcontainer {
			padding: 0 16px;
		}
	}
</style>

<nav class="{$displaymenu ? 'displaynav' : ''}">
  <div id="navcontainer">
    <div>
      <a id="homelink" href=".">Andrés Canelones</a>
    </div>
    <button on:click={toggleMenu}>menu</button>
  </div>
  <div id="fullscreen-nav">
    <ul class="{$displaymenu ? 'onDisplay' : ''}">
      <li><a on:click={toggleMenu} class:selected={segment === 'digitalproduct'} href="./work/digitalproduct">01. Digital Product</a></li>
      <li><a on:click={toggleMenu} class:selected={segment === 'web'} href="./work/web">02. Web Development</a></li>
      <li><a on:click={toggleMenu} class:selected={segment === 'print'} href="./work/print">03. Printed Media</a></li>
      <li><a on:click={toggleMenu} class:selected={segment === 'contact'} href="./contact">04. Contact</a></li>
    </ul>
  </div>
</nav>
