import { FilterOperation } from '@/core/domain/filters/interfaces/operations/filter-operation';

export type SmoothOperationParams = {
    /**
     * The smooth value to apply to the image.
     * A value of 0 means no change, positive values increase smoothness.
     * The value is in the range of 0 to 100.
     **/
    value: number;
};

export type SmoothOperation = FilterOperation<SmoothOperationParams>;
