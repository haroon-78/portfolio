import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Haroon Sagheer | Frontend Developer",
  description:
    "Haroon Sagheer — Frontend Developer from Pakistan specializing in React, Next.js, Tailwind CSS and modern web development. View my projects, skills and experience.",
  keywords: [
    "Haroon Sagheer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Pakistan",
    "Tailwind CSS",
    "JavaScript Developer",
    "Portfolio",
  ],
  authors: [{ name: "Haroon Sagheer" }],
  creator: "Haroon Sagheer",
  metadataBase: new URL("https://haroon-sagheer.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Haroon Sagheer | Frontend Developer",
    description:
      "Frontend Developer from Pakistan specializing in React and Next.js. View my projects and skills.",
    url: "https://haroon-sagheer.vercel.app",
    siteName: "Haroon Sagheer Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haroon Sagheer | Frontend Developer",
    description:
      "Frontend Developer from Pakistan specializing in React and Next.js.",
    creator: "@haroon_sagheer",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen bg-slate-950 text-white`}
      >
        {children}
      </body>
    </html>
  );
}