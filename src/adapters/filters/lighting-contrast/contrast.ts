import { ContrastOperation } from '@/core/domain/filters/interfaces/operations/lighting-contrast/contrast';

export const contrast: ContrastOperation =
    ({ value }) =>
    (image) => {
        const data = image.data;

        // O valor de "value" é mapeado de -100 a 100
        const contrastFactor = (value + 100) / 100; // Fator de contraste de 0 a 2

        // Passo 1: Ajustar o contraste para cada pixel
        for (let i = 0; i < data.length; i += 4) {
            let r = data[i]; // Red
            let g = data[i + 1]; // Green
            let b = data[i + 2]; // Blue

            // Para cada canal, aplicar o ajuste de contraste
            r = 128 + (r - 128) * contrastFactor;
            g = 128 + (g - 128) * contrastFactor;
            b = 128 + (b - 128) * contrastFactor;

            // Garantir que os valores não saiam do intervalo [0, 255]
            r = Math.min(255, Math.max(0, r));
            g = Math.min(255, Math.max(0, g));
            b = Math.min(255, Math.max(0, b));

            // Atualizar os valores dos canais de cor
            data[i] = r;
            data[i + 1] = g;
            data[i + 2] = b;
        }

        return image;
    };
