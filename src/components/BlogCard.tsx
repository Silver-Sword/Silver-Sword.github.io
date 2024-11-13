import Link from "next/link";
import Image from "next/image";

import { BlogProperties } from "@/app/blog/BlogProperties";

export function BlogCard({ id, title, description, image }: BlogProperties) {
  return (
    <Link key={id} href={`/blog/${id}`} className="block group">
      <div className="border rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg">
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </Link>
  );
}