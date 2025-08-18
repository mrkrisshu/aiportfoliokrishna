import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Gives a summary of what kind of internship I'm looking for, plus my contact info and how to reach me. Use this tool when the user asks about my internship search or how to contact me for opportunities.",
  parameters: z.object({}),
  execute: async () => {
    return `Here’s what I’m looking for 👇

- 📅 **Duration**: 6-month internship starting **September 2025**
- 🌍 **Location**: Preferably **Bangalore** or anywhere in the **India**
- 🧑‍💻 **Focus**: AI development, full-stack web apps, SaaS, agentic workflows
- 🛠️ **Stack**: Python, Java, SQL, TypeScript, GPT, PHP, etc.
- ✅ **What I bring**: Real experience with secure on-prem GPTs , deepsearch engines, custom RAG tools, and hackathon particiption like **24Hour Hackathon**  
- 🔥 I move fast, learn faster, and I’m HUNGRYYYYY for big challenges

📬 **Contact me** via:
- Email: mrkrisshu@gmail.com
- LinkedIn: [linkedin.com/in/Krishna Bantola](https://www.linkedin.com/in/krishna-bantola-74b7b6202/)
- GitHub: [github.com/Krishna Bantola](https://github.com/mrkrisshu)

Let's build cool shit together ✌️
    `;
  },
});
