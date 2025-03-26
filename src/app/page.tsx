import HomePage from '@/app/pages/home/home';

import { Metadata } from 'next';
import Header from '@/app/components/header';
import Footer from './components/footer';

export const metadata: Metadata = {
    title: 'PipePixels',
    description: 'pipepixels.com: Magically edit multiple images',
};

export default function Home() {
    return (
        <>
            <Header />
            <main className="flex w-full flex-col gap-[32px] row-start-2 items-center">
                <HomePage></HomePage>
            </main>
            <Footer />
        </>
    );
}
