import { Nunito } from 'next/font/google';
import './globals.css';
import React from 'react';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';

const nunito = Nunito({
    weight: ['400', '600', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
});

export default function RootLayout(props: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${nunito.className} antialiased`}>
                <div className="grid w-full">
                    <Header />
                    <main className="">{props.children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
