'use client';
import { useState } from 'react';
// import { ContactModal } from './contact-modal';
import {
    FooterSection,
    FooterSectionData,
} from '@/app/components/footer/footer-section';
import { FooterFinalSection } from '@/app/components/footer/footer-final-section';
import { FooterSocialLinks } from '@/app/components/footer/footer-social-links';

const sectionsData: FooterSectionData[] = [
    {
        title: 'Product',
        links: [
            { label: 'Features', href: '/features' },
            { label: 'Pricing', href: '/pricing' },
        ],
    },
    {
        title: 'Company',
        links: [
            { label: 'About', href: '/about' },
            { label: 'Privacy Policy', href: '/privacy' },
            { label: 'Terms of Service', href: '/terms' },
        ],
    },
];

export default function Footer() {
    const [contactModalOpen, setContactModalOpen] = useState(false);
    return (
        <footer className="border-t bg-muted/40">
            <div className="container mx-auto py-8 px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold">PipePixels</h3>
                        <p className="text-sm text-muted-foreground">
                            Professional image processing made simple. Apply
                            filters to batches of images with just a few clicks.
                        </p>
                        <FooterSocialLinks />
                    </div>

                    {sectionsData.map(({ title, links }) => (
                        <FooterSection
                            title={title}
                            links={links}
                            key={title}
                        />
                    ))}
                </div>

                <FooterFinalSection />
            </div>

            {/* Contact Modal */}
            {/*<ContactModal*/}
            {/*    open={contactModalOpen}*/}
            {/*    onOpenChange={setContactModalOpen}*/}
            {/*/>*/}
        </footer>
    );
}
