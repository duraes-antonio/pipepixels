import { FilterOperation } from '@/core/domain/filters/interfaces/operations/filter-operation';

export type MonochromeOperationParams = {
    /**
     * The monochrome color value to apply to the image.
     * The value is a string representing a color in hex format (e.g., '#RRGGBB').
     **/
    color: string;
};

export type MonochromeOperation = FilterOperation<MonochromeOperationParams>;
