import { Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/app/ui/button';
import Link from 'next/link';

interface FooterSocialLinkData {
    href: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    label: string;
}

const data: FooterSocialLinkData[] = [
    {
        href: 'https://twitter.com',
        Icon: Twitter,
        label: 'Twitter',
    },
    {
        href: 'https://github.com',
        Icon: Github,
        label: 'GitHub',
    },
    {
        href: 'https://linkedin.com',
        Icon: Linkedin,
        label: 'LinkedIn',
    },
];

export function FooterSocialLinks() {
    return (
        <div className="flex space-x-3 pt-2">
            {data.map(({ href, Icon, label }) => (
                <Button key={label} variant="ghost" size="icon" asChild>
                    <Link
                        title={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer">
                        <Icon className="h-4 w-4" />
                        <span className="sr-only">{label}</span>
                    </Link>
                </Button>
            ))}
        </div>
    );
}
