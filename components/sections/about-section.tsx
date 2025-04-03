import React from "react";

// TODO: melhorar o texto, reescrevendo-o para algo mais pessoal e menos genérico

export default function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
            Sobre Mim
          </h2>

          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Sou um Desenvolvedor Full Stack com experiência na construção e
            manutenção de aplicações web escaláveis e performáticas. Tenho
            expertise em C#, .NET, JavaScript, TypeScript, React e Node.js, além
            de trabalhar com bancos de dados SQL e NoSQL, microsserviços, Docker
            e CI/CD. Minha abordagem combina conhecimento técnico sólido com um
            forte foco na experiência do usuário, otimização de desempenho e
            regras de negócio. Já atuei no desenvolvimento de APIs eficientes,
            integrações com plataformas de terceiros e otimizações de sistemas
            para maior escalabilidade. Também tenho experiência em SEO, testes
            automatizados e debugging em produção. Estou sempre buscando
            aprimorar minhas habilidades e aplicar tecnologias modernas para
            entregar soluções robustas e de alto impacto.
          </p>
        </div>
      </div>
    </section>
  );
}
