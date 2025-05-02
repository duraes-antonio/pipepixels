import Link from 'next/link';

export interface FooterLink {
    label: string;
    href: string;
}

export interface FooterSectionData {
    title: string;
    links: FooterLink[];
}

export function FooterSection(props: FooterSectionData) {
    const { links, title } = props;
    return (
        <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
                {title}
            </h3>
            <ul className="space-y-2">
                {links.map((link) => (
                    <li key={link.label}>
                        <Link
                            href={link.href}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
