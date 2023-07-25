import { getCollection } from "astro:content"

async function getPosts() {
    const posts = (await getCollection('blog')).sort((a:any, b:any) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf)
    return posts.map((post) => ({
        slug: post.slug,
        title: post.data.title,
        description: post.data.description,
        date: post.data.pubDate,
        tags: post.data.tags,
        image: post.data.image.src,
        alt: post.data.image.alt,
    }))
}

export async function get({}){
    return new Response(JSON.stringify(await getPosts()), {
        status: 200,
        headers: {"Content-Type": "application/json"}
    })
}