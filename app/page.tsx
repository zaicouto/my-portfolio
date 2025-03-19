import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowRight,
  Download,
} from "lucide-react";
import ContactForm from "@/components/contact-form";
import {
  devName,
  email,
  githubUrl,
  linkedinUrl,
  navLinks,
  skills,
} from "@/helpers/constants";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold">{devName}</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href={githubUrl} target="_blank" rel="noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href={linkedinUrl} target="_blank" rel="noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href={`mailto:${email}`}>
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="container py-10 mx-auto">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 xl:py-36">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Dev Full Stack
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Construindo aplicações web modernas com foco em desempenho,
                    acessibilidade e experiência do usuário.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <Link href="#contact">
                      Entre em Contato <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/resume.pdf" target="_blank">
                      <Download className="mr-2 h-4 w-4" /> Baixar Currículo
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  alt="Developer"
                  className="aspect-square overflow-hidden rounded-full object-cover object-center border-4 border-border"
                  height="400"
                  src="https://placehold.co/400"
                  width="400"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
                Sobre Mim
              </h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Sou um desenvolvedor full stack apaixonado com mais de 2 anos de
                experiência na construção de aplicações web. Sou especialista em
                C#, .NET, JavaScript, TypeScript, React, Node.js e tecnologias
                web modernas. Minha abordagem combina experiência técnica com um
                forte foco na experiência do usuário e nas regras de negócio.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
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

        {/* Projects Section */}
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
                <Link href={githubUrl} target="_blank" rel="noreferrer">
                  Veja Mais Projetos no GitHub{" "}
                  <Github className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-12 md:py-24 lg:py-32 bg-muted/40 rounded-lg"
        >
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
                Entre em Contato
              </h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-8">
                Tem um projeto em mente ou deseja discutir oportunidades de
                trabalho? Fique à vontade para entrar em contato!
              </p>
            </div>
            <div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Informações de Contato</h3>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <span>{email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Linkedin className="h-5 w-5 text-muted-foreground" />
                  <Link
                    href={linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    {linkedinUrl.replace("https://www.", "")}
                  </Link>
                </div>
                <div className="flex items-center space-x-2">
                  <Github className="h-5 w-5 text-muted-foreground" />
                  <Link
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    {githubUrl.replace("https://", "")}
                  </Link>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="mx-auto container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} {devName}. Todos os Direitos
            Reservados.
          </p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href={githubUrl} target="_blank" rel="noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href={linkedinUrl} target="_blank" rel="noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href={`mailto:${email}`}>
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
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
