export async function GET(req: Request) {
  const res = await fetch("https://api.github.com/repos/mrkrisshu/aiportfoliokrishna", {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
    // GitHub recommends setting this header
    next: { revalidate: 60 }, // (optional if using Next.js caching)
  });

  if (!res.ok) {
    return new Response("Failed to fetch stars", { status: res.status });
  }

  const data = await res.json();

  return Response.json({ stars: data.stargazers_count });
}
