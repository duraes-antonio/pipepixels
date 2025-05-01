'use client';

import { CreditCard, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
// import { ContactModal } from './contact-modal';
import { Button } from '../../ui/button';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const [contactModalOpen, setContactModalOpen] = useState(false);

    return (
        <footer className="border-t bg-muted/40">
            <div className="container mx-auto py-8 px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold">PipePixels</h3>
                        <p className="text-sm text-muted-foreground">
                            Professional image processing made simple. Apply
                            filters to batches of images with just a few clicks.
                        </p>
                        <div className="flex space-x-3 pt-2">
                            <Button variant="ghost" size="icon" asChild>
                                <Link
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <Twitter className="h-4 w-4" />
                                    <span className="sr-only">Twitter</span>
                                </Link>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <Link
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <Github className="h-4 w-4" />
                                    <span className="sr-only">GitHub</span>
                                </Link>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <Link
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <Linkedin className="h-4 w-4" />
                                    <span className="sr-only">LinkedIn</span>
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Product */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-semibold uppercase tracking-wider">
                            Product
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/features"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/pricing"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    Pricing
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-semibold uppercase tracking-wider">
                            Company
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/about"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/privacy"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <button
                                    onClick={() => setContactModalOpen(true)}
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-muted-foreground">
                        © {currentYear} PipePixels. All rights reserved.
                    </p>

                    <div className="mt-4 md:mt-0 flex items-center space-x-4">
                        <Link
                            href="mailto:support@pipepixels.com"
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center">
                            <Mail className="h-4 w-4 mr-2" />
                            support@pipepixels.com
                        </Link>

                        <Button
                            variant="outline"
                            size="sm"
                            className="ml-4"
                            asChild>
                            <Link href="/pricing">
                                <CreditCard className="h-4 w-4 mr-2" />
                                Buy Credits
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Contact Modal */}
            {/*<ContactModal*/}
            {/*    open={contactModalOpen}*/}
            {/*    onOpenChange={setContactModalOpen}*/}
            {/*/>*/}
        </footer>
    );
}
