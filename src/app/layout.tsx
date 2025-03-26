import { Nunito } from 'next/font/google';
import './globals.css';

const nunito = Nunito({
    weight: ['400', '600', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
});

export default function RootLayout(props: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${nunito.className} text-gray-600 antialiased`}>
                {props.children}
            </body>
        </html>
    );
}
