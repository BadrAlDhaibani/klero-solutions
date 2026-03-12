import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import "./globals.css";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-albert-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Klero Solutions | Custom Websites & Digital Tools for Small Businesses | Halifax, NS",
  description:
    "Klero Solutions builds custom websites, booking systems, and digital tools for small businesses in Halifax and the Maritimes. Built to rank on Google, not from a template.",
  openGraph: {
    title:
      "Klero Solutions | Custom Websites & Digital Tools for Small Businesses",
    description:
      "Klero Solutions builds custom websites, booking systems, and digital tools for small businesses in Halifax and the Maritimes.",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${albertSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
