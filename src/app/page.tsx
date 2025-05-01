import { Metadata } from 'next';
import React from 'react';
import { CreditsProvider } from './shared/state/credits-context';
import { ImagesProvider } from './shared/state/images.state';

export const metadata: Metadata = {
    title: 'PipePixels',
    description: 'pipepixels.com: Magically edit multiple images',
};

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <CreditsProvider>
                <ImagesProvider>
                    <div className="flex flex-col md:flex-row flex-1 container mx-auto py-4 px-4 md:px-6 gap-6">
                        {/*<Sidebar />*/}
                        {/*<ImageList />*/}
                    </div>
                </ImagesProvider>
            </CreditsProvider>
            {/*<Footer />*/}
        </div>
    );
}
