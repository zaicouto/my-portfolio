import { devName, email, githubUrl, linkedinUrl, navLinks } from "@/helpers/constants";
import Link from "next/link";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function NavbarComponent() {
    return (
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
    )
}