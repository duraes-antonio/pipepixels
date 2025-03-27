import HomePage from '@/app/pages/home/home';

import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'PipePixels',
    description: 'pipepixels.com: Magically edit multiple images',
};

export default function Home() {
    return (
        <div className="grid">
            <HomePage></HomePage>
        </div>
    );
}
