import { GrainOperation } from '@/core/domain/filters/interfaces/operations/creative-effects/grain';

export const grain: GrainOperation =
    ({ value }) =>
    (image) => {
        const data = image.data;

        // O valor de "value" será mapeado de 0 a 1
        const grainIntensity = value / 100;

        // Passo 1: Adicionar ruído (granulação) aos pixels da imagem
        for (let i = 0; i < data.length; i += 4) {
            const r = data[i]; // Red
            const g = data[i + 1]; // Green
            const b = data[i + 2]; // Blue

            // Gerar um valor aleatório de granulação (ruído) para cada canal de cor (R, G, B)
            const noiseR = (Math.random() - 0.5) * 255 * grainIntensity; // Ruído no canal R
            const noiseG = (Math.random() - 0.5) * 255 * grainIntensity; // Ruído no canal G
            const noiseB = (Math.random() - 0.5) * 255 * grainIntensity; // Ruído no canal B

            // Adicionar o ruído aos valores de cor dos pixels, limitando os valores de 0 a 255
            data[i] = Math.min(255, Math.max(0, r + noiseR));
            data[i + 1] = Math.min(255, Math.max(0, g + noiseG));
            data[i + 2] = Math.min(255, Math.max(0, b + noiseB));
        }

        return image;
    };
