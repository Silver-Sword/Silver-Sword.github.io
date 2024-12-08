import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { MasonryCard } from "@/components/ui/masonry/MasonryCard";
import { ImageData } from "@/lib/ImageData";
interface FavoriteCardProps {
  category: string;
  name: string;
  link: string;
  imageData: ImageData;
  columnWidth: number;
}

export default function FavoriteCard({
  category,
  name,
  link,
  imageData,
  columnWidth,
}: FavoriteCardProps) {
  return (
    // <div
    //   className="break-inside-avoid"
    // >
    <MasonryCard columnWidth={columnWidth} imageData={imageData}>
      {/* <div
          className="relative w-full"
          style={{ paddingBottom: `${100 / imageAspectRatio}%` }}
        >
          <Image
            src={image_url}
            alt={`Image for ${name}`}
            fill
            className="object-cover"
          />
        </div> */}
      <div className="p-4 flex flex-col">
        <div className="flex justify-between items-start">
          <Badge variant="secondary" className="text-xs">
            {category.replace(/_/g, " ")}
          </Badge>
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80"
            title={`Check out ${name}`}
          >
            <ExternalLink className="h-4 w-4" />
            <span className="sr-only">Visit {name}</span>
          </Link>
        </div>
        <h3 className="text-lg font-semibold leading-tight mt-3 mb-1">
          {name}
        </h3>
      </div>
    </MasonryCard>
  );
}
