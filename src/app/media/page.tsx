import { PageTitle } from "@/components/PageTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const photos = Array.from({ length: 9 }, (_, i) => i + 1);
const videos = Array.from({ length: 4 }, (_, i) => i + 1);

export default function MediaPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <PageTitle>Media</PageTitle>
      <Tabs defaultValue="photos" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
          <TabsTrigger value="photos">Photos</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>
        <TabsContent value="photos">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {photos.map((p) => (
              <Card key={p} className="overflow-hidden group">
                <Image
                  src={`https://picsum.photos/600/400?random=${p}`}
                  alt={`Gallery image ${p}`}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover aspect-video group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint="concert performance"
                />
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="videos">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {videos.map((v) => (
              <Card key={v}>
                <CardContent className="p-4">
                  <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Video Placeholder {v}</p>
                  </div>
                  <p className="font-semibold mt-2">Performance at Hall {v}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
