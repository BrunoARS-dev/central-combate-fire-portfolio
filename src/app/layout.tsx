import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { siteContent } from "@/content/site";
import { siteUrl } from "@/lib/site-url";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl ?? new URL("http://localhost:3000"),
  title: siteContent.title,
  description: siteContent.description,
  applicationName: siteContent.name,
  alternates: siteUrl ? { canonical: "/" } : undefined,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: siteContent.name,
    title: siteContent.title,
    description: siteContent.description,
    ...(siteUrl ? { url: "/" } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.title,
    description: siteContent.description,
  },
  icons: {
    icon: "/images/marca/logo-central-combate-fire.jpg",
    apple: "/images/marca/logo-central-combate-fire.jpg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
