<header>
	<nav>
		<slot name="title" />
		<span>(</span>
		<slot name="links" />
		<span>)</span>
	</nav>
</header>

<style>
header {
	background: var(--lake-red);
	color: var(--wevet);
}
nav {
	max-width: 800px;
	margin: 0 auto;
	padding: 0 1rem;
}
@media screen and (min-width: 800px) {
	nav {
		padding: 0;
	}
}
</style>