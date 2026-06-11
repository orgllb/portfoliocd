import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Skills — BB Creative Director',
}

const skillGroups = [
  {
    number: '01',
    category: 'Design',
    skills: ['Brand Identity', 'Typography', 'Art Direction', 'Editorial Design', 'UI/UX Design', 'Motion Graphics'],
  },
  {
    number: '02',
    category: 'Digital',
    skills: ['Next.js', 'React', 'Tailwind CSS', 'HTML5 / CSS3', 'JavaScript', 'Figma'],
  },
  {
    number: '03',
    category: 'Tools',
    skills: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', 'After Effects', 'Git / GitHub', 'Vercel'],
  },
  {
    number: '04',
    category: 'Strategy',
    skills: ['Creative Direction', 'Brand Strategy', 'Content Planning', 'Campaign Development', 'Client Presentation', 'Project Management'],
  },
]

export default function Skills() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-8 py-12">

        <p className="text-[10px] tracking-[0.3em] text-[#444440] uppercase mb-4">
          Skills
        </p>
        <h1
          style={{ fontFamily: 'var(--font-display)' }}
          className="text-[clamp(3rem,8vw,6rem)] text-[#EBEBEB] leading-none mb-16"
        >
          Expertise
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a18]">
          {skillGroups.map((group) => (
            <div key={group.number} className="bg-[#111111] p-10">
              <p className="text-[10px] tracking-[0.3em] text-[#333330] uppercase mb-8">
                {group.number} — {group.category}
              </p>
              <ul className="list-none space-y-4">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-4 border-b border-[#1a1a18] pb-4"
                  >
                    <span className="w-1 h-1 bg-[#333330] rounded-full flex-shrink-0" />
                    <span
                      style={{ fontFamily: 'var(--font-display)' }}
                      className="text-xl text-[#555550] tracking-wide hover:text-[#EBEBEB] transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </main>
      <Footer />
    </div>
  )
}