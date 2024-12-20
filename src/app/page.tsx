import Image from "next/image";
import Link from "next/link";

import { ProjectCard } from "@/components/ProjectCard";
import { BlogCard } from "@/components/BlogCard";
import ExternalIcon from "@/components/ui/ExternalIcon";

import { getFeaturedProjects } from "./projects/projectPreviews";
import { getFeaturedPosts } from "./blog/blogPreviews";
import { INCLUDE_BLOGS } from "./vars";

const projects = getFeaturedProjects();
const blogPosts = getFeaturedPosts();

export default function Home() {
  return (
    <div className="space-y-16">
      <title>Chris Gittings</title>
      <section id="home" className="text-center pt-20">
        <Image
          src="/sleeping dragon.png"
          alt="Profile Picture"
          width={200}
          height={200}
          className="rounded-full mx-auto mb-6"
        />
        <h1 className="text-7xl font-normal mb-4">Chris Gittings</h1>
        <p className="text-2xl text-muted-foreground mb-4">
          Software Developer
        </p>
        <div className="flex justify-center space-x-4">
          <ExternalIcon
            url="https://github.com/Silver-Sword"
            title="Silver-Sword on GitHub"
            size={70}
          />
          <ExternalIcon
            url="https://www.linkedin.com/in/chris4/"
            title="LinkedIn - Chris Gittings"
            size={70}
          />
          <ExternalIcon
            url="mailto:chrisgittingsucf@gmail.com"
            title="Email Chris Gittings"
            size={70}
          />
        </div>
      </section>

      <section id="about" className="pt-7">
        <h2 className="text-3xl font-medium mb-6 text-center">About Me</h2>
        <p className="max-w-2xl mx-auto text-center text-lg">
          Hi 👋 I'm Chris! I am a competitive programmer and software engineer
          with a Bachelor's in Computer Science from the University of Central
          Florida. I am drawn towards backend development and indie game
          development.
        </p>
      </section>

      <section id="projects" className="pt-9">
        <h2 className="text-3xl font-medium mb-6 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/projects"
            className="text-gray-500 hover:underline text-lg"
            title="Visit Project Page"
          >
            View all projects
          </Link>
        </div>
      </section>

      {INCLUDE_BLOGS && (
        <section id="blog">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Latest Blog Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="text-gray-500 hover:underline text-lg"
              title="Visit Blog Page"
            >
              View all blog posts
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
