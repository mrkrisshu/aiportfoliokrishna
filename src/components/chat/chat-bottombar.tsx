// src/components/chat/chat-bottombar.tsx
'use client';

import { ChatRequestOptions } from 'ai';
import { motion } from 'framer-motion';
import React from 'react';
import { OrbInput } from '@/components/animated-input';

interface ChatBottombarProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    chatRequestOptions?: ChatRequestOptions
  ) => void;
  isLoading: boolean;
  stop: () => void;
  input: string;
  isToolInProgress: boolean;
}

export default function ChatBottombar({
  input,
  handleInputChange,
  handleSubmit,
  isLoading,
  stop,
  isToolInProgress,
}: ChatBottombarProps) {

  const handleOrbSubmit = () => {
    if (!isToolInProgress && input.trim()) {
      // Create a synthetic form event
      const syntheticEvent = {
        preventDefault: () => { },
      } as React.FormEvent<HTMLFormElement>;
      handleSubmit(syntheticEvent);
    }
  };

  const handleChange = (value: string) => {
    // Create a synthetic change event
    const syntheticEvent = {
      target: { value },
    } as React.ChangeEvent<HTMLInputElement>;
    handleInputChange(syntheticEvent);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full pb-2 sm:pb-4 md:pb-8 flex justify-center px-2 sm:px-4"
    >
      <OrbInput
        value={input}
        onChange={handleChange}
        onSubmit={handleOrbSubmit}
        disabled={isToolInProgress || isLoading}
        isLoading={isLoading}
        placeholder={isToolInProgress ? 'Tool is in progress...' : undefined}
        showOrb={true}
      />
    </motion.div>
  );
}
