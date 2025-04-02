import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import FooterComponent from "@/components/footer-component";
import NavbarComponent from "@/components/navbar-component";

// TODO: adicionar mais metadados
export const metadata: Metadata = {
  title: "Marlon Couto | Desenvolvedor Full-stack",
  description: "Portfolio online de Marlon Couto, desenvolvedor full-stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="min-h-screen bg-background">
        <NavbarComponent />
        <main className="container py-10 mx-auto">{children}</main>
        <Toaster />
        <FooterComponent />
      </body>
    </html>
  );
}
