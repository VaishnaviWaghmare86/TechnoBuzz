import { Metadata } from "next";
import { Search } from "lucide-react";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { articles } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description: "Cybersecurity insights, technology trends, cloud updates, and AI articles from Technobuzz Systems."
};

export default function BlogPage() {
  const categories = Array.from(new Set(articles.map((article) => article.category)));

  return (
    <>
      <section className="cyber-surface border-b border-border py-24">
        <div className="container max-w-4xl">
          <Badge>Insights</Badge>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">Cybersecurity, cloud, AI, and engineering intelligence.</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">A modern resource hub for leaders evaluating secure technology transformation.</p>
          <label className="relative mt-8 block max-w-xl">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <input placeholder="Search articles" className="h-12 w-full rounded-md border border-border bg-background/80 pl-10 pr-4 outline-none focus:ring-2 focus:ring-cyan-400" />
          </label>
        </div>
      </section>
      <Section eyebrow="Featured Articles" title="Editor-selected guidance for enterprise teams.">
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => <span key={category} className="rounded-md border border-border bg-card px-3 py-1 text-sm font-semibold">{category}</span>)}
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {articles.filter((article) => article.featured).map((article) => (
            <Card key={article.title} className="overflow-hidden">
              <div className="h-44 bg-gradient-to-br from-cyan-400/25 via-blue-700/20 to-slate-950/30" />
              <div className="p-6">
                <Badge>{article.category}</Badge>
                <h2 className="mt-4 text-xl font-semibold">{article.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{article.read} read · Executive briefing</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>
      <Section className="bg-muted/40" eyebrow="All Articles" title="Latest enterprise technology notes.">
        <div className="grid gap-4 md:grid-cols-2">
          {articles.map((article) => (
            <Card key={article.title} className="p-5">
              <div className="text-sm font-semibold text-cyan-600 dark:text-cyan-300">{article.category}</div>
              <h2 className="mt-2 text-lg font-semibold">{article.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{article.read} read</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
