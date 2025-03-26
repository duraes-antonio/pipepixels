export function formatFileSize(bytes: number) {
    if (bytes === 0) {
        return '0 Bytes';
    }

    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    // Calculate right unit
    const i = Math.floor(Math.log(bytes) / Math.log(1024));

    // Calculate parsed value with 2 decimals
    const finalValue = parseFloat(
        (bytes / Math.pow(1024, i)).toFixed(2),
    ).toLocaleString();
    return `${finalValue} ${sizes[i]}`;
}
