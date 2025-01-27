"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useCallback, useState } from "react";

type UseSearchReturn = {
  input: string;
  setInput: (value: string) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export default function useSearch(): UseSearchReturn {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get("search") || "";
  const [input, setInput] = useState(initialSearch);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      params.set("page", "1"); // Resetowanie strony do 1
      return params.toString();
    },
    [searchParams],
  );

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const trimmedInput = input.trim();
      if (trimmedInput) {
        const queryString = createQueryString("search", trimmedInput);
        router.push(`${pathname}?${queryString}`);
      }
    },
    [input, createQueryString, router, pathname],
  );

  return {
    input,
    setInput,
    handleSubmit,
  };
}
