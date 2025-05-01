'use client';
import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { ImageOperationMetadata } from '@/app/components/list-operations/list-operations.model';

type PipelineState = ImageOperationMetadata[];

interface PipelineContextType {
    state: PipelineState;
    setState: Dispatch<SetStateAction<PipelineState>>;
}

export const PipelineContext = createContext<PipelineContextType>({
    state: [],
    setState: () => null,
});

export function PipelineProvider({ children }: { children: React.ReactNode }) {
    const [state, setState] = useState<PipelineState>([]);
    return (
        <PipelineContext.Provider value={{ state, setState }}>
            {children}
        </PipelineContext.Provider>
    );
}
