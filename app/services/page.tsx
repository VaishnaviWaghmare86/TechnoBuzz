import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Metadata } from "next";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { serviceGroups } from "@/lib/data";

export const metadata: Metadata = {
  title: "Enterprise Services",
  description: "Detailed software development, cybersecurity, cloud, AI, data, and IT consulting services by Technobuzz Systems."
};

export default function ServicesPage() {
  return (
    <>
      <section className="cyber-surface border-b border-border py-24">
        <div className="container max-w-4xl">
          <Badge>Services</Badge>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">Enterprise technology services built for scale, security, and measurable outcomes.</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">Every offering includes discovery, architecture, implementation, quality assurance, security review, documentation, and handover support.</p>
        </div>
      </section>

      {serviceGroups.map((group, groupIndex) => (
        <Section key={group.category} className={groupIndex % 2 ? "bg-muted/40" : undefined} eyebrow={group.category} title={group.summary}>
          <div className="mb-8 flex flex-wrap gap-2">
            {group.stack.map((item) => <span key={item} className="rounded-md border border-border bg-card px-3 py-1 text-xs font-semibold">{item}</span>)}
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {group.services.map((service) => (
              <Card key={service} className="flex h-full flex-col">
                <CardHeader>
                  <group.icon className="h-8 w-8 text-cyan-500" />
                  <CardTitle>{service}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <p className="text-sm leading-7 text-muted-foreground">
                    Enterprise-grade {service.toLowerCase()} designed with secure architecture, measurable delivery milestones, and operational readiness.
                  </p>
                  <div className="mt-5 grid gap-3 text-sm">
                    {["Reduced delivery and operational risk", "Scalable implementation patterns", "Security and governance built in"].map((benefit) => (
                      <div key={benefit} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5">
                    <h4 className="text-sm font-semibold">Features</h4>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">Assessment, roadmap, implementation, automation, reporting, documentation, and support.</p>
                  </div>
                  <div className="mt-5">
                    <h4 className="text-sm font-semibold">Technology stack</h4>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{group.stack.slice(0, 5).join(", ")}</p>
                  </div>
                  <Button asChild className="mt-6" variant="outline">
                    <Link href="/contact">Discuss this service <ArrowRight className="h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
      ))}

      <section className="cyber-surface border-t border-border py-20">
        <div className="container flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <Badge>Service CTA</Badge>
            <h2 className="mt-4 text-3xl font-bold">Need a tailored enterprise delivery plan?</h2>
          </div>
          <Button asChild size="lg" variant="cyber"><Link href="/contact">Get Consultation</Link></Button>
        </div>
      </section>
    </>
  );
}
