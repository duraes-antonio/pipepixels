import { ReactNode } from 'react';
import { FilterType } from '@/core/domain/filters/interfaces/operations/filter-operation';

export interface ImageOperationMetadata {
    name: string;
    description: string;
    type: FilterType;
}

export interface OperationCategoryType {
    name: string;
    icon: ReactNode;
    operations: ImageOperationMetadata[];
}
