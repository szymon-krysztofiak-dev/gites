import { getRepositories } from "@/api/repositories";
import Table from "@/components/RepositoriesTable";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { search, sort, order } = await searchParams;

  const data = await getRepositories({ query: search, sort, order });

  return (
    <main className="min-h-full space-y-4 mt-8 bg-neutral-950">
      <div className="sm:flex sm:flex-col">
        <h2 className="text-xl font-bold">Results</h2>
        <p className="mt-2 text-sm text-gray-300">
          A list of repositories that match your search query.
        </p>
      </div>

      <section className="not-prose relative overflow-hidden flex flex-col gap-y-4">
        <Table data={data} />
      </section>
    </main>
  );
}
