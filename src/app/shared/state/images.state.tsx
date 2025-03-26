'use client';
import { createContext, Dispatch, SetStateAction, useState } from 'react';

type ImagesState = File[];

interface ImagesContextType {
    state: ImagesState;
    setState: Dispatch<SetStateAction<ImagesState>>;
}

export const ImagesContext = createContext<ImagesContextType>({
    state: [],
    setState: () => null,
});

export function ImagesProvider({ children }: { children: React.ReactNode }) {
    const [state, setState] = useState<ImagesState>([]);
    return (
        <ImagesContext.Provider value={{ state, setState }}>
            {children}
        </ImagesContext.Provider>
    );
}
