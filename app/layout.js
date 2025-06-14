import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Portfolio | Achem - Full Stack Developer",
  description:
    "I'm a Full-Stack Web Developer creating seamless, user-friendly web applications.",
  icons: {
    icon: "/favicon.ico", // For browsers
    apple: "/apple-touch-icon.png", // For iOS Home Screen
  },
  openGraph: {
    title: "Portfolio | Achem - Full Stack Developer",
    description:
      "I'm a Full-Stack Web Developer creating seamless, user-friendly web applications.",
    url: "https://achemnomaer.vercel.app/",
    siteName: "Achem Habib Nomaer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio | Achem - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Achem - Full Stack Developer",
    description:
      "I'm a Full-Stack Web Developer creating seamless, user-friendly web applications.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900`}
      >
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}