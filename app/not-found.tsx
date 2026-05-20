import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="text-sm font-semibold text-cyan-500">404</p>
      <h1 className="mt-3 text-4xl font-bold">Page not found</h1>
      <p className="mt-4 max-w-md text-muted-foreground">The page you requested is not available in this enterprise site build.</p>
      <Button asChild className="mt-6">
        <Link href="/">Return Home</Link>
      </Button>
    </section>
  );
}
