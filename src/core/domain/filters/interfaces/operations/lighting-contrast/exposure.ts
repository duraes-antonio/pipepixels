import { FilterOperation } from '@/core/domain/filters/interfaces/operations/filter-operation';

export type ExposureOperationParams = {
    /**
     * The exposure value to apply to the image.
     * A value of 0 means no change, negative values decrease exposure, and positive values increase exposure.
     * The value is in the range of -100 to 100.
     **/
    value: number;
};

export type ExposureOperation = FilterOperation<ExposureOperationParams>;
