import { PageTitle } from "@/components/PageTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { NEWS } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NewsPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <PageTitle>News & Updates</PageTitle>
      <div className="max-w-3xl mx-auto space-y-8">
        {NEWS.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle className="text-primary font-headline">{item.title}</CardTitle>
              <CardDescription>{item.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{item.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="link" className="p-0 text-accent">
                <Link href={item.link}>Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
