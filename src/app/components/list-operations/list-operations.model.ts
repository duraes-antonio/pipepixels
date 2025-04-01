import { ReactNode } from 'react';

export interface ImageOperationType {
    name: string;
    description: string;
}

export interface OperationCategoryType {
    name: string;
    icon: ReactNode;
    operations: ImageOperationType[];
}
