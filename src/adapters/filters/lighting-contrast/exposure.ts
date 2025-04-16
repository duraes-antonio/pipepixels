import { ExposureOperation } from '@/core/domain/filters/interfaces/operations/lighting-contrast/exposure';

export const exposure: ExposureOperation =
    ({ value }) =>
    (image) => {
        const data = image.data;

        // O valor de "value" é mapeado de -100 a 100
        // Um valor de 0 significa nenhuma alteração, valores positivos aumentam a exposição (mais claros),
        // valores negativos diminuem a exposição (mais escuros).
        const exposureFactor = Math.pow(2, value / 100); // Ajuste exponencial baseado no valor de `value`

        // Passo 1: Ajustar a exposição para cada pixel
        for (let i = 0; i < data.length; i += 4) {
            let r = data[i]; // Red
            let g = data[i + 1]; // Green
            let b = data[i + 2]; // Blue

            // Ajustar os valores de R, G e B com base na exposição
            r = Math.min(255, Math.max(0, r * exposureFactor));
            g = Math.min(255, Math.max(0, g * exposureFactor));
            b = Math.min(255, Math.max(0, b * exposureFactor));

            // Atualizar os valores dos canais de cor
            data[i] = r;
            data[i + 1] = g;
            data[i + 2] = b;
        }

        return image;
    };
