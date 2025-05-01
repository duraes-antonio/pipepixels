import { ImageOperationMetadata } from '@/app/components/list-operations/list-operations.model';
import { OperationCard } from '@/app/components/operation-card/operation-card';
import { ApplyFilters } from '@/core/application/use-cases/apply-filters';
import { useContext } from 'react';
import { ImagesContext } from '@/app/shared/state/images.state';
import {
    filesToImageData,
    imageDataToFile,
} from '@/app/components/pipeline-operations/pipeline-operations.util';
import { blur } from '@/adapters/filters/sharpness-clarity/blur';

export function PipelineOperations({
    operations,
}: {
    operations: ImageOperationMetadata[];
}) {
    const { setState, state } = useContext(ImagesContext);
    const applyOperation = (operation: ImageOperationMetadata) => {
        const useCase = new ApplyFilters();
        filesToImageData(state, (images) => {
            const res = useCase.apply(images, [blur({ value: 85 })]);
            const imageConvertFilePromises = res.map((imageData) =>
                imageDataToFile(imageData),
            );
            // @ts-ignore
            Promise.all(imageConvertFilePromises).then((files: File[]) => {
                setState(files);
            });
        });
    };
    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-lg font-medium">Operations</h2>
            <ul className="flex flex-col gap-2">
                {operations.map((operation, index) => (
                    <li key={index}>
                        <OperationCard
                            operation={operation}
                            onAddAction={(op) => applyOperation(op)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
