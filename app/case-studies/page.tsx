import { Metadata } from "next";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Enterprise software, cybersecurity, cloud migration, and AI implementation case studies from Technobuzz Systems."
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="cyber-surface border-b border-border py-24">
        <div className="container max-w-4xl">
          <Badge>Case Studies</Badge>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">Transformation programs with measurable outcomes.</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">Representative enterprise projects across software modernization, security transformation, cloud migration, and AI implementation.</p>
        </div>
      </section>
      <Section>
        <div className="grid gap-6">
          {caseStudies.map((study) => (
            <Card key={study.title} className="p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <Badge>{study.category}</Badge>
                  <h2 className="mt-4 text-2xl font-bold">{study.title}</h2>
                </div>
                <div className="rounded-md bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-700 dark:text-cyan-200">{study.metrics}</div>
              </div>
              <div className="mt-6 grid gap-5 lg:grid-cols-3">
                <div>
                  <h3 className="font-semibold">Problem</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{study.problem}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Solution</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{study.solution}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Results</h3>
                  <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                    {study.results.map((result) => <li key={result}>• {result}</li>)}
                  </ul>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {study.technologies.map((tech) => <span key={tech} className="rounded-md border border-border px-3 py-1 text-xs font-semibold">{tech}</span>)}
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
