"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import axios from "axios";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  firstName: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Email inválido").min(1, "Insira um e-mail válido"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
  "form-name": z.literal("contact"),
});

type FormValues = z.infer<typeof schema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsSubmitting(true);
    console.log("data :>> ", data);

    try {
      // Gambiarra para Netflify forms funcionar com Next.js
      await axios.post("/__forms.html", new URLSearchParams(data).toString(), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      toast("Mensagem enviada! Obrigado por entrar em contato.");
      reset(); // Reseta o formulário após o envio
    } catch (error) {
      console.error(error);
      toast("Erro ao enviar mensagem. Tente novamente mais tarde.");
      setIsSubmitting(false);
      return;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
      name="contact"
    >
      {/* Esse input é necessário para o Netflify forms reconhecer o envio. Também é necessário definir explicitamente os attr name dos inputs. */}
      <input
        type="hidden"
        value="contact"
        {...register("form-name")}
        name="form-name"
      />

      <div className="space-y-2">
        <Label htmlFor="firstName">Nome</Label>
        <Input
          placeholder="Seu primeiro nome"
          required
          {...register("firstName")}
          name="firstName"
        />
        {errors.firstName && (
          <p className="text-red-700 text-sm">{errors.firstName.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          placeholder="Seu email"
          required
          {...register("email")}
          name="email"
        />
        {errors.email && (
          <p className="text-red-700 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Mensagem</Label>
        <Textarea
          placeholder="Sua mensagem"
          className="min-h-[120px]"
          required
          {...register("message")}
          name="message"
        />
        {errors.message && (
          <p className="text-red-700 text-sm">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
      </Button>
    </form>
  );
}
