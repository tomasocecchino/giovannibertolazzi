import { cn } from "@/lib/utils";

export function PageTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h1 className={cn("text-4xl md:text-5xl font-headline font-bold text-primary mb-8 md:mb-12 text-center", className)}>
      {children}
    </h1>
  );
}
