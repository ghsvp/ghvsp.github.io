import { ConstNavbar, Footer } from "@/components";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GHSVP",
  description:
    "Georgia High School Voter Project is a student-led organization that aims to help high school students register to vote.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="max-w-full overflow-x-hidden scroll-smooth">
      <body className={`${inter.className} max-w-full overflow-x-hidden h-[100vh]`}>
        <ConstNavbar />
        <div className={`w-[100vw] overflow-x-clip mt-16 md:mt-24 lg:mt-24`}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
