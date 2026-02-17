"use client"

import { useState } from "react"

// Color mapping for each social platform
const socialColors: Record<string, { bg: string; text: string; tooltip: string }> = {
  GitHub: { bg: "bg-gray-900/10", text: "text-gray-900", tooltip: "bg-gray-900" },
  LinkedIn: { bg: "bg-blue-100", text: "text-blue-600", tooltip: "bg-blue-500" },
  X: { bg: "bg-gray-200", text: "text-gray-600", tooltip: "bg-gray-500" },
  Instagram: { bg: "bg-pink-100", text: "text-pink-600", tooltip: "bg-pink-500" },
  "Play Store": { bg: "bg-green-100", text: "text-green-600", tooltip: "bg-green-500" },
}

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/MRKRISHNU",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5 sm:size-6">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/krishna-bantola-370a0b153",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5 sm:size-6">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/bantola_krishna",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5 sm:size-6">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/__krishnachhetri/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5 sm:size-6">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "Play Store",
    href: "https://play.google.com/store/search?q=Krishna+Bantola&c=apps",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5 sm:size-6">
        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.396 12l2.302-2.492zM5.864 2.658L16.8 9.49l-2.302 2.302L5.864 2.658z" />
      </svg>
    ),
  },
]

export function SocialIcons() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="relative flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-white border border-gray-200 shadow-lg w-full max-w-sm sm:max-w-lg justify-around">
      <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-b from-gray-50/50 to-transparent pointer-events-none" />

      {socials.map((social, index) => {
        const colors = socialColors[social.name]

        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer me"
            className="group relative flex items-center justify-center size-10 sm:size-12 md:size-14 rounded-lg sm:rounded-xl transition-colors duration-200"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            aria-label={`Krishna Bantola on ${social.name}`}
          >
            <span
              className={`absolute inset-0.5 sm:inset-1 rounded-lg sm:rounded-xl transition-all duration-300 ease-out ${colors.bg} ${hoveredIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
            />

            <span
              className={`relative z-10 transition-all duration-300 ease-out ${hoveredIndex === index ? `${colors.text} scale-110` : "text-gray-500"
                }`}
            >
              {social.icon}
            </span>

            <span
              className={`absolute bottom-1.5 sm:bottom-2 left-1/2 -translate-x-1/2 h-[2px] sm:h-[3px] rounded-full transition-all duration-300 ease-out ${colors.tooltip} ${hoveredIndex === index ? "w-4 sm:w-5 opacity-100" : "w-0 opacity-0"
                }`}
            />

            <span
              className={`absolute -top-10 sm:-top-12 left-1/2 -translate-x-1/2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-white text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-300 ease-out shadow-lg ${colors.tooltip} ${hoveredIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 pointer-events-none"
                }`}
            >
              {social.name}
              <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 size-2 sm:size-2.5 rotate-45 ${colors.tooltip}`} />
            </span>
          </a>
        )
      })}
    </div>
  )
}
