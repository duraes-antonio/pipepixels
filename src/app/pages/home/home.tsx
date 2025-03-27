'use client';
import React, { memo } from 'react';
import { Dropzone } from '@/app/components/dropzone/dropzone';
import { ImagesProvider } from '@/app/shared/state/images.state';
import PipelineSidebar from '@/app/components/pipeline-sidebar';

function HomePageInternal() {
    return (
        <ImagesProvider>
            <div className="grid grid-cols-[auto_1fr] w-full h-[calc(100dvh-40px*2)]">
                <PipelineSidebar />
                <div className="p-6">
                    <Dropzone />
                </div>
            </div>
        </ImagesProvider>
    );
}

const HomePage = memo(HomePageInternal);

export default HomePage;
