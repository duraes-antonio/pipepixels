import { FilterOperation } from '@/core/domain/filters/interfaces/operations/filter-operation';

export type HighlightOperationParams = {
    /**
     * The highlight value to apply to the image.
     * A value of 0 means no change, negative values darken the image, and positive values brighten it.
     * The value is in the range of -100 to 100.
     */
    value: number;
};

export type HighlightOperation = FilterOperation<HighlightOperationParams>;
