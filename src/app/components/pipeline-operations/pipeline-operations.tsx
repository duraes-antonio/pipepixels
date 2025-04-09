import { ImageOperationType } from '@/app/components/list-operations/list-operations.model';
import { OperationCard } from '@/app/components/operation-card/operation-card';

export function PipelineOperations({
    operations,
}: {
    operations: ImageOperationType[];
}) {
    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-lg font-medium">Operations</h2>
            <ul className="flex flex-col gap-2">
                {operations.map((operation, index) => (
                    <li key={index}>
                        <OperationCard operation={operation} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
