import { getRepositories } from "@/api/repositories";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

type SearchParams = {
  query: string;
  page?: number;
  sort?: string;
  order?: string;
};

export const useSearchStore = ({
  query,
  page = 1,
  sort = "stars",
  order = "desc",
}: SearchParams) => {
  const { data, error } = useQuery({
    queryKey: ["repositories", query, page, sort, order],
    queryFn: () => getRepositories(query),
    placeholderData: keepPreviousData,
    enabled: !!query,
  });

  if (error) {
    console.error(error);
  }

  return {
    data,
  };
};
