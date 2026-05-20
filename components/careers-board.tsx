"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { Search, Upload, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { jobs } from "@/lib/data";

const departments = ["All", ...Array.from(new Set(jobs.map((job) => job.department)))];

export function CareersBoard() {
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState("All");
  const [selectedJob, setSelectedJob] = useState(jobs[0]);

  const filteredJobs = useMemo(
    () =>
      jobs.filter((job) => {
        const matchesDepartment = department === "All" || job.department === department;
        const matchesQuery = `${job.title} ${job.requirements.join(" ")}`.toLowerCase().includes(query.toLowerCase());
        return matchesDepartment && matchesQuery;
      }),
    [department, query]
  );

  return (
    <div>
      <div className="mb-8 grid gap-4 lg:grid-cols-[1fr_auto]">
        <label className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search roles, skills, or teams"
            className="h-11 w-full rounded-md border border-border bg-background pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </label>
        <div className="flex flex-wrap gap-2">
          {departments.map((item) => (
            <Button key={item} variant={department === item ? "default" : "outline"} onClick={() => setDepartment(item)}>
              {item}
            </Button>
          ))}
        </div>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filteredJobs.map((job) => (
            <motion.div key={job.title} layout initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <Card className="h-full transition hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-premium">
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <CardTitle>{job.title}</CardTitle>
                      <p className="mt-2 text-sm text-muted-foreground">{job.department} · {job.location}</p>
                    </div>
                    <Dialog.Root>
                      <Dialog.Trigger asChild>
                        <Button variant="cyber" onClick={() => setSelectedJob(job)}>Apply Now</Button>
                      </Dialog.Trigger>
                      <Dialog.Portal>
                        <Dialog.Overlay className="fixed inset-0 z-[80] bg-slate-950/70 backdrop-blur-sm" />
                        <Dialog.Content className="fixed left-1/2 top-1/2 z-[90] max-h-[90vh] w-[92vw] max-w-xl -translate-x-1/2 -translate-y-1/2 overflow-auto rounded-lg border border-border bg-background p-6 shadow-premium">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <Dialog.Title className="text-2xl font-bold">Apply for {selectedJob.title}</Dialog.Title>
                              <Dialog.Description className="mt-2 text-sm text-muted-foreground">
                                Share your profile and resume. Our talent team will review the application.
                              </Dialog.Description>
                            </div>
                            <Dialog.Close asChild>
                              <Button size="icon" variant="ghost" aria-label="Close"><X className="h-5 w-5" /></Button>
                            </Dialog.Close>
                          </div>
                          <form className="mt-6 grid gap-4">
                            <input className="rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Full name" />
                            <input className="rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Email address" type="email" />
                            <input className="rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-cyan-400" placeholder="LinkedIn or portfolio URL" />
                            <label className="flex min-h-28 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-cyan-400/60 bg-cyan-400/5 text-center text-sm">
                              <Upload className="mb-2 h-6 w-6 text-cyan-500" />
                              Resume upload UI · PDF, DOCX up to 5MB
                              <input type="file" className="sr-only" />
                            </label>
                            <textarea className="min-h-24 rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Briefly tell us why this role fits you" />
                            <Button type="submit" variant="cyber">Submit Application</Button>
                          </form>
                        </Dialog.Content>
                      </Dialog.Portal>
                    </Dialog.Root>
                  </div>
                </CardHeader>
                <CardContent className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-semibold">Requirements</h4>
                    <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                      {job.requirements.map((item) => <li key={item}>• {item}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">Responsibilities</h4>
                    <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                      {job.responsibilities.map((item) => <li key={item}>• {item}</li>)}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
