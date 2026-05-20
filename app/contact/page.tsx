import { Metadata } from "next";
import { CalendarDays, Mail, MapPin, Phone } from "lucide-react";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Technobuzz Systems for enterprise software, cybersecurity, cloud, AI, and IT consulting."
};

export default function ContactPage() {
  return (
    <>
      <section className="cyber-surface border-b border-border py-24">
        <div className="container max-w-4xl">
          <Badge>Contact</Badge>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">Book a consultation with our enterprise technology team.</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">Tell us about your software, cybersecurity, cloud, or AI goals. We will map the right next steps.</p>
        </div>
      </section>
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <Card className="p-6">
            <h2 className="text-2xl font-bold">Contact form</h2>
            <form className="mt-6 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="rounded-md border border-border bg-background px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Full name" />
                <input className="rounded-md border border-border bg-background px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Work email" type="email" />
              </div>
              <input className="rounded-md border border-border bg-background px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Company" />
              <select className="rounded-md border border-border bg-background px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-cyan-400" defaultValue="">
                <option value="" disabled>What do you need?</option>
                <option>Software Development</option>
                <option>Cybersecurity Services</option>
                <option>Cloud & DevOps</option>
                <option>AI & Data Solutions</option>
                <option>IT Consulting</option>
              </select>
              <textarea className="min-h-36 rounded-md border border-border bg-background px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Project goals, timeline, compliance needs, or current challenges" />
              <Button type="submit" variant="cyber" size="lg">Send Message</Button>
            </form>
          </Card>
          <div className="grid gap-5">
            <Card className="p-6">
              <h2 className="text-2xl font-bold">Office locations</h2>
              <div className="mt-5 grid gap-3">
                {company.offices.map((office) => <div key={office} className="flex items-center gap-3 text-sm"><MapPin className="h-4 w-4 text-cyan-500" /> {office}</div>)}
              </div>
            </Card>
            <Card className="p-6">
              <div className="grid gap-4 text-sm">
                <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-cyan-500" /> {company.email}</div>
                <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-cyan-500" /> {company.phone}</div>
                <div className="flex items-center gap-3"><CalendarDays className="h-4 w-4 text-cyan-500" /> Consultation slots available Monday-Friday</div>
              </div>
            </Card>
            <Card className="min-h-64 overflow-hidden">
              <iframe
                title="Technobuzz Systems office map"
                className="h-64 w-full border-0 grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Pune%2C%20Maharashtra%2C%20India&output=embed"
              />
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
