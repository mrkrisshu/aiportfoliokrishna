import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Krishna Bantola D. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "I'm Krishna Bantola D, a 23-year-old developer specializing in AI from Bangalore, India. I've worked at Bhai.AR where I built multiple production projects. Formerly a high-level mountain biker, I Study at Kristu Jayanti College in Bangalore. I'm passionate about AI, tech, Entrepreneurship and SaaS tech.",
    };
  },
});
