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
  description: "Haroon Sagheer — Frontend Developer from Pakistan specializing in React, Next.js, Tailwind CSS and modern web development.",
  keywords: ["Haroon Sagheer", "Frontend Developer", "React Developer", "Next.js Developer", "Web Developer Pakistan"],
  authors: [{ name: "Haroon Sagheer" }],
  creator: "Haroon Sagheer",
  metadataBase: new URL("https://haroon-sagheer.vercel.app"),
  openGraph: {
    title: "Haroon Sagheer | Frontend Developer",
    description: "Frontend Developer from Pakistan specializing in React and Next.js.",
    url: "https://haroon-sagheer.vercel.app",
    siteName: "Haroon Sagheer Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haroon Sagheer | Frontend Developer",
    description: "Frontend Developer from Pakistan specializing in React and Next.js.",
  },
  robots: {
    index: true,
    follow: true,
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