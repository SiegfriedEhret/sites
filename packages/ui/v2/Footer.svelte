<footer>
	<slot />

	<nav>
		<a class="link" href="/rss.xml">📫 RSS</a>
		<slot name="link" />
		<a class="link" href="https://mastodon.ehret.me/@SiegfriedEhret" rel="me" title="🐘 mastodon">
			🐘 mastodon
		</a>
	</nav>
</footer>

<style>
	footer {
		border-top: 1px solid var(--lake-red);
		text-align: center;
		margin-top: 16px;
	}

	nav {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 16px;
	}

	@media screen and (min-width: 40rem) {
		nav {
			flex-direction: row;
		}
	}
</style>
