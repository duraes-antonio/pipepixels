import { HighlightOperation } from '@/core/domain/filters/interfaces/operations/lighting-contrast/highlight';

export const highlight: HighlightOperation =
    ({ value }) =>
    (image) => {
        const data = image.data;

        // O valor de "value" é mapeado de -100 a 100
        const highlightFactor = value / 100; // Mapeando para um fator de ajuste (-1 a 1)

        // Passo 1: Ajustar os destaques para cada pixel
        for (let i = 0; i < data.length; i += 4) {
            let r = data[i]; // Red
            let g = data[i + 1]; // Green
            let b = data[i + 2]; // Blue

            // A ideia é aumentar ou diminuir os pixels mais claros (destaques)
            if (r > 180 || g > 180 || b > 180) {
                // Considerando pixels claros (destaques)
                r = Math.min(255, r + (255 - r) * highlightFactor);
                g = Math.min(255, g + (255 - g) * highlightFactor);
                b = Math.min(255, b + (255 - b) * highlightFactor);
            }

            // Atualizar os valores dos canais de cor
            data[i] = r;
            data[i + 1] = g;
            data[i + 2] = b;
        }

        return image;
    };
