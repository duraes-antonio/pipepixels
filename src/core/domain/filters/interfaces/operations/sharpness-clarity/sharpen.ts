import { FilterOperation } from '@/core/domain/filters/interfaces/operations/filter-operation';

export type SharpenOperationParams = {
    /**
     * The amount of sharpening to apply to the image.
     * A value of 0 means no change, negative values blur the image, and positive values sharpen it.
     * The value is in the range of 0 to 100.
     */
    value: number;
};

export type SharpenOperation = FilterOperation<SharpenOperationParams>;
