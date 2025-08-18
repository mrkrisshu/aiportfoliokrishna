import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Krishna Bantola D. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "I'm Krishna Bantola D, a 22-year-old developer specializing in AI From Bangalore, India. Formerly a high-level mountain biker, I Study at Kristu Jayanti College in Bangalore. I'm passionate about AI, tech, Entrepreneurship and SaaS tech.",
    };
  },
});
