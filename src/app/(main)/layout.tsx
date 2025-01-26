export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-7xl bg-neutral-950 px-4 pb-24 sm:px-6 lg:px-8">
      <header className="my-4 py-4">
        <h1 className="border-b border-neutral-700 py-4 text-5xl font-bold">
          🔍 Gites - the best GitHub search
        </h1>
      </header>
      <div>{children}</div>
    </div>
  );
}
