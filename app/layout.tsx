import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Providers } from "@/components/providers";
import { ScrollProgress } from "@/components/scroll-progress";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://technobuzzsystems.com"),
  title: {
    default: "Technobuzz Systems | Enterprise Software & Cybersecurity",
    template: "%s | Technobuzz Systems"
  },
  description:
    "Technobuzz Systems delivers enterprise software development, cybersecurity, cloud infrastructure, AI, and digital transformation solutions.",
  keywords: [
    "Technobuzz Systems",
    "enterprise software development",
    "cybersecurity services",
    "SOC monitoring",
    "cloud infrastructure",
    "AI solutions",
    "IT consulting"
  ],
  openGraph: {
    title: "Technobuzz Systems",
    description: "Secure. Scale. Transform.",
    type: "website",
    locale: "en_US",
    url: "/"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
