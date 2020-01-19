<style lang="scss">
 @import "./static/global.scss";

main {
	position: relative;
	max-width: 1200px;
	margin: 0 auto;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: stretch;
	height: 100vh;
}

@media (max-width:1279px) {
	main {
		padding: 0 32px;
	}
}

@media (max-width:767px) {
	main {
		padding: 0 16px;
	}
}

main>div {
	flex: 0 0 50%;
}

#homenav {
	display: flex;
	justify-content: center;
}

#homenav li {
	font-family: lemonde-journal, serif;
	font-weight: 600;
	@include u4;
	margin-bottom: 16px;
}

#homenav a {
	text-decoration: none;
}

#thetitle {
	font-family: archivo-black, sans-serif;
	font-size: 400;
	letter-spacing: -2px;
	@include u4;
	line-height: 1;
}

#titlesection span{
	color: #666;
}
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<main id="homecontainer">
  <div id="titlesection">
    <h1 id="thetitle">Andrés Canelones</h1>
	<span id="mydesc">UX designer & Web developer based in Panama City.</span>
	<br>
	<span><a href="tel:+507 6140.0564">+507 6140.0564</a> &nbsp;/&nbsp; <a href="mailto:hello@andrescanelones.me">hello@andrescanelones.me</a> &nbsp;/&nbsp; <a href="https://twitter.com/handfulofcats">Twitter</a> &nbsp;/&nbsp; <a>my resume</a></span>
  </div>
	<nav id="homenav">
		<ul>
			<li><a href="/work/digitalproduct">01. Digital Product</a></li>
			<li><a>02. Web Design</a></li>
			<li><a>03. Printed Media</a></li>
			<li><a href="/contact">04. Contact</a></li>
		</ul>
	</nav>
</main>
