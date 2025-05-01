import { FilterHandler } from '@/core/domain/filters/interfaces/operations/filter-operation';
import { logExecutionTime } from '@/core/application/util/decorators';

export class ApplyFilters {
    constructor() {}

    @logExecutionTime()
    apply(image: ImageData[], filters: FilterHandler[]) {
        const processedImages = image.map((img) =>
            filters.reduce((acc, filter) => filter(acc), img),
        );
        return processedImages;
    }
}
