import { SharpenOperation } from '@/core/domain/filters/interfaces/operations/sharpness-clarity/sharpen';

export const sharpen: SharpenOperation =
    ({ value }) =>
    (image) => {
        const data = image.data;
        const width = image.width;
        const height = image.height;

        // Definindo a intensidade de nitidez com base no valor
        const sharpenFactor = value / 100; // Mapeando o valor de -100 a 100 para 0 a 1

        // Máscara de filtro de nitidez (unsharp mask)
        const kernel = [
            [0, -1, 0],
            [-1, 5, -1],
            [0, -1, 0],
        ];

        // Função para aplicar o filtro de convolução
        function applySharpen(
            x: number,
            y: number,
        ): { r: number; g: number; b: number } {
            let rSum = 0,
                gSum = 0,
                bSum = 0;

            // Aplique o kernel de 3x3 aos pixels ao redor do pixel (x, y)
            for (let dx = -1; dx <= 1; dx++) {
                for (let dy = -1; dy <= 1; dy++) {
                    const nx = x + dx;
                    const ny = y + dy;

                    // Verifica se o pixel está dentro da imagem
                    if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                        const index = (ny * width + nx) * 4; // Índice no array de dados

                        // Aplica o kernel ao valor de cada canal RGB
                        const weight = kernel[dy + 1][dx + 1];

                        rSum += data[index] * weight; // Red
                        gSum += data[index + 1] * weight; // Green
                        bSum += data[index + 2] * weight; // Blue
                    }
                }
            }

            // O valor do filtro de nitidez aplicado ao pixel (x, y)
            const r = Math.min(
                255,
                Math.max(0, rSum * sharpenFactor + data[(y * width + x) * 4]),
            );
            const g = Math.min(
                255,
                Math.max(
                    0,
                    gSum * sharpenFactor + data[(y * width + x) * 4 + 1],
                ),
            );
            const b = Math.min(
                255,
                Math.max(
                    0,
                    bSum * sharpenFactor + data[(y * width + x) * 4 + 2],
                ),
            );

            return { r, g, b };
        }

        // Passo 1: Aplica a nitidez a cada pixel da imagem
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const index = (y * width + x) * 4;

                // Aplica o filtro de nitidez aos valores RGB
                const { r, g, b } = applySharpen(x, y);

                // Atualiza os valores de cada pixel
                data[index] = r;
                data[index + 1] = g;
                data[index + 2] = b;
            }
        }

        return image;
    };
