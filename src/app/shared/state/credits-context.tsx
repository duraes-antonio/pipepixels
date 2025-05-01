'use client';

import { createContext, type ReactNode, useContext, useState } from 'react';

interface CreditsContextType {
    credits: number;
    useCredits: (amount: number) => void;
    addCredits: (amount: number) => void;
}

const CreditsContext = createContext<CreditsContextType | undefined>(undefined);

export function CreditsProvider({ children }: { children: ReactNode }) {
    const [credits, setCredits] = useState<number>(50); // Start with 50 credits

    const useCredits = (amount: number) => {
        setCredits((prev) => Math.max(0, prev - amount));
    };

    const addCredits = (amount: number) => {
        setCredits((prev) => prev + amount);
    };

    return (
        <CreditsContext.Provider
            value={{
                credits,
                useCredits,
                addCredits,
            }}>
            {children}
        </CreditsContext.Provider>
    );
}

export function useCredits() {
    const context = useContext(CreditsContext);
    if (context === undefined) {
        throw new Error('useCredits must be used within a CreditsProvider');
    }
    return context;
}
