import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import "./globals.css";
// import { NavbarDemo } from "@/components/demo/NavbarDemo";
// import FooterDemo from "@/components/demo/FooterDemo";

const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Build Your App",
  description: "Launch your new business with lighting speed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cabin.variable}  antialiased bg-white text-black`}>
        {/* <NavbarDemo /> */}
        {children}
        {/* <FooterDemo /> */}
      </body>
    </html>
  );
}
