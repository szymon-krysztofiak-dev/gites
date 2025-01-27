import { Repository } from "@/api/repositories";
import { format } from "date-fns";
import SortButton from "./SortButton";

type RepositoriesTableProps = {
  data: Repository[];
};

export default function RepositoriesTable({ data }: RepositoriesTableProps) {
  return (
    <div className="-mx-4 mt-8 sm:-mx-0">
      <table className="min-w-full divide-y divide-neutral-700">
        <thead>
          <tr>
            <th
              scope="col"
              className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-neutral-200 sm:pl-0"
            >
              Name
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-left text-sm font-semibold text-neutral-200 lg:table-cell"
            >
              Owner
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-neutral-200"
            >
              <SortButton sortBy="stars">Stars</SortButton>
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-left text-sm font-semibold text-neutral-200 sm:table-cell"
            >
              Created At
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-neutral-800 bg-neutral-950">
          {data.map((repository) => (
            <tr key={repository.id}>
              <td className="w-full max-w-0 py-4 pr-3 pl-4 text-sm font-medium text-neutral-100 sm:w-auto sm:max-w-none sm:pl-0">
                {repository.name}
                <dl className="font-normal lg:hidden">
                  <dt className="sr-only">Owner</dt>
                  <dd className="mt-1 truncate text-neutral-300">
                    {repository.owner.login}
                  </dd>
                  <dt className="sr-only sm:hidden">Created At</dt>
                  <dd className="mt-1 truncate text-neutral-400 sm:hidden">
                    {format(new Date(repository.created_at), "MMM d, yyyy")}
                  </dd>
                </dl>
              </td>
              <td className="hidden px-3 py-4 text-sm text-neutral-400 lg:table-cell">
                {repository.owner.login}
              </td>
              <td className="px-3 py-4 text-sm text-neutral-400">
                {repository.stargazers_count}
              </td>
              <td className="hidden px-3 py-4 text-sm text-neutral-400 sm:table-cell">
                {format(new Date(repository.created_at), "MMMM d, yyyy")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
