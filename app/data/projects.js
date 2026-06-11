export const projects = [
  {
    id: 1,
    slug: 'maad-magazine',
    title: 'Maad Magazine',
    category: 'Creative Direction',
    year: '2023',
    description: 'Created and launched Maad Magazine, an NFT-focused creative project. Led all social content strategy, content design and web design. Developed and marketed our own NFT collection while building a full merchandise brand using our NFT artwork as the foundation.',
    tags: ['NFT', 'Branding', 'Social Media', 'Merchandise'],
  },
  {
    id: 2,
    slug: 'peakd',
    title: "Peak'd",
    category: 'Brand & Web',
    year: '2024',
    description: "Built Peak'd from the ground up as an independent creative brand. Designed and developed the full brand identity and website, while producing aesthetic video content, launching a podcast and organising community events.",
    tags: ['Branding', 'Web Design', 'Video', 'Podcast'],
  },
  {
    id: 3,
    slug: 'mongolz',
    title: 'Mongolz',
    category: 'Web Development',
    year: '2024',
    description: 'Full stack web development for Mongolz, one of the biggest esports community teams. Responsible for the complete website build from UI/UX design through to development, deployment and ongoing maintenance.',
    tags: ['Next.js', 'React', 'Full Stack', 'Esports'],
  },
]

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) || null
}

export function getAllProjects() {
  return projects
}