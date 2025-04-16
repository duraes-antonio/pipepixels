import { FilterOperation } from '@/core/domain/filters/interfaces/operations/filter-operation';

export type BlurOperationParams = {
    /**
     * The blur value to apply to the image.
     * A value of 0 means no change, higher values increase the blur effect.
     * The value is in the range of -0 to 100.
     **/
    value: number;
};

export type BlurOperation = FilterOperation<BlurOperationParams>;
