import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/app/ui/dropdown-menu';
import { Button } from '@/app/ui/button';
import { ChevronDown } from 'lucide-react';

// TODO: Implement the actions
export function HeaderActions() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button size="sm" variant={'secondary'}>
                    Actions <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem>Apply Filters</DropdownMenuItem>
                <DropdownMenuItem>Download All</DropdownMenuItem>
                <DropdownMenuItem>Clear Filters</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
