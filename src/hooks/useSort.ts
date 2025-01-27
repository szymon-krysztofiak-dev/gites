"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

type UseSortReturn = {
  order: string;
  currentSort: string;
  handleSort: (sortBy: string) => void;
};

export default function useSort(): UseSortReturn {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentOrder = searchParams.get("order") || "desc";
  const currentSort = searchParams.get("sort") || "";

  const createQueryString = useCallback(
    (params: { name: string; value: string }[]) => {
      const newParams = new URLSearchParams(searchParams.toString());

      params.forEach(({ name, value }) => {
        newParams.set(name, value);
      });

      return newParams.toString();
    },
    [searchParams],
  );

  const handleSort = useCallback(
    (sortBy: string) => {
      let newOrder = "asc";

      if (currentSort === sortBy) {
        newOrder = currentOrder === "asc" ? "desc" : "asc";
      }

      router.push(
        `${pathname}?${createQueryString([
          { name: "sort", value: sortBy },
          { name: "order", value: newOrder },
        ])}`,
      );
    },
    [currentSort, currentOrder, createQueryString, pathname, router],
  );

  return {
    order: currentOrder,
    currentSort,
    handleSort,
  };
}
