import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 — Page Not Found | Krishna Bantola',
  description:
    'The page you are looking for does not exist. Visit Krishna Bantola AI Engineer portfolio or chat with the AI assistant.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50/30 px-4 text-center">
      {/* Decorative blurred background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-100/40 to-purple-100/40 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-cyan-100/40 to-blue-100/40 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-lg">
        {/* 404 number */}
        <h1 className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 bg-clip-text text-8xl font-black text-transparent sm:text-9xl">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-4 text-2xl font-bold text-gray-800 sm:text-3xl">
          {"Oops! Even AI couldn't find this page"} 🤖
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-base text-gray-600 sm:text-lg">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          But don&apos;t worry — my AI assistant can help you find what you need!
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gray-800 to-black px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl sm:px-8 sm:text-base"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Go Back Home
          </Link>

          <Link
            href="/chat"
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-800 shadow-md transition-all hover:scale-105 hover:bg-gray-50 hover:shadow-lg sm:px-8 sm:text-base"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Chat with AI
          </Link>
        </div>
      </div>

      {/* Footer branding */}
      <p className="absolute bottom-6 text-xs text-gray-400">
        Krishna Bantola — AI Engineer | Full Stack Developer | Android Engineer
      </p>
    </div>
  );
}
