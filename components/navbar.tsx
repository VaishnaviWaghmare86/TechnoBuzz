"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ShieldCheck, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { company, navItems, serviceGroups } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/82 backdrop-blur-xl">
      <nav className="container flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" aria-label={`${company.name} home`}>
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <span className="text-base font-bold tracking-tight sm:text-lg">{company.name}</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) =>
            item.label === "Services" ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground",
                    pathname === item.href && "text-foreground"
                  )}
                >
                  {item.label}
                </Link>
                <div className="invisible absolute left-1/2 top-9 w-[780px] -translate-x-1/2 rounded-lg border border-border/70 bg-background/95 p-5 opacity-0 shadow-premium backdrop-blur-xl transition group-hover:visible group-hover:opacity-100">
                  <div className="grid grid-cols-3 gap-4">
                    {serviceGroups.map((group) => (
                      <Link key={group.category} href="/services" className="rounded-md p-3 hover:bg-accent">
                        <group.icon className="mb-3 h-5 w-5 text-cyan-500" />
                        <div className="font-semibold">{group.category}</div>
                        <p className="mt-1 line-clamp-2 text-xs leading-5 text-muted-foreground">{group.summary}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground",
                  pathname === item.href && "text-foreground"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Button asChild size="sm" variant="cyber">
            <Link href="/contact">Get Consultation</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container grid gap-2 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-semibold hover:bg-accent"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2" variant="cyber">
              <Link href="/contact" onClick={() => setOpen(false)}>
                Get Consultation
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
