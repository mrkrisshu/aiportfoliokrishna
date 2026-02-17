import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

// Load Inter font for non-Apple devices
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://krishnabantola.site"),
  title: {
    default: "Krishna Bantola | AI Engineer • Full Stack Developer • Android Engineer",
    template: "%s | Krishna Bantola — AI Engineer",
  },
  description:
    "Krishna Bantola is a professional AI Engineer, Full Stack Developer, and Android Engineer based in Bengaluru, India. Specializing in Generative AI, LLMs, Prompt Engineering, Next.js, React, TypeScript, Kotlin, and Android development. Published Android developer on Google Play Store, Hackathon 2x Finalist, and Top 10 National Hackathons. This AI-powered interactive portfolio features an intelligent chatbot built with Vercel AI SDK — a living proof of AI engineering expertise.",
  keywords: [
    "Krishna Bantola",
    "mrkrishnu",
    "Krishna Chhetri",
    "AI Engineer",
    "Full Stack Developer",
    "Android Engineer",
    "AI Engineer Bengaluru",
    "Full Stack Developer India",
    "Android Developer Bangalore",
    "Artificial Intelligence",
    "Generative AI",
    "Large Language Models",
    "LLMs",
    "Prompt Engineering",
    "AI-Powered Application Development",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "TailwindCSS",
    "Android App Development",
    "Kotlin",
    "Java",
    "Android Studio",
    "Google Play Store Developer",
    "Python Developer",
    "Natural Language Processing",
    "NLP",
    "Computer Vision",
    "Deep Learning",
    "Neural Networks",
    "API Development",
    "MongoDB",
    "PostgreSQL",
    "Firebase",
    "Cloud Services",
    "Git",
    "UI/UX Design",
    "RAG",
    "Retrieval-Augmented Generation",
    "Vercel AI SDK",
    "AI Portfolio",
    "Interactive Portfolio",
    "AI Chatbot Portfolio",
    "Hackathon Finalist",
    "Published Android Developer",
    "Bengaluru Developer",
    "Karnataka India Developer",
    "Kristu Jayanti College",
    "CMR Group of Institutions",
    "Bhai.AR",
    "MCA Student",
    "BCA Graduate",
  ],
  authors: [
    {
      name: "Krishna Bantola",
      url: "https://krishnabantola.site",
    },
  ],
  creator: "Krishna Bantola",
  publisher: "Krishna Bantola",
  category: "Technology",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://krishnabantola.site",
    siteName: "Krishna Bantola — AI Engineer Portfolio",
    title: "Krishna Bantola | AI Engineer • Full Stack Developer • Android Engineer",
    description:
      "AI-powered interactive portfolio of Krishna Bantola — AI Engineer, Full Stack Developer & Android Engineer. Featuring intelligent chatbot, project showcases, hackathon achievements, and published Google Play Store apps. Based in Bengaluru, India.",
    images: [
      {
        url: "https://krishnabantola.site/krishna-photo-white.png",
        width: 500,
        height: 500,
        alt: "Krishna Bantola — AI Engineer, Full Stack Developer, and Android Engineer based in Bengaluru India",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@bantola_krishna",
    creator: "@bantola_krishna",
    title: "Krishna Bantola | AI Engineer • Full Stack Developer • Android Engineer",
    description:
      "AI-powered interactive portfolio featuring intelligent chatbot, project showcases, hackathon achievements, and published Play Store apps. Built by Krishna Bantola — AI Engineer based in Bengaluru, India.",
    images: [
      {
        url: "https://krishnabantola.site/krishna-photo-white.png",
        alt: "Krishna Bantola — AI Engineer, Full Stack Developer, and Android Engineer",
      },
    ],
  },
  verification: {
    google: "PLACEHOLDER_GOOGLE_VERIFICATION_CODE",
  },
  alternates: {
    canonical: "https://krishnabantola.site",
  },
  icons: {
    icon: [
      {
        url: "/favicon1.png",
        sizes: "any",
      },
    ],
    shortcut: "/favicon1.png",
    apple: "/favicon1.png",
  },
  other: {
    "google-site-verification": "PLACEHOLDER_GOOGLE_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/favicon1.png" sizes="any" />
        <link rel="author" href="/humans.txt" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <main className="flex min-h-screen flex-col">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
        <JsonLd />
        <Analytics />
      </body>
    </html>
  );
}