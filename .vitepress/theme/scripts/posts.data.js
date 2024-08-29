import { createContentLoader } from "vitepress";

const EXCERPT_LENGTH = 100;

export default createContentLoader('posts/*.md', {
    excerpt: true,
    transform(rawData) {
        return rawData
            .map(({ url, frontmatter, excerpt }) => ({
                title: frontmatter.title,
                publishDate: formatDate(frontmatter.publishDate),
                url: url,
                excerpt: excerpt
            }))
            .sort((a, b) => b.publishDate.time - a.publishDate.time)
    }
});

function formatDate(publishDate) {
    const date = new Date(publishDate)
    date.setUTCHours(12)
    return {
        time: +date,
        object: publishDate,
        string: date.toLocaleDateString('en-UK', {
            day: "numeric",
            month: "long",
            year: "numeric"
        })
    }
}
