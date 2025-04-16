import { FilterOperation } from '@/core/domain/filters/interfaces/operations/filter-operation';

export type GlamourOperationParams = {
    /**
     * The glamour to apply to the image.
     * The value is in the range of 0 to 100.
     */
    value: number;
};

export type GlamourOperation = FilterOperation<GlamourOperationParams>;
