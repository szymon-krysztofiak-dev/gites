"use client";

import useSort from "@/hooks/useSort";
import ChevronDown from "@/icons/ChevronDown";
import { cn } from "@/utils/cn";
import { ReactNode } from "react";

type SortButtonProps = {
  sortBy: string;
  children: ReactNode;
};

export default function SortButton({ sortBy, children }: SortButtonProps) {
  const { order, currentSort, handleSort } = useSort();

  const isActiveSort = currentSort === sortBy;

  return (
    <button
      className={cn(
        "flex items-center gap-1 text-emerald-400 hover:text-emerald-500",
        isActiveSort ? "font-semibold" : "",
      )}
      onClick={() => handleSort(sortBy)}
      aria-pressed={isActiveSort}
    >
      {children}
      <div
        className={cn("flex size-5", order === "asc" && "rotate-180 transform")}
      >
        <ChevronDown />
      </div>
    </button>
  );
}
