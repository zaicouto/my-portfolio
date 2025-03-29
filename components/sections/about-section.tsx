import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
            Sobre Mim
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Sou um desenvolvedor full stack apaixonado com mais de 2 anos de
            experiência na construção de aplicações web. Sou especialista em C#,
            .NET, JavaScript, TypeScript, React, Node.js e tecnologias web
            modernas. Minha abordagem combina experiência técnica com um forte
            foco na experiência do usuário e nas regras de negócio.
          </p>
        </div>
      </div>
    </section>
  );
}
