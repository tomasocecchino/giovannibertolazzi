import { PageTitle } from "@/components/PageTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DISCOGRAPHY } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function DiscographyPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <PageTitle>Discography</PageTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {DISCOGRAPHY.map((album) => (
          <Card key={album.id} className="overflow-hidden group">
            <CardHeader className="p-0">
              <Image
                src={album.imageUrl}
                alt={`Album cover for ${album.title}`}
                width={500}
                height={500}
                className="w-full h-auto object-cover aspect-square group-hover:scale-105 transition-transform duration-300"
                data-ai-hint="album cover"
              />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-xl font-headline text-primary">{album.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{album.year}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex gap-2">
              <Button asChild size="sm" className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href={album.streamLink} target="_blank">Stream</Link>
              </Button>
              <Button asChild size="sm" variant="outline" className="flex-1">
                <Link href={album.buyLink} target="_blank">Buy</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
