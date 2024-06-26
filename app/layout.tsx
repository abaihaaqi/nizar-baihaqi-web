import Link from "next/link";
import "./globals.css";
import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata = {
  title: "Nizar Baihaqi",
  description: "Web Developer Portofolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={firaCode.className}>
        <main>
          <nav className="bg-black sticky top-0 flex justify-center">
            <Link href="#top" className="link">
              Home
            </Link>
            <Link href="#projects" className="link">
              Projects
            </Link>
            {/* <Link href="/posts" className="link">
              Posts
            </Link>
            <Link href="/countries" className="link">
              Countries
            </Link>
            <Link href="/login" className="link">
              Login
            </Link> */}
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
