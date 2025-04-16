import { ClarityOperation } from '@/core/domain/filters/interfaces/operations/sharpness-clarity/clarity';

export const clarity: ClarityOperation =
    ({ value }) =>
    (image) => {
        const data = image.data;
        const width = image.width;
        const height = image.height;

        // Definir a intensidade do ajuste de clareza
        const clarityFactor = value / 100; // Valor entre -1 e 1

        // Função para aplicar aumento de nitidez
        function applyClarity(
            x: number,
            y: number,
        ): { r: number; g: number; b: number } {
            let rSum = 0,
                gSum = 0,
                bSum = 0;
            let count = 0;

            // Definindo a área em torno do pixel (x, y) para aplicar o filtro
            const radius = 1; // Vamos usar uma área de 3x3 ao redor de cada pixel (aproximadamente)
            for (let dx = -radius; dx <= radius; dx++) {
                for (let dy = -radius; dy <= radius; dy++) {
                    const nx = x + dx;
                    const ny = y + dy;

                    // Verifica se o pixel está dentro da imagem
                    if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                        const index = (ny * width + nx) * 4;

                        rSum += data[index]; // Red
                        gSum += data[index + 1]; // Green
                        bSum += data[index + 2]; // Blue
                        count++;
                    }
                }
            }

            // Se value > 0, aumentamos a nitidez, se value < 0, suavizamos
            const avgR = rSum / count;
            const avgG = gSum / count;
            const avgB = bSum / count;

            // Se value for positivo, realçamos a diferença entre o valor original e a média
            const r = Math.min(
                255,
                Math.max(
                    0,
                    data[(y * width + x) * 4] +
                        clarityFactor * (data[(y * width + x) * 4] - avgR),
                ),
            );
            const g = Math.min(
                255,
                Math.max(
                    0,
                    data[(y * width + x) * 4 + 1] +
                        clarityFactor * (data[(y * width + x) * 4 + 1] - avgG),
                ),
            );
            const b = Math.min(
                255,
                Math.max(
                    0,
                    data[(y * width + x) * 4 + 2] +
                        clarityFactor * (data[(y * width + x) * 4 + 2] - avgB),
                ),
            );

            return { r, g, b };
        }

        // Passo 1: Aplica o ajuste de clareza a cada pixel da imagem
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const index = (y * width + x) * 4;

                // Aplica o filtro de clareza nos valores RGB
                const { r, g, b } = applyClarity(x, y);

                // Atualiza os valores de cada pixel
                data[index] = r;
                data[index + 1] = g;
                data[index + 2] = b;
            }
        }

        return image;
    };
