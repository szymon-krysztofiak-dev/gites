"use client";

import { PAGINATION_PER_PAGE } from "@/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";

type UsePaginationProps = {
  totalCount: number;
};

type UsePaginationReturn = {
  start: number;
  end: number;
  page: number;
  maxPage: number;
  handlePrevClick: () => void;
  handleNextClick: () => void;
};

export default function usePagination({
  totalCount,
}: UsePaginationProps): UsePaginationReturn {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const page: number = Number(searchParams.get("page")) || 1;

  const maxPage = useMemo(
    () => Math.ceil(totalCount / PAGINATION_PER_PAGE),
    [totalCount],
  );

  const { start, end } = useMemo(() => {
    const startItem = page === 1 ? 1 : (page - 1) * PAGINATION_PER_PAGE + 1;
    const endItem =
      page === 1
        ? Math.min(PAGINATION_PER_PAGE, totalCount)
        : Math.min(page * PAGINATION_PER_PAGE, totalCount);
    return { start: startItem, end: endItem };
  }, [page, totalCount]);

  const handlePageChange = useCallback(
    (newPage: number) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", newPage.toString());
      router.push(`${pathname}?${params.toString()}`);
    },
    [router, pathname, searchParams],
  );

  const handlePrevClick = useCallback(() => {
    if (page > 1) {
      handlePageChange(page - 1);
    }
  }, [handlePageChange, page]);

  const handleNextClick = useCallback(() => {
    if (page < maxPage) {
      handlePageChange(page + 1);
    }
  }, [handlePageChange, page, maxPage]);

  return {
    start,
    end,
    page,
    maxPage,
    handlePrevClick,
    handleNextClick,
  };
}
