"use client";

import { FormEvent, useState } from "react";

const Search = () => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log(input.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-end flex-grow gap-x-3 ml-4"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search GitHub repositories..."
        className="w-full max-w-md h-12 px-4 py-2 text-neutral-900 placeholder:text-neutral-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
      <button
        type="submit"
        className="flex shrink-0 items-center px-4 py-2 h-12 bg-emerald-500 text-emerald-50 rounded-md hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
