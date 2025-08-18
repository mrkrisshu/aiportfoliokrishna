import Image from 'next/image';
import { Image as Img } from 'lucide-react';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// Define your projects
const PROJECT_CONTENT = [
  {
    title: 'Online Grocery Store',
    description:
      'An online grocery store platform built to provide seamless shopping experience with product listings, cart, checkout, and order management.',
    techStack: ['PHP', 'MySQL', 'JavaScript', 'CSS3'],
    date: '2025',
    link: [
      {
        name: 'website',
        url: 'https://bhuvaneswaristores.great-site.net/index.php', // Replace with actual URL if available
      },
    ],
    images: [
      {
        src: '/grocery2.png',
        alt: 'Online Grocery Store landing page',
      },
      {
        src: '/grocery3.png',
        alt: 'Product page of Grocery Store',
      },
    ],
  },
  {
    title: 'Education Flash Cards & Quiz Tracker',
    description:
      'A web application for students to study using flashcards and track quiz performance. Built for better learning and progress monitoring.',
    techStack: ['React', 'Node.js', 'MongoDB', 'TailwindCSS'],
    date: '2025',
    links: [
      {
        name: 'website',
        url: 'https://edumasteryy.vercel.app/', // Replace with actual URL
      },
      {
        name: 'github',
        url: 'https://github.com/mrkrisshu/Edu-mastery', // Replace with GitHub link
      },
    ],
    images: [
      {
        src: '/flashcard1.png',
        alt: 'Flash Cards Dashboard',
      },
      {
        src: '/flashcard2.png',
        alt: 'Quiz Tracker Page',
      },
    ],
  },
];

// Define interface for project prop
interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
  links?: { name: string; url: string }[];
  images?: { src: string; alt: string }[];
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Main data export with updated content
export const data = [
  {
    category: 'E-Commerce Project',
    title: 'Online Grocery Store',
    src: '/grocery1.jpeg',
    content: <ProjectContent project={{ title: 'Online Grocery Store' }} />,
  },
  {
    category: 'Education Tool',
    title: 'Education Flash Cards',
    src: '/flashcard.jpeg',
    content: <ProjectContent project={{ title: 'Education Flash Cards & Quiz Tracker' }} />,
  },
];
