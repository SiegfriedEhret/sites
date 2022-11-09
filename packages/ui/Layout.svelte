<div class="layout">
	<div class="sidebar">
		<div class="burrito">
			<slot name="header" />

			<nav>
				<a href="/rss.xml">📫 RSS</a>
				<slot name="link" />
				<a href="https://mastodon.ehret.me/@SiegfriedEhret" rel="me" title="🐘 mastodon">
					🐘 mastodon
				</a>
			</nav>
		</div>
	</div>
	<slot name="main" />
</div>

<style>
	.layout {
		display: grid;
		gap: 1rem;
	}

	.sidebar {
		background: var(--lake-red);
		color: var(--wevet);
	}

	.burrito {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 1rem;
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

		.burrito {
			height: 100vh;
		}

		nav {
			flex-direction: column;
			gap: 0;
		}
	}
</style>
