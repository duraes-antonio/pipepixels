import { Nunito } from 'next/font/google';
import './globals.css';
import React, { ReactNode } from 'react';
import Header from '@/app/components/header/header';
import Footer from '@/app/components/footer/footer';
import { ThemeProvider } from 'next-themes';

const nunito = Nunito({
    weight: ['400', '600', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
});

export default function RootLayout(props: { children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${nunito.className} antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem>
                    <div className="grid w-full">
                        <Header />
                        <main className="">{props.children}</main>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
