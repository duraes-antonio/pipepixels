import { operationCategories } from '@/app/components/list-operations/list-operations.const';
import {
    ImageOperationType,
    OperationCategoryType,
} from './list-operations.model';
import PipelineOperations, {
    OperationItem,
} from '@/app/components/pipeline-operations/pipeline-operations';
import { useContext } from 'react';
import { PipelineContext } from '@/app/shared/state/pipeline-operations.state';

export interface OperationCategoryProps {
    category: OperationCategoryType;
    onAddOperation: (operation: ImageOperationType) => void;
}

function OperationCategory({
    category,
    onAddOperation,
}: OperationCategoryProps) {
    return (
        <li className="grid gap-y-2">
            <div className="flex items-center gap-x-2 text-secondary-text">
                {category.icon}
                <h3 className="font-semibold">{category.name}</h3>
            </div>
            <ul className="grid gap-y-2 text-secondary-text">
                {category.operations.map((o, index) => (
                    <OperationItem
                        onAdd={(o) => onAddOperation(o)}
                        key={index}
                        operation={o}
                    />
                ))}
            </ul>
        </li>
    );
}

export function ListOperations() {
    const { setState, state } = useContext(PipelineContext);
    const addOperation = (operation: ImageOperationType) => {
        setState((prev) => [...prev, operation]);
        console.log(operation, state);
    };
    return (
        <div className="bg-background-secondary/60 py-3 pl-3 grid h-[inherit] gap-y-4">
            <PipelineOperations operations={state} />

            <h2 className="text-primary-text font-bold">Add operation</h2>
            <ol className="flex flex-col gap-y-6 overflow-auto pr-2 mr-1">
                {operationCategories.map((category, index) => (
                    <OperationCategory
                        onAddOperation={(o) => addOperation(o)}
                        category={category}
                        key={index}
                    />
                ))}
            </ol>
        </div>
    );
}
