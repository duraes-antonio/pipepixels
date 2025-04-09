'use client';
import * as React from 'react';
import { useState } from 'react';
import { ImageOperationType } from '@/app/components/list-operations/list-operations.model';

export interface OperationItemProps {
    operation: ImageOperationType;
    onAdd?: (operation: ImageOperationType) => void;
}

// TODO: Implement specific operation item component
export function OperationCard({ onAdd, operation }: OperationItemProps) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className="rounded-sm bg-background py-1 px-2">
            <button
                onClick={toggle}
                className="font-medium text-sm w-full block cursor-pointer">
                {operation.name}
            </button>

            <div
                className={`overflow-hidden transition-all duration-250 ${
                    isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="p-2">
                    Este é o conteúdo oculto! Você pode adicionar qualquer coisa
                    aqui, como textos, formulários, imagens, etc.
                </div>
            </div>
        </div>
    );
}
