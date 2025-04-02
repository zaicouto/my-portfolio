import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { githubUrl } from "@/helpers/constants";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "../ui/badge";

// TODO: adicionar animação de hover nos cards e adicionar projetos reais

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
            Projetos em Destaque
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-8">
            Alguns projetos que desenvolvi recentemente.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="E-commerce Platform"
            description="A full-featured e-commerce platform with product management, cart functionality, and payment processing."
            tags={["Next.js", "Node.js", "MongoDB", "Stripe"]}
            image="https://placehold.co/300x500"
            demoUrl="https://example.com"
            repoUrl="https://github.com"
          />
          <ProjectCard
            title="Task Management App"
            description="A collaborative task management application with real-time updates and team collaboration features."
            tags={["React", "Firebase", "Tailwind CSS", "Redux"]}
            image="https://placehold.co/300x500"
            demoUrl="https://example.com"
            repoUrl="https://github.com"
          />
          <ProjectCard
            title="Social Media Dashboard"
            description="An analytics dashboard for social media managers with data visualization and reporting features."
            tags={["TypeScript", "D3.js", "Express", "PostgreSQL"]}
            image="https://placehold.co/300x500"
            demoUrl="https://example.com"
            repoUrl="https://github.com"
          />
        </div>
        <div className="mt-12 text-center">
          <Button asChild variant="outline">
            <Link
              href={`${githubUrl}?tab=repositories`}
              target="_blank"
              rel="noreferrer"
            >
              Veja Mais Projetos no GitHub <Github className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  description,
  tags,
  image,
  demoUrl,
  repoUrl,
}: {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl: string;
  repoUrl: string;
}) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video w-full overflow-hidden">
        <Image
          src={image || "https://placehold.co/300x500"}
          alt={title}
          className="object-cover w-full h-full"
          width={300}
          height={500}
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <Link href={demoUrl} target="_blank" rel="noreferrer">
            Live Demo <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <Link href={repoUrl} target="_blank" rel="noreferrer">
            Código <Github className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
