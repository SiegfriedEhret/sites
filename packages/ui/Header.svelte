<header>
	<slot name="title" />
	<nav>
		<slot name="links" />
	</nav>
</header>

<style>
	nav {
		display: flex;
		gap: 1ch;
	}

	@media screen and (min-width: 60rem) {
		nav {
			flex-direction: column;
			gap: 0;
		}
	}
</style>
