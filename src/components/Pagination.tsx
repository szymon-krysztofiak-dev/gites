"use client";

import usePagination from "@/hooks/usePagination";
import { cn } from "@/utils/cn";
import Button from "./ui/Button";

type PaginationProps = {
  totalCount: number;
};

export default function Pagination({ totalCount }: PaginationProps) {
  const { start, end, page, maxPage, handlePrevClick, handleNextClick } =
    usePagination({ totalCount });

  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-between border-t border-neutral-700 bg-neutral-900 px-4 py-3 sm:px-6"
    >
      <div className="hidden sm:block">
        <p className="text-sm text-neutral-300">
          Showing <span className="font-medium">{start}</span> to{" "}
          <span className="font-medium">{end}</span> of{" "}
          <span className="font-medium">{totalCount}</span> results
        </p>
      </div>
      <div className="flex flex-1 justify-between sm:justify-end">
        <Button
          onClick={handlePrevClick}
          disabled={page === 1}
          className={cn(
            "ml-0",
            page === 1
              ? "cursor-not-allowed bg-neutral-300 text-neutral-400"
              : "bg-emerald-500 text-emerald-50 hover:bg-emerald-600",
          )}
          aria-disabled={page === 1}
        >
          Previous
        </Button>
        <Button
          onClick={handleNextClick}
          disabled={page >= maxPage}
          className={cn(
            "ml-3",
            page >= maxPage
              ? "cursor-not-allowed bg-neutral-300 text-neutral-400"
              : "bg-emerald-500 text-emerald-50 hover:bg-emerald-600",
          )}
          aria-disabled={page >= maxPage}
        >
          Next
        </Button>
      </div>
    </nav>
  );
}
