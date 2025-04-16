import { MonochromeOperation } from '@/core/domain/filters/interfaces/operations/creative-effects/monochrome';

export const monochrome: MonochromeOperation = () => (image) => {
    const data = image.data;

    // Passo 1: Converter cada pixel para tons de cinza
    for (let i = 0; i < data.length; i += 4) {
        const r = data[i]; // Red
        const g = data[i + 1]; // Green
        const b = data[i + 2]; // Blue

        // Calcular a luminância para a conversão para escala de cinza (grayscale)
        const grayscale = 0.2126 * r + 0.7152 * g + 0.0722 * b;

        // Passo 2: Aplicar o valor de cinza nos canais de cor (RGB)
        data[i] = grayscale; // Red
        data[i + 1] = grayscale; // Green
        data[i + 2] = grayscale; // Blue
    }

    return image;
};
