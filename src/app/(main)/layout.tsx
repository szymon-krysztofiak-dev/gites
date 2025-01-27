import Search from "@/components/Search";
import Link from "next/link";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-7xl bg-neutral-950 px-4 sm:px-6 lg:px-8">
      <nav className="my-4 flex flex-grow flex-col items-start justify-between gap-4 border-b border-neutral-700 py-2 sm:flex-row sm:items-center">
        <Link href="/">
          <h1 className="text-4xl font-bold">🔮 Gites</h1>
          <span className="text-sm text-neutral-400">
            the best GitHub search
          </span>
        </Link>
        <Search />
      </nav>
      <div className="pb-12">{children}</div>
    </div>
  );
}
