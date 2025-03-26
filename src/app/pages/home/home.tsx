'use client';
import React, { memo } from 'react';
import { Sidebar } from '@/app/components/sidebar';
import { Dropzone } from '@/app/components/dropzone/dropzone';
import { ImagesProvider } from '@/app/shared/state/images.state';

function HomePageInternal() {
    return (
        <ImagesProvider>
            <div className="grid grid-cols-[auto_1fr] w-full h-[calc(100dvh-40px*2)]">
                <Sidebar />
                <div className="p-6">
                    <Dropzone />
                </div>
            </div>
        </ImagesProvider>
    );
}

const HomePage = memo(HomePageInternal);

export default HomePage;
