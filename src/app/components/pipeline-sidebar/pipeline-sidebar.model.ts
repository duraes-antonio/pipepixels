import { ReactNode } from 'react';

export interface ImageOperation {
    name: string;
    description: string;
}

export interface OperationCategoryType {
    name: string;
    icon: ReactNode;
    operations: ImageOperation[];
}
