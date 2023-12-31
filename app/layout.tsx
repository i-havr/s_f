import type { Metadata } from "next";
import { Raleway, Poppins } from "next/font/google";
import "../styles/globals.css";

import { Header, SideBar } from "@/components";

// const montserrat = Montserrat({ subsets: ["latin"] });
const raleway = Raleway({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-raleway",
});

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body
        className={`${raleway.variable} ${poppins.variable} bg-white-light py-6 font-raleway text-body`}
      >
        <div className="container flex overflow-hidden p-0 xl:rounded-br-large xl:rounded-tl-large">
          <SideBar />
          <div className="flex w-full flex-col">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
