'use client';
import React, { memo } from 'react';
import { Dropzone } from '@/app/components/dropzone/dropzone';
import { ImagesProvider } from '@/app/shared/state/images.state';
import { PipelineProvider } from '@/app/shared/state/pipeline-operations.state';
import { ListOperations } from '@/app/components/list-operations/list-operations';

function HomePageInternal() {
    return (
        <ImagesProvider>
            <PipelineProvider>
                <div className="grid grid-cols-[240px_auto] w-full h-[calc(100dvh-40px*2)]">
                    <ListOperations />
                    <div className="px-6 py-10 bg-background-secondary">
                        <Dropzone />
                    </div>
                </div>
            </PipelineProvider>
        </ImagesProvider>
    );
}

const HomePage = memo(HomePageInternal);

export default HomePage;
