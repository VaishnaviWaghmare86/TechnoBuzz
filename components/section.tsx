import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function Section({
  eyebrow,
  title,
  description,
  children,
  className
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("py-20 sm:py-24", className)}>
      <div className="container">
        {(eyebrow || title || description) && (
          <div className="mx-auto mb-12 max-w-3xl text-center">
            {eyebrow && <Badge>{eyebrow}</Badge>}
            {title && <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">{title}</h2>}
            {description && <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">{description}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
