import { operationCategories } from '@/app/components/list-operations/list-operations.const';
import {
    ImageOperationType,
    OperationCategoryType,
} from './list-operations.model';
import PipelineOperations, {
    OperationItem,
} from '@/app/components/pipeline-operations/pipeline-operations';
import { useState } from 'react';

function OperationCategory({ category }: { category: OperationCategoryType }) {
    return (
        <li className="grid gap-y-2">
            <div className="flex items-center gap-x-2 text-secondary-text">
                {category.icon}
                <h3 className="font-semibold">{category.name}</h3>
            </div>
            <ul className="grid gap-y-2 text-secondary-text">
                {category.operations.map((o, index) => (
                    <OperationItem key={index} operation={o}></OperationItem>
                ))}
            </ul>
        </li>
    );
}

export function ListOperations() {
    const [operations, setOperations] = useState<ImageOperationType[]>([]);
    return (
        <div className="bg-background-secondary/60 p-3 grid h-[inherit] gap-y-4">
            <PipelineOperations operations={operations} />

            <h2 className="text-primary-text font-bold">Add operation</h2>
            <ol className="flex flex-col gap-y-6 overflow-auto ">
                {operationCategories.map((category, index) => (
                    <OperationCategory category={category} key={index} />
                ))}
            </ol>
        </div>
    );
}
