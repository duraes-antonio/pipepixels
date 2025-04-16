import { FilterOperation } from '@/core/domain/filters/interfaces/operations/filter-operation';

export type ContrastOperationParams = {
    /**
     * The contrast value to apply to the image.
     * A value of 0 means no change, negative values decrease contrast, and positive values increase contrast.
     * The value is in the range of -100 to 100.
     */
    value: number;
};

export type ContrastOperation = FilterOperation<ContrastOperationParams>;
