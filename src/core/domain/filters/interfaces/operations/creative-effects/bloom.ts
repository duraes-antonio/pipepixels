import { FilterOperation } from '@/core/domain/filters/interfaces/operations/filter-operation';

export type BloomOperationParams = {
    /**
     * The bloom to apply to the image.
     * Value range is from 0 to 100.
     */
    value: number;
};

export type BloomOperation = FilterOperation<BloomOperationParams>;
