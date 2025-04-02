import { skills } from "@/helpers/constants";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

// TODO: adicionar ícones para cada tecnologia e adicionar animação de hover

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-12 md:py-24 lg:py-32 bg-muted/40 rounded-lg"
    >
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
            Habilidades & Tecnologias
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-8">
            Essas são algumas das tecnologias e ferramentas com as quais
            trabalho diariamente.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          <SkillCard title="Frontend" skills={skills.frontend} />
          <SkillCard title="Backend" skills={skills.backend} />
          <SkillCard title="Database" skills={skills.database} />
          <SkillCard title="DevOps" skills={skills.devops} />
        </div>
      </div>
    </section>
  );
}

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
