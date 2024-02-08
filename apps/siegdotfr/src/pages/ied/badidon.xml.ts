import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
    const items = (await getCollection("badidon"))
        .map((entry, index) => {
            const episodeNumber = index + 1;
            const link = `${context.site}ied/badidon/${entry.slug}`;
            return {
                link,
                guid: link,
                title: entry.data.title,
                description: entry.data.description,
                pubDate: entry.data.date,
                customData: `<enclosure url="${entry.data.audioUrl}" length="${entry.data.audioSize}" type="audio/mpeg" />
<itunes:episode>${episodeNumber}</itunes:episode>
<itunes:episodeType>false</itunes:episodeType>
<itunes:duration>${entry.data.audioDuration}</itunes:duration>
<itunes:image>${context.site}${entry.data.image}</itunes:image>
`
            }
        })
        .sort((a, b) =>
            b.pubDate.toISOString().localeCompare(a.pubDate.toISOString()),
        )

    const link = `${context.site}/ied/badidon.xml`;
    return rss({
        title: "Badidon.",
        description: "Le podcast qui vous fait dire « badidon ». Par Ayako et Siegfried.",
        site: `${context.site}/ied`,
        items,
        xmlns: {
            "itunes": "http://www.itunes.com/dtds/podcast-1.0.dtd",
            "podcast": "https://github.com/Podcastindex-org/podcast-namespace/blob/main/docs/1.0.md",
            "atom": "http://www.w3.org/2005/Atom",
            "content": "http://purl.org/rss/1.0/modules/content/",
        },
        customData: `<atom:link href="${link}" rel="self" type="application/rss+xml" />
<language>fr</language>
<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
<link>${link}</link>
<author>Siegfried Ehret</author>
<copyright>All rights reserved</copyright>
<itunes:author>Siegfried Ehret</itunes:author>
<itunes:image>${context.site}images/badidon-badidon.png</itunes:image>
<itunes:summary>Le podcast qui vous fait dire « badidon ». Par Ayako et Siegfried.</itunes:summary>
<itunes:type>episodic</itunes:type>
<itunes:explicit>false</itunes:explicit>
<itunes:category text="Society &amp; Culture"></itunes:category>
<category>Society &amp;amp; Culture</category>
<itunes:owner>
    <itunes:name>Siegfried Ehret</itunes:name>
    <itunes:email>badidon@sieg.fr</itunes:email>
</itunes:owner>
<itunes:keywords>
Culture, musique, développement, France, Japon
</itunes:keywords>
`,
    });
}