import { FilterOperation } from '@/core/domain/filters/interfaces/operations/filter-operation';

export type TintOperationParams = {
    /**
     * The tint value to apply to the image.
     * A value of 0 means no change, negative values decrease tint, and positive values increase it.
     * The value is in the range of -100 to 100.
     */
    value: number;
};

export type TintOperation = FilterOperation<TintOperationParams>;
