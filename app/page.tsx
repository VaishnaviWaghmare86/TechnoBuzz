import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe2, LockKeyhole, MapPin, ShieldCheck } from "lucide-react";
import { Metadata } from "next";
import { Particles } from "@/components/particles";
import { Reveal } from "@/components/motion";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  caseStudies,
  company,
  compliance,
  homeServices,
  industries,
  process,
  stats,
  technologies,
  testimonials,
  whyChoose
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Secure. Scale. Transform.",
  description: "Enterprise software development, cybersecurity, cloud infrastructure, and digital transformation by Technobuzz Systems."
};

export default function HomePage() {
  return (
    <>
      <section className="cyber-surface relative overflow-hidden border-b border-border">
        <Particles />
        <div className="absolute inset-0 bg-cyber-grid grid-pattern opacity-40" />
        <div className="container relative grid min-h-[calc(100vh-4rem)] items-center gap-12 py-20 lg:grid-cols-[1.05fr_.95fr]">
          <Reveal>
            <Badge>Enterprise Software · Cybersecurity · Cloud · AI</Badge>
            <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">Secure. Scale. Transform.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Technobuzz Systems delivers enterprise software development, cybersecurity, cloud infrastructure, and digital transformation solutions.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="cyber">
                <Link href="/contact">Get Consultation <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-border/70 bg-background/60 p-4 backdrop-blur">
                  <div className="text-2xl font-bold text-cyan-500">{stat.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="relative mx-auto w-full max-w-xl">
              <div className="rounded-lg border border-cyan-400/30 bg-slate-950 p-5 text-slate-100 shadow-premium">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-cyan-300">Security Command Center</p>
                    <h2 className="text-lg font-semibold">Live Risk Intelligence</h2>
                  </div>
                  <ShieldCheck className="h-6 w-6 text-cyan-300" />
                </div>
                <div className="grid gap-3">
                  {["Cloud posture hardened", "Threat alerts triaged", "CI/CD controls passed", "Compliance evidence ready"].map((item, index) => (
                    <div key={item} className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 p-3">
                      <span className="flex items-center gap-3 text-sm"><CheckCircle2 className="h-4 w-4 text-cyan-300" /> {item}</span>
                      <span className="text-xs text-cyan-200">{98 - index}%</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 h-40 rounded-md border border-cyan-400/20 bg-cyber-grid grid-pattern">
                  <div className="h-full bg-gradient-to-tr from-cyan-400/20 via-transparent to-blue-500/20" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Section eyebrow="Company Overview" title="A security-first technology partner for enterprise change." description="We combine product engineering, cyber defense, cloud architecture, and AI delivery into one accountable transformation partner.">
        <div className="grid gap-5 lg:grid-cols-3">
          {["Build resilient software platforms.", "Protect users, systems, and data.", "Modernize operations for global scale."].map((item) => (
            <Reveal key={item}>
              <Card className="h-full p-6">
                <LockKeyhole className="mb-5 h-8 w-8 text-cyan-500" />
                <h3 className="text-xl font-semibold">{item}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">Integrated advisory and delivery teams align architecture, implementation, risk, and operations.</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/40" eyebrow="Services" title="Enterprise capabilities built around trust and execution.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {homeServices.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.05}>
              <Card className="h-full transition hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-premium">
                <CardHeader>
                  <service.icon className="h-9 w-9 text-cyan-500" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-7 text-muted-foreground">{service.text}</CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Why Choose Us" title="Governance, engineering depth, and security maturity in one team.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((item) => (
            <div key={item} className="flex gap-3 rounded-lg border border-border bg-card p-5">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-500" />
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-950 text-white" eyebrow="Industries" title="Built for regulated, high-growth, and mission-critical teams." description="Our delivery model adapts to compliance, reliability, and customer expectations across markets.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((item) => <div key={item} className="rounded-lg border border-white/10 bg-white/5 p-5 text-sm font-semibold">{item}</div>)}
        </div>
      </Section>

      <Section eyebrow="Technologies" title="Modern stacks, proven controls, production outcomes.">
        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((item) => <span key={item} className="rounded-md border border-border bg-card px-4 py-2 text-sm font-semibold">{item}</span>)}
        </div>
      </Section>

      <Section className="bg-muted/40" eyebrow="Client Testimonials" title="Trusted by technology, security, and operations leaders.">
        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="p-6">
              <p className="text-base leading-8 text-muted-foreground">“{testimonial.quote}”</p>
              <div className="mt-6 font-semibold">{testimonial.name}</div>
              <div className="text-sm text-cyan-600 dark:text-cyan-300">{testimonial.role}</div>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Security & Compliance" title="Compliance-ready delivery from discovery through operations.">
        <div className="grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
          <Card className="p-6">
            <ShieldCheck className="h-10 w-10 text-cyan-500" />
            <h3 className="mt-4 text-2xl font-semibold">Controls that travel with the product lifecycle.</h3>
            <p className="mt-4 leading-7 text-muted-foreground">Secure SDLC, infrastructure baselines, identity governance, audit evidence, and incident readiness are embedded into delivery.</p>
          </Card>
          <div className="grid gap-3 sm:grid-cols-2">
            {compliance.map((item) => <div key={item} className="rounded-lg border border-border bg-card p-4 font-semibold">{item}</div>)}
          </div>
        </div>
      </Section>

      <Section className="bg-muted/40" eyebrow="Case Studies" title="Measurable outcomes across software, security, cloud, and AI.">
        <div className="grid gap-5 lg:grid-cols-4">
          {caseStudies.map((study) => (
            <Card key={study.title} className="p-5">
              <Badge>{study.category}</Badge>
              <h3 className="mt-4 text-lg font-semibold">{study.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{study.metrics}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Process Workflow" title="A clear path from strategy to secure operations.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {process.map((step, index) => (
            <Card key={step.title} className="p-5">
              <div className="text-sm font-bold text-cyan-500">0{index + 1}</div>
              <step.icon className="mt-5 h-7 w-7" />
              <h3 className="mt-4 font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-950 text-white" eyebrow="Global Presence" title="Distributed delivery with enterprise accountability.">
        <div className="grid gap-5 lg:grid-cols-5">
          {company.offices.map((office) => (
            <div key={office} className="rounded-lg border border-white/10 bg-white/5 p-5">
              <MapPin className="mb-4 h-5 w-5 text-cyan-300" />
              <div className="font-semibold">{office}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Common questions from enterprise buyers.">
        <div className="mx-auto grid max-w-4xl gap-4">
          {[
            ["Can you support ongoing managed security?", "Yes. We offer SOC monitoring, alert triage, incident response, and compliance reporting."],
            ["Do you build and operate cloud platforms?", "Yes. We design landing zones, CI/CD, Kubernetes, observability, and DevSecOps automation."],
            ["Can you modernize existing applications?", "Yes. We assess architecture, prioritize risk, and incrementally migrate legacy systems."],
            ["Do you work with global clients?", "Yes. Our distributed model supports multi-region stakeholders and remote delivery."]
          ].map(([q, a]) => (
            <details key={q} className="rounded-lg border border-border bg-card p-5">
              <summary className="cursor-pointer font-semibold">{q}</summary>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </Section>

      <section className="cyber-surface border-t border-border py-20">
        <div className="container flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <Badge>Contact CTA</Badge>
            <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">Ready to secure and scale your next digital platform?</h2>
          </div>
          <Button asChild size="lg" variant="cyber">
            <Link href="/contact">Book a Consultation <Globe2 className="h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
