import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
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
  );
}
