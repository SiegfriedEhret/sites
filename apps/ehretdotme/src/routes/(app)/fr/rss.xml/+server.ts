export async function GET() {
	return new Response(undefined, {
		status: 301,
		headers: {
			location: 'https://sieg.fr/ied/rss.xml'
		}
	});
}
