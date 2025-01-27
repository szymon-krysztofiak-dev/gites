import { getRepositories } from "@/api/repositories";
import Pagination from "@/components/Pagination";
import Table from "@/components/RepositoriesTable";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { search, sort, order, page } = await searchParams;

  const { items, total_count } = await getRepositories({
    query: search,
    sort,
    order,
    page: Number(page),
  });

  return (
    <main className="mt-8 min-h-full space-y-4 bg-neutral-950">
      {items.length > 0 ? (
        <>
          <div className="sm:flex sm:flex-col">
            <h2 className="text-xl font-bold">Results for {search}</h2>
            <p className="mt-2 text-sm text-gray-300">
              A list of repositories that match your search query.
            </p>
          </div>

          <section className="not-prose relative flex flex-col gap-y-4 overflow-hidden">
            <Table data={items} />
            <Pagination totalCount={total_count} />
          </section>
        </>
      ) : (
        <div className="sm:flex sm:flex-col">
          <h2 className="text-xl font-bold">Nothing to show yet</h2>
          <p className="mt-2 text-sm text-gray-300">
            Use the search bar to get list of repositories that match your
            search query.
          </p>
        </div>
      )}
    </main>
  );
}
