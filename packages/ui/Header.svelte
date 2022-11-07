<header>
	<slot name="title" />
	<nav>
		<slot name="links" />
	</nav>
</header>

<style>
	header {
		background: var(--lake-red);
		color: var(--wevet);
		padding: 1rem;
	}

	@media screen and (min-width: 60rem) {
		nav {
			display: flex;
			flex-direction: column;
		}
	}
</style>
