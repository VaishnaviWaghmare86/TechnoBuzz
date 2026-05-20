import { Metadata } from "next";
import { CareersBoard } from "@/components/careers-board";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Technobuzz Systems across software engineering, cybersecurity, DevOps, design, and AI roles."
};

export default function CareersPage() {
  return (
    <>
      <section className="cyber-surface border-b border-border py-24">
        <div className="container max-w-4xl">
          <Badge>Careers</Badge>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">Build secure technology for clients who operate at scale.</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">Explore engineering, cybersecurity, cloud, design, and AI roles in a culture built on ownership, learning, and meaningful delivery.</p>
        </div>
      </section>

      <Section eyebrow="Why Join Technobuzz Systems" title="Work on serious software and security problems with strong teams.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {["Enterprise client exposure", "Mentorship and certification support", "Modern engineering practices", "Remote-friendly collaboration", "Security-first culture", "Clear growth paths"].map((item) => (
            <Card key={item} className="p-6 font-semibold">{item}</Card>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/40" eyebrow="Benefits" title="Employee benefits designed for sustainable performance.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {["Health coverage", "Learning budget", "Flexible work", "Performance bonuses", "Paid certifications", "Modern equipment", "Wellness leave", "Career coaching"].map((item) => (
            <Card key={item} className="p-5 text-sm font-semibold">{item}</Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Open Roles" title="Search and filter current opportunities.">
        <CareersBoard />
      </Section>

      <Section className="bg-slate-950 text-white" eyebrow="Culture" title="A practical, high-trust workplace.">
        <div className="grid gap-5 lg:grid-cols-4">
          {["Work Culture", "Hiring Process", "Internship Program", "Remote Opportunities"].map((title) => (
            <div key={title} className="rounded-lg border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">Structured onboarding, clear expectations, collaborative reviews, and room to grow through real project ownership.</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
