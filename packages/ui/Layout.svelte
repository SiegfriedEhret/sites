<div class="sidebar">
	<slot name="header" />

	<nav>
		<a href="/rss.xml">📫 RSS</a>
		<slot name="link" />
		<a href="https://mastodon.ehret.me/@SiegfriedEhret" rel="me" title="🐘 mastodon">
			🐘 mastodon
		</a>
	</nav>
</div>

<div class="burrito">
	<slot name="main" />
</div>

<style>
	.sidebar {
		position: fixed;
		height: 100vh;
		width: 15rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 1rem;
		background: var(--lake-red);
		color: var(--wevet);
	}

	.burrito {
		margin-left: 16rem;
	}

	nav {
		display: flex;
		gap: 1ch;
	}

	@media screen and (min-width: 60rem) {
		.layout {
			min-height: 100vh;
			grid-template-columns: 15rem 1fr;
		}

		.sidebar {
			height: 100vh;
		}

		nav {
			flex-direction: column;
			gap: 0;
		}
	}
</style>
