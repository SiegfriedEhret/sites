<div class="container">
	<footer>
		<slot name="awesome" />
		<nav>
			<a href="/rss.xml">📫 RSS</a>
			<span class="separator">|</span>
			<slot name="link" />
			<span class="separator">|</span>
			<a href="https://mastodon.ehret.me/@SiegfriedEhret" rel="me" title="🐘 mastodon">
				🐘 mastodon
			</a>
		</nav>
		<slot name="made-with" />
	</footer>
</div>

<style>
.container {
	border-top: 1px solid var(--prime);
	margin-top: 4rem;
}
footer {
	max-width: 800px;
	margin: 0 auto;
	padding: 0 1rem;
}
.separator {
	margin: 0 .5rem;
}
@media screen and (min-width: 800px) {
	footer {
		padding: 0;
	}
}
</style>