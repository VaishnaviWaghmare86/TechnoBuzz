import Link from "next/link";
import { Linkedin, Mail, ShieldCheck, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company, compliance, serviceGroups } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-slate-950 text-slate-200">
      <div className="container grid gap-10 py-14 lg:grid-cols-[1.2fr_.8fr_.8fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-cyan-400 text-slate-950">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <span className="font-bold">{company.name}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
            Enterprise software, cybersecurity, cloud infrastructure, and AI transformation partner for ambitious global teams.
          </p>
          <div className="mt-5 flex gap-2">
            <Button variant="ghost" size="icon" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Email">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-white">Services</h3>
          <div className="mt-4 grid gap-3 text-sm text-slate-400">
            {serviceGroups.map((group) => (
              <Link key={group.category} href="/services" className="hover:text-cyan-300">
                {group.category}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-white">Company</h3>
          <div className="mt-4 grid gap-3 text-sm text-slate-400">
            <Link href="/about" className="hover:text-cyan-300">About</Link>
            <Link href="/case-studies" className="hover:text-cyan-300">Case Studies</Link>
            <Link href="/careers" className="hover:text-cyan-300">Careers</Link>
            <Link href="/blog" className="hover:text-cyan-300">Insights</Link>
            <Link href="/contact" className="hover:text-cyan-300">Contact</Link>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-white">Newsletter</h3>
          <p className="mt-4 text-sm leading-6 text-slate-400">Security advisories, cloud updates, and enterprise engineering insights.</p>
          <form className="mt-4 flex gap-2">
            <input className="min-w-0 flex-1 rounded-md border border-white/10 bg-white/10 px-3 py-2 text-sm outline-none placeholder:text-slate-500 focus:ring-2 focus:ring-cyan-400" placeholder="Work email" />
            <Button type="submit" variant="cyber">Subscribe</Button>
          </form>
          <div className="mt-5 flex flex-wrap gap-2">
            {compliance.slice(0, 4).map((item) => (
              <span key={item} className="rounded-md border border-cyan-400/20 px-2 py-1 text-xs text-cyan-200">{item}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  );
}
