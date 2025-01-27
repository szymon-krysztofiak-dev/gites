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
};

const REPOSITORIES_URL =
  process.env.NEXT_PUBLIC_API_URL + "/search/repositories";

export async function getRepositories(query: string): Promise<Repository[]> {
  const data: RepositoriesResponse = await fetch(
    REPOSITORIES_URL + `?q=${query}`,
  ).then((res) => res.json());

  return data.items;
}
