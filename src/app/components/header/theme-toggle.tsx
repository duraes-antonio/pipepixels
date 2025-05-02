import { Button } from '@/app/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { memo, ReactNode, useCallback, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

const iconByTheme: Record<Theme, ReactNode> = {
    light: <Moon className="h-[1.2rem] w-[1.2rem]" />,
    dark: <Sun className="h-[1.2rem] w-[1.2rem]" />,
};

function ThemeToggleInternal() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const handleThemeToggle = useCallback(() => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    }, [setTheme]);

    useEffect(() => setMounted(true), []);

    // Prevents hydration mismatch
    if (!mounted) {
        return null;
    }

    return (
        <Button variant="outline" size="icon" onClick={handleThemeToggle}>
            {iconByTheme[theme as Theme]}
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}

export const ThemeToggle = memo(ThemeToggleInternal);
