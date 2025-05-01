import { Button } from '@/app/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/app/shared/state/theme-provider';
import { useCallback } from 'react';

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const handleThemeToggle = useCallback(() => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    }, [setTheme]);
    return (
        <Button variant="outline" size="icon" onClick={handleThemeToggle}>
            {theme === 'dark' ? (
                <Sun className="h-[1.2rem] w-[1.2rem]" />
            ) : (
                <Moon className="h-[1.2rem] w-[1.2rem]" />
            )}
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
