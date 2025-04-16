import { BlurOperation } from '@/core/domain/filters/interfaces/operations/sharpness-clarity/blur';

export const blur: BlurOperation =
    ({ value }) =>
    (image) => {
        const data = image.data;
        const width = image.width;
        const height = image.height;

        // Definir o tamanho do desfoque com base no valor
        const blurRadius = Math.floor((value / 100) * 10); // Valor entre 0 e 10 (quanto maior o valor, maior o desfoque)

        // Função para aplicar o desfoque
        function applyBlur(
            x: number,
            y: number,
        ): { r: number; g: number; b: number } {
            let rSum = 0,
                gSum = 0,
                bSum = 0;
            let count = 0;

            // Aplicando um filtro de média para o pixel (x, y) com raio blurRadius
            for (let dx = -blurRadius; dx <= blurRadius; dx++) {
                for (let dy = -blurRadius; dy <= blurRadius; dy++) {
                    const nx = x + dx;
                    const ny = y + dy;

                    // Verifica se o pixel está dentro da imagem
                    if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                        const index = (ny * width + nx) * 4; // Índice do pixel no array de dados

                        rSum += data[index]; // Red
                        gSum += data[index + 1]; // Green
                        bSum += data[index + 2]; // Blue
                        count++;
                    }
                }
            }

            // Média dos valores para os canais de cor
            return {
                r: rSum / count,
                g: gSum / count,
                b: bSum / count,
            };
        }

        // Passo 1: Aplica o desfoque a cada pixel da imagem
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const index = (y * width + x) * 4;

                // Aplica o desfoque aos valores RGB
                const { r, g, b } = applyBlur(x, y);

                // Atualiza os valores de cada pixel
                data[index] = r;
                data[index + 1] = g;
                data[index + 2] = b;
            }
        }

        return image;
    };
