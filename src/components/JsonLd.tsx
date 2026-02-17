export default function JsonLd() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://krishnabantola.site/#person',
    name: 'Krishna Bantola',
    alternateName: ['mrkrishnu', 'Krishna Chhetri', 'Krishna Bantola D', 'Krishu'],
    url: 'https://krishnabantola.site',
    image: {
      '@type': 'ImageObject',
      url: 'https://krishnabantola.site/krishna-photo-white.png',
      width: 500,
      height: 500,
      caption: 'Krishna Bantola — AI Engineer, Full Stack Developer, and Android Engineer based in Bengaluru, India',
    },
    jobTitle: 'AI Engineer | Full Stack Developer | Android Engineer',
    description:
      'Krishna Bantola is a professional AI Engineer, Full Stack Developer, and Android Engineer based in Bengaluru, India. Specializing in Artificial Intelligence, Generative AI, Large Language Models (LLMs), Prompt Engineering, Next.js, React, TypeScript, Kotlin, and Android app development. Published Android developer on Google Play Store, Hackathon 2x Finalist, and builder of AI-powered interactive portfolio with chatbot.',
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'CMR Group of Institutions',
        department: 'Master of Computer Applications (MCA)',
        startDate: '2024',
        endDate: '2026',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bengaluru',
          addressRegion: 'Karnataka',
          addressCountry: 'IN',
        },
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'Kristu Jayanti College',
        department: 'Bachelor of Computer Applications (BCA)',
        endDate: '2024',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bengaluru',
          addressRegion: 'Karnataka',
          addressCountry: 'IN',
        },
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      addressCountry: 'IN',
    },
    nationality: {
      '@type': 'Country',
      name: 'Indian',
    },
    knowsAbout: [
      'Artificial Intelligence',
      'Generative AI',
      'Large Language Models (LLMs)',
      'Prompt Engineering',
      'AI-Powered Application Development',
      'Full Stack Web Development',
      'Next.js',
      'React',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'TailwindCSS',
      'Android App Development',
      'Kotlin',
      'Java',
      'Android Studio',
      'Google Play Store',
      'Python Development',
      'Natural Language Processing (NLP)',
      'Computer Vision',
      'Deep Learning',
      'Neural Networks',
      'API Development',
      'Database Management',
      'MongoDB',
      'PostgreSQL',
      'Firebase',
      'Cloud Services',
      'Git',
      'UI/UX Design',
      'Retrieval-Augmented Generation (RAG)',
      'Vercel AI SDK',
      'AI Agents',
      'Hugging Face',
      'Docker',
      'AWS',
      'Supabase',
    ],
    knowsLanguage: [
      { '@type': 'Language', name: 'English' },
      { '@type': 'Language', name: 'Hindi' },
      { '@type': 'Language', name: 'Nepali' },
    ],
    hasOccupation: [
      {
        '@type': 'Occupation',
        name: 'AI Engineer',
        description:
          'Building intelligent systems using Artificial Intelligence, Generative AI, Large Language Models, Prompt Engineering, RAG, NLP, Computer Vision, and Deep Learning',
        skills:
          'Artificial Intelligence, Generative AI, LLMs, Prompt Engineering, RAG, NLP, Computer Vision, Deep Learning, Neural Networks, Hugging Face, Vercel AI SDK, AI Agents',
        occupationLocation: {
          '@type': 'City',
          name: 'Bengaluru',
        },
      },
      {
        '@type': 'Occupation',
        name: 'Full Stack Developer',
        description:
          'Developing modern web applications using Next.js, React, TypeScript, Node.js, TailwindCSS, and cloud services',
        skills:
          'Next.js, React, TypeScript, JavaScript, Node.js, TailwindCSS, MongoDB, PostgreSQL, Firebase, Supabase, AWS, Docker, API Development, Git, CI/CD',
        occupationLocation: {
          '@type': 'City',
          name: 'Bengaluru',
        },
      },
      {
        '@type': 'Occupation',
        name: 'Android Engineer',
        description:
          'Building and publishing Android applications on Google Play Store using Kotlin, Java, Jetpack Compose, and Material Design',
        skills:
          'Kotlin, Java, Android Studio, Jetpack Compose, Material Design 3, Google Play Store, Flutter, Mobile Development',
        occupationLocation: {
          '@type': 'City',
          name: 'Bengaluru',
        },
      },
    ],
    award: [
      'Hackathon 2x Finalist',
      'Top 10 National Hackathons',
      'Builder of Impact: From Static Portfolio to AI-Powered Interactive Portfolio',
      'Published Android Developer on Google Play Store',
    ],
    sameAs: [
      'https://krishnabantola.site',
      'https://linkedin.com/in/krishna-bantola-370a0b153',
      'https://github.com/MRKRISHNU',
      'https://www.instagram.com/__krishnachhetri/',
      'https://x.com/bantola_krishna',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://krishnabantola.site/#website',
    name: 'Krishna Bantola — AI Engineer | Full Stack Developer | Android Engineer',
    alternateName: [
      'Krishna Bantola Portfolio',
      'Krishna Bantola AI Portfolio',
      'mrkrishnu portfolio',
    ],
    url: 'https://krishnabantola.site',
    description:
      'AI-powered interactive portfolio of Krishna Bantola featuring an intelligent chatbot, dynamic content, project showcases, and hackathon achievements. Built with Next.js, React, TypeScript, and Vercel AI SDK — a living proof of AI engineering expertise.',
    author: { '@id': 'https://krishnabantola.site/#person' },
    creator: { '@id': 'https://krishnabantola.site/#person' },
    publisher: { '@id': 'https://krishnabantola.site/#person' },
    inLanguage: 'en-US',
    copyrightYear: 2024,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://krishnabantola.site/chat?query={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': 'https://krishnabantola.site/#profilepage',
    name: 'Krishna Bantola — AI Engineer | Full Stack Developer | Android Engineer Portfolio',
    description:
      'Professional portfolio and profile page of Krishna Bantola, an AI Engineer, Full Stack Developer, and Android Engineer based in Bengaluru, India. Featuring AI-powered chatbot, project showcases, skills, hackathon achievements, and contact information.',
    url: 'https://krishnabantola.site',
    mainEntity: { '@id': 'https://krishnabantola.site/#person' },
    dateCreated: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    inLanguage: 'en-US',
  };

  const imageGallerySchema = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'Krishna Bantola — Hackathon Memories & Project Showcases',
    description:
      'Photo gallery of Krishna Bantola AI Engineer at hackathons, tech events, project demos, and coding sessions in Bengaluru, India',
    url: 'https://krishnabantola.site',
    author: { '@id': 'https://krishnabantola.site/#person' },
    image: [
      {
        '@type': 'ImageObject',
        url: 'https://krishnabantola.site/ctrlmove.jpg',
        name: 'Krishna Bantola AI Engineer at CTRL+MOVE Hackathon Bangalore Edition',
        description:
          'Krishna Bantola presenting at CTRL+MOVE Hackathon Bangalore Edition powered by Rise In — showcasing AI engineering and full stack development skills',
        width: 1200,
        height: 800,
      },
      {
        '@type': 'ImageObject',
        url: 'https://krishnabantola.site/aptos.jpg',
        name: 'Krishna Bantola at Build on Aptos Hackathon Bangalore',
        description:
          'Krishna Bantola AI Engineer participating in Build on Aptos Hackathon Bangalore Edition — blockchain and Web3 development',
        width: 1200,
        height: 800,
      },
      {
        '@type': 'ImageObject',
        url: 'https://krishnabantola.site/team1.jpg',
        name: 'Krishna Bantola Avalanche Team India Hackathon',
        description:
          'Krishna Bantola Full Stack Developer with team at Avalanche Team1 India Hackathon — building decentralized applications',
        width: 1200,
        height: 800,
      },
      {
        '@type': 'ImageObject',
        url: 'https://krishnabantola.site/deep.jpg',
        name: 'Krishna Bantola at DEEP Open Innovation Hackathon',
        description:
          'Krishna Bantola AI Engineer at DEEP Open Innovation Hackathon #OIH2025 — innovating with AI and deep tech',
        width: 1200,
        height: 800,
      },
      {
        '@type': 'ImageObject',
        url: 'https://krishnabantola.site/gdk.jpg',
        name: 'Krishna Bantola Building AI Agents with Agent Development Kit',
        description:
          'Krishna Bantola AI Engineer at Build AI Agents Using Agent Development Kit (ADK) event in Bengaluru India',
        width: 1200,
        height: 800,
      },
      {
        '@type': 'ImageObject',
        url: 'https://krishnabantola.site/krishna-photo-white.png',
        name: 'Krishna Bantola AI Engineer Professional Profile Photo',
        description:
          'Professional profile photo of Krishna Bantola — AI Engineer, Full Stack Developer, and Android Engineer based in Bengaluru, Karnataka, India',
        width: 500,
        height: 500,
      },
      {
        '@type': 'ImageObject',
        url: 'https://krishnabantola.site/krishna-photo.jpeg',
        name: 'Krishna Bantola Full Stack Developer Portrait',
        description:
          'Portrait photo of Krishna Bantola — AI Engineer and Full Stack Developer, hackathon finalist and Google Play Store published developer',
        width: 500,
        height: 500,
      },
      {
        '@type': 'ImageObject',
        url: 'https://krishnabantola.site/dili1.png',
        name: 'Krishna Bantola DiliGenie AI Project Demo',
        description:
          'DiliGenie AI-powered conversational workspace built by Krishna Bantola — RAG technology, document chat, and LLM integration',
        width: 1200,
        height: 800,
      },
      {
        '@type': 'ImageObject',
        url: 'https://krishnabantola.site/prompt1.png',
        name: 'Krishna Bantola PromptBoard Android App Showcase',
        description:
          'PromptBoard Android app by Krishna Bantola — AI prompt discovery app built with Kotlin and Jetpack Compose, published on Google Play Store',
        width: 1200,
        height: 800,
      },
      {
        '@type': 'ImageObject',
        url: 'https://krishnabantola.site/bizz1.png',
        name: 'Krishna Bantola BizCanvas AI Business Platform',
        description:
          'BizCanvas AI-powered business model canvas platform built by Krishna Bantola — Full Stack Developer project with Next.js and React',
        width: 1200,
        height: 800,
      },
      {
        '@type': 'ImageObject',
        url: 'https://krishnabantola.site/event1.png',
        name: 'Krishna Bantola EventXX Blockchain Ticketing Platform',
        description:
          'EventXX blockchain event management platform — secure ticketing built by Krishna Bantola Full Stack Developer',
        width: 1200,
        height: 800,
      },
      {
        '@type': 'ImageObject',
        url: 'https://krishnabantola.site/Savandurgahill.jpeg',
        name: 'Krishna Bantola at Savandurga Hill Bengaluru',
        description:
          'Krishna Bantola AI Engineer at Savandurga Hill near Bengaluru, Karnataka, India — outdoor adventure',
        width: 1200,
        height: 800,
      },
      {
        '@type': 'ImageObject',
        url: 'https://krishnabantola.site/landing-memojis.png',
        name: 'Krishna Bantola AI Portfolio Memoji Avatar',
        description:
          'AI-powered interactive memoji avatar for Krishna Bantola AI Portfolio — dynamic AI chatbot interface',
        width: 2000,
        height: 2000,
      },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://krishnabantola.site',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Projects',
        item: 'https://krishnabantola.site/chat?query=What+are+your+projects',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Skills',
        item: 'https://krishnabantola.site/chat?query=What+are+your+skills',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Contact',
        item: 'https://krishnabantola.site/chat?query=How+can+I+contact+you',
      },
    ],
  };

  const softwareAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'PromptBoard — AI Prompt Discovery App',
    description:
      'Android app by Krishna Bantola that helps creators discover and use perfect prompts for every AI model including OpenAI, Google, Meta, DeepSeek, and Copilot. Features curated gallery, fast search, model filters, and glassmorphism UI.',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Android',
    author: { '@id': 'https://krishnabantola.site/#person' },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    installUrl: 'https://play.google.com/store/search?q=PromptBoard+Krishna+Bantola&c=apps',
    softwareVersion: '1.0',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: '1',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGallerySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
    </>
  );
}
