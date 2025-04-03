import { email, linkedinUrl, githubUrl } from "@/helpers/constants";
import { Mail, Linkedin, Github } from "lucide-react";
import React from "react";
import ContactForm from "../contact-form";
import Link from "next/link";

export default function ContactSection() {
  return (
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
  );
}
