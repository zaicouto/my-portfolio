import { devName, email, githubUrl, linkedinUrl } from '@/helpers/constants'
import { Github, Linkedin, Mail } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

export default function FooterComponent() {
    return (
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
    )
}
