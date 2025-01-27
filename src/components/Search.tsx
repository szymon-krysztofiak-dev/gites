"use client";

import useSearch from "@/hooks/useSearch";
import { cn } from "@/utils/cn";
import Button from "./ui/Button";

export default function Search() {
  const { input, setInput, handleSubmit } = useSearch();

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-grow justify-end gap-x-3 sm:w-auto"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search GitHub repositories..."
        className="h-12 w-full max-w-lg rounded-md border px-4 py-2 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 sm:max-w-md"
      />
      <Button
        type="submit"
        disabled={!input.trim()}
        className={cn(
          "flex h-12 shrink-0 items-center px-4",
          input.trim()
            ? "bg-emerald-500 text-emerald-50 hover:bg-emerald-600"
            : "cursor-not-allowed bg-neutral-300 text-neutral-400",
          "disabled:cursor-not-allowed disabled:bg-neutral-300 disabled:text-neutral-400",
        )}
      >
        Search
      </Button>
    </form>
  );
}
