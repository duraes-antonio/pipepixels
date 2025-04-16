import { SmoothOperation } from '@/core/domain/filters/interfaces/operations/sharpness-clarity/smooth';

export const smooth: SmoothOperation =
    ({ value }) =>
    (image) => {
        const data = image.data;
        const width = image.width;
        const height = image.height;

        // A intensidade do desfoque será proporcional ao valor
        const blurRadius = Math.floor((value / 100) * 5); // Ajusta o raio do desfoque de 0 a 5 (quanto maior o valor, maior o desfoque)

        // Função para calcular a média dos valores de RGB em torno de um pixel
        function applyBlur(
            x: number,
            y: number,
        ): { r: number; g: number; b: number } {
            let rSum = 0,
                gSum = 0,
                bSum = 0;
            let count = 0;

            // Aplica um filtro de desfoque com base no raio de desfoque
            for (let dx = -blurRadius; dx <= blurRadius; dx++) {
                for (let dy = -blurRadius; dy <= blurRadius; dy++) {
                    const nx = x + dx;
                    const ny = y + dy;

                    // Verifica se o pixel está dentro da imagem
                    if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                        const index = (ny * width + nx) * 4; // Índice no array de dados

                        // Soma os valores RGB dos pixels vizinhos
                        rSum += data[index]; // Red
                        gSum += data[index + 1]; // Green
                        bSum += data[index + 2]; // Blue
                        count++;
                    }
                }
            }

            // Calcula a média dos valores de RGB para a suavização
            const r = Math.min(255, Math.max(0, rSum / count));
            const g = Math.min(255, Math.max(0, gSum / count));
            const b = Math.min(255, Math.max(0, bSum / count));

            return { r, g, b };
        }

        // Passo 1: Aplica a suavização (desfoque) a cada pixel da imagem
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const index = (y * width + x) * 4;

                // Aplica o desfoque nos valores RGB
                const { r, g, b } = applyBlur(x, y);

                // Atualiza os valores de cada pixel
                data[index] = r;
                data[index + 1] = g;
                data[index + 2] = b;
            }
        }

        return image;
    };
