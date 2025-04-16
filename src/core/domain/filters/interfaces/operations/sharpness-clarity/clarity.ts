import { FilterOperation } from '@/core/domain/filters/interfaces/operations/filter-operation';

export type ClarityOperationParams = {
    /**
     * The clarity value to apply to the image.
     * A value of 0 means no change, negative values decrease clarity, and positive values increase clarity.
     * The value is in the range of -100 to 100.
     */
    value: number;
};

export type ClarityOperation = FilterOperation<ClarityOperationParams>;
