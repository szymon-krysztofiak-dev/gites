import { PAGINATION_PER_PAGE } from "@/constants";

type Owner = {
  login: string;
};

export type Repository = {
  id: string;
  name: string;
  owner: Owner;
  stargazers_count: number;
  created_at: string;
};

type RepositoriesResponse = {
  items: Repository[];
  total_count: number;
};

const REPOSITORIES_URL =
  process.env.NEXT_PUBLIC_API_URL + "/search/repositories";

type PayloadProps = {
  query?: string | string[];
  order?: string | string[];
  sort?: string | string[];
  page?: number;
};

export async function getRepositories({
  query = "",
  sort = "stars",
  order = "desc",
  page = 1,
}: PayloadProps): Promise<RepositoriesResponse> {
  const data: RepositoriesResponse = await fetch(
    REPOSITORIES_URL +
      `?q=${query}` +
      `&sort=${sort}` +
      `&order=${order}` +
      `&page=${page}` +
      `&per_page=${PAGINATION_PER_PAGE}`,
  ).then((res) => res.json());

  return { items: data.items || [], total_count: data.total_count || 0 };
}
