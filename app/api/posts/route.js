import { getAllPosts } from '../../data/posts'

export async function GET() {
  const posts = getAllPosts()
  return Response.json(posts)
}