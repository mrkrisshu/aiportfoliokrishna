import Image from 'next/image';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// Define your projects
const PROJECT_CONTENT = [
  {
    title: 'DiliGenie 🤖📚',
    description:
      'DiliGenie is an AI-powered conversational workspace that lets users chat with documents, automate workflows, and extract meaningful insights instantly. Built with Retrieval-Augmented Generation (RAG), it transforms PDFs, text files, and data into intelligent, searchable knowledge — acting as a smart copilot for productivity and decision-making.',
    techStack: ['React', 'Next.js', 'TailwindCSS', 'JavaScript', 'RAG (Retrieval-Augmented Generation)', 'Vector Database', 'LLM Integration'],
    date: '2025',
    links: [
      {
        name: 'website',
        url: 'https://dili-genie-ai-copilot.vercel.app/',
      },
      {
        name: 'github',
        url: 'https://github.com/mrkrisshu/DiliGenie-AI-Copilot',
      },
    ],
    images: [
      {
        src: '/dili1.png',
        alt: 'Krishna Bantola DiliGenie AI-Powered RAG Workspace Homepage',
      },
      {
        src: '/dili5.png',
        alt: 'Krishna Bantola DiliGenie AI Chat with Documents Interface',
      },
      {
        src: '/dili2.png',
        alt: 'Krishna Bantola DiliGenie Voice Chat AI Feature',
      },
      {
        src: '/dili3.png',
        alt: 'Krishna Bantola DiliGenie Dashboard AI Copilot',
      },
      {
        src: '/dili4.png',
        alt: 'Krishna Bantola DiliGenie Knowledge Base Management',
      }
    ],
  },
  {
    title: 'PromptBoard 🎨📱',
    description:
      'PromptBoard is an Android app that helps creators discover and use perfect prompts for every AI model. It offers a curated gallery of high-quality prompts for OpenAI, Google, Meta, DeepSeek, and Copilot, with fast search, model filters, and a clean glassmorphism UI. Users can browse prompt previews, copy prompts instantly, switch between dark/light mode, and generate stunning AI images with ease.',
    techStack: ['Android', 'Kotlin', 'Jetpack Compose', 'Material Design 3', 'REST APIs'],
    date: '2025',
    links: [
      {
        name: 'website',
        url: 'https://prompt-board-website.vercel.app/',
      },
      {
        name: 'github',
        url: 'https://github.com/mrkrisshu/PromptBoardWebsite',
      },
    ],
    images: [
      {
        src: '/prompt1.png',
        alt: 'Krishna Bantola PromptBoard Android App Homepage',
      },
      {
        src: '/prompt2.png',
        alt: 'Krishna Bantola PromptBoard APK Installation on Android',
      },
      {
        src: '/prompt3.png',
        alt: 'Krishna Bantola PromptBoard AI Prompt Gallery Interface',
      },
    ],
  },
  {
    title: 'UrbanFlatKit 🏢✨',
    description:
      'UrbanFlatKit is a modern real-estate showcase platform where users can explore premium residential floor plans, towers, and curated interior essentials including premium furniture and modern appliances — designed for an elegant and intuitive browsing experience.',
    techStack: ['React', 'TailwindCSS', 'JavaScript', 'Responsive UI', 'Animation Effects'],
    date: '2025',
    links: [
      {
        name: 'website',
        url: 'https://urbanflatkit.web.app/',
      },
      {
        name: 'github',
        url: 'https://github.com/mrkrisshu/UrbanFlatKit',
      },
    ],
    images: [
      {
        src: '/urbanflat1.png',
        alt: 'Krishna Bantola UrbanFlatKit Real Estate Platform Homepage',
      },
      {
        src: '/urbanflat2.png',
        alt: 'Krishna Bantola UrbanFlatKit Interior Essentials Showcase',
      },
      {
        src: '/urbanflat3.png',
        alt: 'Krishna Bantola UrbanFlatKit Product Details Page',
      },
    ],
  },
  {
    title: 'Public Wealth Created 📈🌍',
    description:
      'Public Wealth Created is a live scoreboard web app that ranks the world’s biggest public companies by how much wealth they’ve created for everyone else, showing market cap, founder ownership, and “wealth created vs kept” in an interactive table with logos, tickers, search, and filters.',
    techStack: ['React', 'TailwindCSS', 'JavaScript', 'Next.js', 'Data Visualization'],
    date: '2025',
    links: [
      {
        name: 'website',
        url: 'https://wealthscope-1a584.web.app/',
      },
      {
        name: 'github',
        url: 'https://github.com/mrkrisshu/PublicWealthCreated',
      },
    ],
    images: [
      {
        src: '/wealth1.png',
        alt: 'Krishna Bantola Public Wealth Created Dashboard',
      },
      {
        src: '/wealth2.png',
        alt: 'Krishna Bantola Public Wealth Created Company Details',
      },
      {
        src: '/wealth3.png',
        alt: 'Krishna Bantola Public Wealth Created Founders Net Worth',
      },
    ],
  },
  {
    title: 'BizCanvas 💼🧩',
    description:
      'BizCanvas is an AI-powered business model canvas platform that helps entrepreneurs and startups quickly create, visualize, and refine their business ideas with interactive canvases, smart AI suggestions, auto-save, and easy export options — all wrapped in a clean, modern SaaS-style interface with free and pro plans.',
    techStack: ['React', 'Next.js', 'TailwindCSS', 'JavaScript', 'Responsive UI', 'Authentication', 'Payments Integration'],
    date: '2025',
    links: [
      {
        name: 'website',
        url: 'https://bizzcanvasss.vercel.app/',
      },
      {
        name: 'github',
        url: 'https://github.com/mrkrisshu/bizzcanvass',
      },
    ],
    images: [
      {
        src: '/bizz1.png',
        alt: 'Krishna Bantola BizCanvas AI Business Model Canvas Homepage',
      },
      {
        src: '/bizz2.png',
        alt: 'Krishna Bantola BizCanvas Payments Integration',
      },
      {
        src: '/bizz3.png',
        alt: 'Krishna Bantola BizCanvas AI Dashboard',
      },
      {
        src: '/bizz4.png',
        alt: 'Krishna Bantola BizCanvas Business Model Canvas Creator',
      },
    ],
  },
  {
    title: 'Buildy 🛠️',
    description:
      'Buildy is a web-based platform that allows users to create, customize, and deploy their own websites effortlessly. With drag-and-drop functionality, responsive templates, live previews, and a built-in PPT generator, users can quickly build professional websites and presentations without any coding knowledge.',
    techStack: ['React', 'Node.js', 'TailwindCSS', 'Vercel', 'JavaScript', 'HTML', 'CSS'],
    date: '2025',
    links: [
      {
        name: 'website',
        url: 'https://bbuildlyy.vercel.app/',
      },
      {
        name: 'github',
        url: 'https://github.com/mrkrisshu/buildlyv2',
      },
    ],
    images: [
      {
        src: '/buildly1.png',
        alt: 'Krishna Bantola Buildy Website Builder Platform Homepage',
      },
      {
        src: '/buildly2.png',
        alt: 'Krishna Bantola Buildy Authentication Page',
      },
      {
        src: '/buildly3.png',
        alt: 'Krishna Bantola Buildy PPT Builder Interface',
      },
    ],
  },
  {
    title: 'Online Grocery Store',
    description:
      'An online grocery store platform built to provide a seamless shopping experience with product listings, cart, checkout, and order management.',
    techStack: ['PHP', 'MySQL', 'JavaScript', 'CSS3'],
    date: '2025',
    links: [
      {
        name: 'website',
        url: 'https://bhuvaneswaristores.great-site.net/index.php',
      },
    ],
    images: [
      {
        src: '/grocery2.png',
        alt: 'Krishna Bantola Online Grocery Store Landing Page',
      },
      {
        src: '/grocery3.png',
        alt: 'Krishna Bantola Online Grocery Store Product Page',
      },
    ],
  },
  {
    title: 'EventXX 🎉',
    description:
      'EventXX is a modern event management platform that leverages blockchain technology to ensure secure, transparent, and verifiable event registration and ticketing. Users can create, manage, and join events seamlessly, with features like participant tracking, reminders, and immutable record-keeping for enhanced trust and reliability.',
    techStack: ['React', 'Node.js', 'MongoDB', 'TailwindCSS', 'Ethereum', 'Smart Contracts', 'Web3.js'],
    date: '2025',
    links: [
      {
        name: 'website',
        url: 'https://event-xx.vercel.app/',
      },
      {
        name: 'github',
        url: 'https://github.com/mrkrisshu/EventXX',
      },
    ],
    images: [
      {
        src: '/event1.png',
        alt: 'Krishna Bantola EventXX Blockchain Event Management Dashboard',
      },
      {
        src: '/event2.png',
        alt: 'Krishna Bantola EventXX Secure Event Creation Page',
      },
      {
        src: '/event3.png',
        alt: 'Krishna Bantola EventXX Blockchain Ticketing Page',
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

// Main data export with updated content (3 projects)
// ORDER: First item appears first in the carousel. Add new projects at the BEGINNING of this array.
export const data = [
  {
    category: 'RAG',
    title: 'DiliGenie 🤖📚',
    src: '/dili1.png',
    content: <ProjectContent project={{ title: 'DiliGenie 🤖📚' }} />,
  },
  {
    category: 'Website Builder',
    title: 'Buildy 🛠️',
    src: '/buildly1.png',
    content: <ProjectContent project={{ title: 'Buildy 🛠️' }} />,
  },
  {
    category: 'Android App',
    title: 'PromptBoard 🎨📱',
    src: '/prompt1.png',
    content: <ProjectContent project={{ title: 'PromptBoard 🎨📱' }} />,
  },
  {
    category: 'Real Estate Platform',
    title: 'UrbanFlatKit 🏢✨',
    src: '/urbanflat1.png',
    content: <ProjectContent project={{ title: 'UrbanFlatKit 🏢✨' }} />,
  },
  {
    category: 'Business Model Canvas',
    title: 'BizCanvas 💼🧩',
    src: '/bizz1.png',
    content: <ProjectContent project={{ title: 'BizCanvas 💼🧩' }} />,
  },
  {
    category: 'Public Wealth Created',
    title: 'Public Wealth Created 📈🌍',
    src: '/wealth1.png',
    content: <ProjectContent project={{ title: 'Public Wealth Created 📈🌍' }} />,
  },
  {
    category: 'Event Management',
    title: 'EventXX 🎉',
    src: '/event1.png',
    content: <ProjectContent project={{ title: 'EventXX 🎉' }} />,
  },
  {
    category: 'E-Commerce Project',
    title: 'Online Grocery Store',
    src: '/grocery1.jpeg',
    content: <ProjectContent project={{ title: 'Online Grocery Store' }} />,
  },
];
