import "@/styles/globals.css";
import { cn } from "@/utils/cn";
import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";

const monaSans = Mona_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gites - the best place to search through GitHub repositories",
  description: "Gites is the best place to search through GitHub repositories. It is a simple and easy-to-use search engine that allows you to find the repositories you need.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full bg-neutral-950 text-neutral-50 antialiased"
    >
      <body className={cn("flex min-h-full", monaSans.className)}>
        <div className="w-full">{children}</div>
      </body>
    </html>
  );
}