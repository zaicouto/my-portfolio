import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
