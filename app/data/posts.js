export const posts = [
  {
    id: 1,
    slug: 'on-restraint-in-design',
    title: 'On Restraint in Design',
    date: '12 May 2025',
    readTime: '4 min',
    category: 'Design Thinking',
    excerpt: 'Why doing less is almost always the harder and better choice.',
    body: [
      'There is a particular kind of courage in restraint. In a world that rewards loudness, choosing to strip back requires a confidence that most designers never fully develop.',
      'The best work has an economy to it. Every element earns its place. Nothing is decorative for decoration sake. The white space is not empty, it is doing work.',
      'When you are staring at a design that feels unfinished, the temptation is always to add more. But the discipline is to sit with the discomfort and ask: does this need anything else?',
      'Often, the answer is no.',
    ],
  },
  {
    id: 2,
    slug: 'building-a-brand-from-nothing',
    title: 'Building a Brand From Nothing',
    date: '3 Apr 2025',
    readTime: '6 min',
    category: 'Process',
    excerpt: 'The process behind creating an identity when there are no rules yet.',
    body: [
      'The blank page is simultaneously the most terrifying and most exciting thing in creative work. When a client comes with nothing, no existing identity, no legacy, the possibility space is infinite.',
      'That is both the gift and the curse.',
      'The first thing I do is slow down. The best brand foundations are built on understanding, not instinct. Who is this for? What do they believe? What do they refuse to be?',
      'Questions first. Marks second.',
    ],
  },
  {
    id: 3,
    slug: 'the-typography-obsession',
    title: 'The Typography Obsession',
    date: '18 Feb 2025',
    readTime: '5 min',
    category: 'Typography',
    excerpt: 'Why type is the single most important design decision you will make.',
    body: [
      'If I had to keep only one design skill and discard everything else, I would keep typography. Not Photoshop. Not illustration. Not even colour theory.',
      'Type is everything.',
      'It determines the personality of a brand before the logo is even seen. It sets the rhythm of a page and communicates hierarchy, emotion, and intelligence.',
      'Most designers treat type as an afterthought. They pick a font because it feels right and move on. But great typography is a craft, and craft requires patience.',
    ],
  },
]

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug) || null
}

export function getAllPosts() {
  return posts
}