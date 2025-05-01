'use client';
import { Button } from '../../ui/button';
import { ThemeToggle } from '@/app/components/header/theme-toggle';
import { HeaderActions } from '@/app/components/header/header-actions';

// TODO: Refactor this to reduce the complexity of the header component
export default function Header() {
    return (
        <header className="border-b bg-background">
            <div className="container mx-auto py-3 px-4 md:px-6">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="bg-secondary p-1 rounded-md">
                            <img
                                src="/logo_transparent.png"
                                alt="Logo"
                                className="size-10"
                            />
                        </div>
                        <h1 className="text-xl font-bold">PipePixels</h1>
                    </div>

                    <div className="flex gap-3">
                        <ThemeToggle />
                        <Button variant="outline" size="sm">
                            Upload Images
                        </Button>
                        <HeaderActions />
                    </div>
                </div>
            </div>
        </header>
    );
}
