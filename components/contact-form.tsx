"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import axios from "axios";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = {
      email: e.currentTarget.email.value,
      name: e.currentTarget.firstName.value,
      message: e.currentTarget.message.value,
    };
    
    if (!formData.email || !formData.name || !formData.message) {
      toast("Por favor, preencha todos os campos.");
      setIsSubmitting(false);
      return;
    }
    
    console.log('formData :>> ', JSON.stringify(formData));
    
    try {
      const response = await axios.post("/api/send", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      if (response.data.error) {
        console.error(response.data.error);
        toast("Erro ao enviar mensagem. Tente novamente mais tarde.");
        setIsSubmitting(false);
        return;
      }
      
      toast("Mensagem enviada! Obrigado por entrar em contato.");
      
      setIsSubmitting(false);
      e.currentTarget.reset();
    } catch (error) {
      console.error(error);
      toast("Erro ao enviar mensagem. Tente novamente mais tarde.");
      setIsSubmitting(false);
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="firstName">Nome</Label>
        <Input id="firstName" placeholder="Seu nome" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Seu email" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Mensagem</Label>
        <Textarea
          id="message"
          placeholder="Sua mensagem"
          className="min-h-[120px]"
          required
        />
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
      </Button>
    </form>
  );
}
