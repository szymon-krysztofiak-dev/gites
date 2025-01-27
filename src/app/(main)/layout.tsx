import Search from "@/components/Search";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-7xl bg-neutral-950 px-4 sm:px-6 lg:px-8">
      <nav className="flex-col items-start sm:flex-row flex flex-grow justify-between gap-4 sm:items-center my-4 py-2 border-b border-neutral-700">
        <div>
          <h1 className="text-4xl font-bold">🔮 Gites</h1>
          <span className="text-neutral-400 text-sm">
            the best GitHub search
          </span>
        </div>
        <Search />
      </nav>
      <div>{children}</div>
    </div>
  );
}
