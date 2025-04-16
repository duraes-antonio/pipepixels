import { BrightnessOperation } from '@/core/domain/filters/interfaces/operations/lighting-contrast/brightness';

export const brightness: BrightnessOperation =
    ({ value }) =>
    (image) => {
        const data = image.data;

        // Mapeando o valor de brightness (value) para um intervalo de ajuste
        const brightnessFactor = value / 100; // O valor de 'value' vai de -100 a 100, o que resulta em um fator de -1 a 1

        // Iterar sobre os pixels e ajustar o brilho
        for (let i = 0; i < data.length; i += 4) {
            let r = data[i]; // Red
            let g = data[i + 1]; // Green
            let b = data[i + 2]; // Blue

            // Ajustar os valores de R, G, B com base no brilho
            r = Math.min(255, Math.max(0, r + 255 * brightnessFactor)); // Ajuste no valor do canal R
            g = Math.min(255, Math.max(0, g + 255 * brightnessFactor)); // Ajuste no valor do canal G
            b = Math.min(255, Math.max(0, b + 255 * brightnessFactor)); // Ajuste no valor do canal B

            // Atualizar os valores dos canais de cor
            data[i] = r;
            data[i + 1] = g;
            data[i + 2] = b;
        }

        return image;
    };
