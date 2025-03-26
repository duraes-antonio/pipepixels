'use client';
import React from 'react';
import { Sidebar } from '@/app/components/sidebar';
import { ImageSection } from '@/app/components/image-section/image-section';
import { ImagesProvider } from '@/app/shared/state/images.state';

function HomePage() {
    return (
        <ImagesProvider>
            <div className="grid grid-cols-[auto_1fr] w-full h-[calc(100dvh-40px*2)]">
                <Sidebar />
                <div className="p-6">
                    <ImageSection />
                </div>
            </div>
        </ImagesProvider>
    );
}

export default HomePage;
