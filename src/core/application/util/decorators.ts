enum SecondsByUnit {
    Seconds = 1,
    Minutes = 60,
    Hours = 3600,
    Days = 86400,
}

/**
 * Format given duration in milliseconds to human-readable format.
 * @param duration Duration in milliseconds
 * @example
 * formatDuration(37_056_000) // "10:17:36"
 * formatDuration(1_000) // "00:00:01"
 * formatDuration(1_000_000) // "00:16:40"
 */
export function formatDuration(duration: number): string {
    const durationInSec = Math.floor(duration / 1_000);
    const hours = Math.floor(durationInSec / SecondsByUnit.Hours);
    const minutes = Math.floor(
        (durationInSec % SecondsByUnit.Hours) / SecondsByUnit.Minutes,
    );
    const seconds = durationInSec % SecondsByUnit.Minutes;
    const formatTime = (time: number) => String(time).padStart(2, '0');
    return `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

export function logExecutionTime() {
    return (target: unknown, key: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: unknown[]) {
            const start = performance.now();
            const result = originalMethod.apply(this, args);
            const end = performance.now();
            const duration = end - start;
            const formattedDuration = formatDuration(duration);
            console.log(`${target} - ${key}: ${formattedDuration}`);
            return result;
        };

        return descriptor;
    };
}
