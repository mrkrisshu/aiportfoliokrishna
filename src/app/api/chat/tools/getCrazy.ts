
import { tool } from "ai";
import { z } from "zod";


export const getCrazy = tool({
  description:
    "This tool will the craziest thing I've ever done. use it when the user ask someting like : 'What the craziest thing you've ever done?'",
  parameters: z.object({}),
  execute: async () => {
    return "Above is a photo of Me On top of Savandurga Hill, the largest monolith hill in the Asia. I made it with a friend of mine without guide, it was a great experience! ";
  },
});