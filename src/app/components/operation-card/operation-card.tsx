'use client';
import * as React from 'react';
import { useState } from 'react';
import { ImageOperationMetadata } from '@/app/components/list-operations/list-operations.model';

export interface OperationItemProps {
    operation: ImageOperationMetadata;
    onAddAction: (operation: ImageOperationMetadata) => void;
}

// TODO: Implement specific operation item component
export function OperationCard({ onAddAction, operation }: OperationItemProps) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className="text-sm rounded-sm bg-background py-1.5 px-3">
            <button
                onClick={toggle}
                className="font-medium w-full block cursor-pointer text-left">
                {operation.name}
            </button>

            <div
                className={`grid gap-y-2 overflow-hidden transition-all duration-250 ${
                    isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <input
                    type="text"
                    className="w-full rounded-sm border border-border bg-background px-2 py-1 text-sm text-text"
                    placeholder={`Valor: ${3}`}
                />
                <button
                    className="bg-red-500"
                    onClick={() => onAddAction(operation)}>
                    Apply
                </button>
            </div>
        </div>
    );
}
