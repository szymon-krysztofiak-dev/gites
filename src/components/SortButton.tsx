"use client";

import ChevronDown from "@/icons/ChevronDown";
import { cn } from "@/utils/cn";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { ReactNode, useCallback } from "react";

type SortButtonProps = {
  sortBy: string;
  children: ReactNode;
};

export default function SortButton({ sortBy, children }: SortButtonProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const order = searchParams.get("order") || "desc";

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

  const handleClick = () => {
    const newOrder = order === "asc" ? "desc" : "asc";

    router.push(
      pathname +
        "?" +
        createQueryString([
          { name: "sort", value: sortBy },
          { name: "order", value: newOrder },
        ]),
    );
  };

  return (
    <button
      className="flex items-center text-emerald-400 hover:text-emerald-500 transition-colors"
      onClick={handleClick}
    >
      {children}
      <div className={cn("ml-1", order === "asc" && "transform rotate-180")}>
        <ChevronDown />
      </div>
    </button>
  );
}
