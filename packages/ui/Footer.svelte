<div class="mt-16 border-t border-t-prime">
	<footer class="prose prose-lg mx-auto p-4 lg:px-0">
		<slot name="awesome" />
		<nav>
			<a href="/rss.xml">📫 RSS</a>
			<span class="mx-2">|</span>
			<slot name="link" />
			<span class="mx-2">|</span>
			<a href="https://mastodon.ehret.me/@SiegfriedEhret" rel="me" title="🐘 mastodon">
				🐘 mastodon
			</a>
		</nav>
		<slot name="made-with" />
	</footer>
</div>
