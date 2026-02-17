import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://krishnabantola.site';
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'daily',
      priority: 1.0,
      images: [
        'https://krishnabantola.site/krishna-photo-white.png',
        'https://krishnabantola.site/krishna-photo.jpeg',
        'https://krishnabantola.site/landing-memojis.png',
        'https://krishnabantola.site/logo-krishna.png',
        'https://krishnabantola.site/avatar-landing.png',
        'https://krishnabantola.site/favicon1.png',
      ],
    },
    {
      url: `${baseUrl}/chat`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
      images: [
        'https://krishnabantola.site/landing-memojis.png',
      ],
    },
    // Project images — DiliGenie
    {
      url: `${baseUrl}/chat?query=What+are+your+projects`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
      images: [
        'https://krishnabantola.site/dili1.png',
        'https://krishnabantola.site/dili2.png',
        'https://krishnabantola.site/dili3.png',
        'https://krishnabantola.site/dili4.png',
        'https://krishnabantola.site/dili5.png',
      ],
    },
    // PromptBoard Android App
    {
      url: `${baseUrl}/chat?query=Tell+me+about+PromptBoard`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
      images: [
        'https://krishnabantola.site/prompt1.png',
        'https://krishnabantola.site/prompt2.png',
        'https://krishnabantola.site/prompt3.png',
      ],
    },
    // UrbanFlatKit
    {
      url: `${baseUrl}/chat?query=Tell+me+about+UrbanFlatKit`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
      images: [
        'https://krishnabantola.site/urbanflat1.png',
        'https://krishnabantola.site/urbanflat2.png',
        'https://krishnabantola.site/urbanflat3.png',
      ],
    },
    // BizCanvas
    {
      url: `${baseUrl}/chat?query=Tell+me+about+BizCanvas`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
      images: [
        'https://krishnabantola.site/bizz1.png',
        'https://krishnabantola.site/bizz2.png',
        'https://krishnabantola.site/bizz3.png',
        'https://krishnabantola.site/bizz4.png',
      ],
    },
    // Buildy
    {
      url: `${baseUrl}/chat?query=Tell+me+about+Buildy`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
      images: [
        'https://krishnabantola.site/buildly1.png',
        'https://krishnabantola.site/buildly2.png',
        'https://krishnabantola.site/buildly3.png',
      ],
    },
    // Public Wealth Created
    {
      url: `${baseUrl}/chat?query=Tell+me+about+Public+Wealth+Created`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
      images: [
        'https://krishnabantola.site/wealth1.png',
        'https://krishnabantola.site/wealth2.png',
        'https://krishnabantola.site/wealth3.png',
      ],
    },
    // EventXX
    {
      url: `${baseUrl}/chat?query=Tell+me+about+EventXX`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
      images: [
        'https://krishnabantola.site/event1.png',
        'https://krishnabantola.site/event2.png',
        'https://krishnabantola.site/event3.png',
      ],
    },
    // Online Grocery Store
    {
      url: `${baseUrl}/chat?query=Tell+me+about+Online+Grocery+Store`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
      images: [
        'https://krishnabantola.site/grocery1.jpeg',
        'https://krishnabantola.site/grocery2.png',
        'https://krishnabantola.site/grocery3.png',
      ],
    },
    // Hackathon memories
    {
      url: `${baseUrl}/chat?query=What+is+the+craziest+thing+you+have+done`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
      images: [
        'https://krishnabantola.site/ctrlmove.jpg',
        'https://krishnabantola.site/aptos.jpg',
        'https://krishnabantola.site/team1.jpg',
        'https://krishnabantola.site/deep.jpg',
        'https://krishnabantola.site/gdk.jpg',
        'https://krishnabantola.site/Savandurgahill.jpeg',
      ],
    },
    // Skills
    {
      url: `${baseUrl}/chat?query=What+are+your+skills`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Contact
    {
      url: `${baseUrl}/chat?query=How+can+I+contact+you`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Resume
    {
      url: `${baseUrl}/chat?query=Show+me+your+resume`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Internship
    {
      url: `${baseUrl}/chat?query=Are+you+looking+for+an+internship`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];
}
