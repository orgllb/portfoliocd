import { getAllProjects } from '../../data/projects'

export async function GET() {
  const projects = getAllProjects()
  return Response.json(projects)
}