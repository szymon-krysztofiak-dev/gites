import { getRepositories } from "@/api/repositories";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { search } = await searchParams;

  const data = await getRepositories(search as string);

  return (
    <main className="min-h-full space-y-4 mt-8 bg-neutral-950">
      <h2 className="text-2xl font-bold">Results</h2>
      <section className="not-prose relative overflow-hidden flex flex-col gap-y-4">
        {data.map((repo) => (
          <article
            key={repo.id}
            className="flex flex-col gap-y-2 p-4 bg-neutral-900 rounded-md"
          >
            <h3 className="text-xl font-bold">{repo.name}</h3>
            <p className="text-neutral-400">{repo.id}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
