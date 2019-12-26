<script>
  export let segment;
</script>

<style>
  nav {
    border-bottom: 1px solid #e1e1e1;
	font-weight: 300;
  }

  #homelink {
	  font-family: archivo-black, sans-serif;
	  font-size: 1.25em;
	  letter-spacing: -0.2px;
  }

  #navcontainer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 1200px;
		margin: 0 auto;
		height: 80px;
  }

  ul {
	display: flex;
    margin: 0;
	padding: 0;
	justify-content: space-between;
	flex: 0 0 60%;
  }

  li {
    display: block;
    float: left;
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
    padding: 1em 0.5em;
	  display: block;
    color: #808080;
    font-size: 14px;
  }
</style>

<nav>
  <div id="navcontainer">
    <div>
      <a id="homelink" href=".">Andrés Canelones</a>
    </div>
    <ul>
      <li><a class:selected={segment === 'digitalproduct'} href="./work/digitalproduct">01. Digital Product</a></li>
      <li><a class:selected={segment === 'web'} href="./work/web">02. Web Development</a></li>
      <li><a class:selected={segment === 'print'} href="./work/print">03. Printed Media</a></li>
      <li><a class:selected={segment === 'contact'} href="./contact">04. Contact</a></li>
    </ul>
  </div>

</nav>
