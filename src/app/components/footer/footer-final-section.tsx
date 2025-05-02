import Link from 'next/link';
import { CreditCard, Mail } from 'lucide-react';
import { Button } from '@/app/ui/button';

const data = {
    currentYear: new Date().getFullYear(),
    companyName: 'PipePixels',
    email: 'support@pipepixels.com',
};

export function FooterFinalSection() {
    const { currentYear, companyName, email } = data;
    const mailTo = `mailto:${email}`;
    return (
        <div className="mt-8 pt-6 border-t flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
                © {currentYear} {companyName}. All rights reserved.
            </p>

            <div className="mt-4 md:mt-0 flex items-center space-x-4">
                <Link
                    href={mailTo}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    {email}
                </Link>

                <Button variant="outline" size="sm" className="ml-4" asChild>
                    <Link href="/pricing">
                        <CreditCard className="h-4 w-4 mr-2" />
                        Buy Credits
                    </Link>
                </Button>
            </div>
        </div>
    );
}
