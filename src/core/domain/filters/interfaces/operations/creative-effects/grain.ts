import { FilterOperation } from '@/core/domain/filters/interfaces/operations/filter-operation';

export type GrainOperationParams = {
    /**
     * The grain to apply to the image.
     * Value range is from 0 to 100.
     */
    value: number;
};

export type GrainOperation = FilterOperation<GrainOperationParams>;
