import { Metadata } from "next";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { aboutTimeline, compliance, leadership, values, whyChoose } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Technobuzz Systems, our mission, leadership, culture, certifications, and enterprise delivery values."
};

export default function AboutPage() {
  return (
    <>
      <section className="cyber-surface border-b border-border py-24">
        <div className="container max-w-4xl">
          <Badge>About Technobuzz Systems</Badge>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">Engineering trust into every digital transformation.</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Technobuzz Systems was created to help ambitious organizations build resilient technology: secure software, reliable cloud platforms, intelligent data systems, and operationally mature cybersecurity programs.
          </p>
        </div>
      </section>

      <Section eyebrow="Company Story" title="From software delivery partner to enterprise technology firm.">
        <div className="grid gap-5 lg:grid-cols-2">
          <Card className="p-7">
            <h2 className="text-2xl font-semibold">Mission</h2>
            <p className="mt-4 leading-7 text-muted-foreground">Deliver secure, scalable, and measurable technology outcomes that help clients operate with confidence.</p>
          </Card>
          <Card className="p-7">
            <h2 className="text-2xl font-semibold">Vision</h2>
            <p className="mt-4 leading-7 text-muted-foreground">Become a globally trusted software and cybersecurity company recognized for engineering excellence and accountable transformation.</p>
          </Card>
        </div>
      </Section>

      <Section className="bg-muted/40" eyebrow="Leadership" title="Experienced leaders across product, cloud, and cyber.">
        <div className="grid gap-5 lg:grid-cols-3">
          {leadership.map((leader) => (
            <Card key={leader.name} className="p-6">
              <div className="mb-5 h-28 rounded-md bg-gradient-to-br from-cyan-400/25 to-blue-900/25" />
              <h3 className="text-xl font-semibold">{leader.name}</h3>
              <p className="mt-1 text-sm text-cyan-600 dark:text-cyan-300">{leader.role}</p>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{leader.focus}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Core Values" title="Principles that shape how we work.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <Card key={value.title} className="p-6">
              <value.icon className="h-8 w-8 text-cyan-500" />
              <h3 className="mt-5 text-xl font-semibold">{value.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{value.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-950 text-white" eyebrow="Certifications" title="Aligned with enterprise-grade security and delivery standards.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {compliance.map((item) => <div key={item} className="rounded-lg border border-white/10 bg-white/5 p-5 font-semibold">{item}</div>)}
        </div>
      </Section>

      <Section eyebrow="Timeline" title="A focused path of capability expansion.">
        <div className="mx-auto max-w-4xl">
          {aboutTimeline.map(([year, text]) => (
            <div key={year} className="grid gap-5 border-l border-cyan-400/40 pb-8 pl-6 sm:grid-cols-[120px_1fr]">
              <div className="font-bold text-cyan-500">{year}</div>
              <p className="leading-7 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/40" eyebrow="Company Culture" title="High ownership, calm delivery, and continuous learning.">
        <div className="grid gap-5 lg:grid-cols-3">
          {["Secure by design", "Documentation as a habit", "Respectful distributed collaboration"].map((item) => (
            <Card key={item} className="p-6">
              <h3 className="text-xl font-semibold">{item}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">Teams operate with clear goals, strong review practices, and transparent delivery rituals.</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Why Clients Trust Us" title="Delivery maturity that reduces risk.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((item) => <div key={item} className="rounded-lg border border-border bg-card p-5 font-semibold">{item}</div>)}
        </div>
      </Section>
    </>
  );
}
