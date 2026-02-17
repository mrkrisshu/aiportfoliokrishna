'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';
import { SocialIcons } from '@/components/social-icons';

export function Contact() {
  // Contact information
  const contactInfo = {
    name: 'Krishna Bantola',
    email: 'mrkrisshu@gmail.com',
    handle: '@Krishna.Bantola',
    linkedIn: 'https://linkedin.com/in/krishna-bantola-370a0b153',
  };

  return (
    <div className="mx-auto mt-4 sm:mt-8 w-full px-2 sm:px-0">
      <div className="bg-white/80 backdrop-blur-lg border border-gray-100 w-full overflow-hidden rounded-2xl sm:rounded-3xl px-4 sm:px-6 md:px-10 lg:px-16 py-6 sm:py-8 md:py-12 font-sans shadow-lg">
        {/* Header Section */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-gray-800 text-2xl sm:text-3xl md:text-4xl font-semibold">
            Contacts
          </h2>
        </div>

        {/* Email Section */}
        <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col">
          <a
            href={`mailto:${contactInfo.email}`}
            className="group mb-6 sm:mb-8 cursor-pointer inline-flex items-center gap-1 w-fit"
          >
            <span className="text-sm sm:text-base md:text-lg font-medium text-blue-500 hover:underline break-all">
              {contactInfo.email}
            </span>
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" />
          </a>

          {/* Animated Social Icons */}
          <div className="flex justify-center sm:justify-start">
            <SocialIcons />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
