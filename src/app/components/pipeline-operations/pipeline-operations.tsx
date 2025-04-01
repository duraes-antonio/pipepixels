import { ImageOperation } from '@/app/components/pipeline-sidebar/pipeline-sidebar.model';

export function OperationItem({ operation }: { operation: ImageOperation }) {
    return (
        <li className="rounded-sm bg-background py-1 px-2">
            <a className="font-medium text-sm">{operation.name}</a>
        </li>
    );
}

function PipelineOperations({ operations }: { operations: ImageOperation[] }) {
    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-lg font-medium">Operations</h2>
            <ul className="flex flex-col gap-2">
                {operations.map((operation, index) => (
                    <OperationItem key={index} operation={operation} />
                ))}
            </ul>
        </div>
    );
}

export default PipelineOperations;
