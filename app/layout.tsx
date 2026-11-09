import type { Metadata } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/fraunces/wght-italic.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";
import AnimatedCursor from "@/components/AnimatedCursor";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Trading Universe Academy — Course Ledger",
  description:
    "Shubham Bhosale's Trading Universe Academy — curriculum, mentor credentials, batch fees and FAQs in one link, in place of a PDF passed around on WhatsApp.",
};

export default function RootLayout({ children, }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AnimatedCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
