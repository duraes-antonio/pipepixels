import { BloomOperation } from '@/core/domain/filters/interfaces/operations/creative-effects/bloom';

export const bloom: BloomOperation =
    ({ value }) =>
    (image) => {
        const data = image.data;
        const width = image.width;
        const height = image.height;

        // O valor de "value" pode ser mapeado para um fator de brilho entre 0 e 1
        const bloomFactor = value / 100;

        // Criar um novo array para armazenar os valores de brilho aumentados
        const bloomData = new Uint8ClampedArray(data);

        // Passo 1: Detectar as áreas mais brilhantes
        for (let i = 0; i < data.length; i += 4) {
            const r = data[i]; // Red
            const g = data[i + 1]; // Green
            const b = data[i + 2]; // Blue

            // Calcular a luminosidade aproximada (luminância)
            const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;

            // Passo 2: Aumentar o brilho nas áreas mais claras (criando o efeito bloom)
            if (brightness > 128) {
                // Se a luminosidade do pixel for alta, aumente o brilho
                const factor = Math.min(1 + bloomFactor, 2); // Limitar o fator de aumento para evitar overflow
                bloomData[i] = Math.min(r * factor, 255);
                bloomData[i + 1] = Math.min(g * factor, 255);
                bloomData[i + 2] = Math.min(b * factor, 255);
            }
        }

        // Passo 3: Aplicar suavização (aqui podemos simular o efeito de halo)
        const blurredBloomData = blurImage(bloomData, width, height);

        // Passo 4: Combinando a imagem original com o efeito bloom
        for (let i = 0; i < data.length; i += 4) {
            data[i] = Math.min(data[i] + blurredBloomData[i], 255); // Red
            data[i + 1] = Math.min(data[i + 1] + blurredBloomData[i + 1], 255); // Green
            data[i + 2] = Math.min(data[i + 2] + blurredBloomData[i + 2], 255); // Blue
        }

        return image;
    };

// Função auxiliar para realizar o desfoque (blur) na imagem, criando um efeito de halo suave
function blurImage(
    imageData: Uint8ClampedArray,
    width: number,
    height: number,
): Uint8ClampedArray {
    const blurred = new Uint8ClampedArray(imageData);
    const radius = 5; // O raio do desfoque pode ser ajustado

    for (let y = radius; y < height - radius; y++) {
        for (let x = radius; x < width - radius; x++) {
            let rTotal = 0,
                gTotal = 0,
                bTotal = 0;
            let count = 0;

            // Aplicando o filtro de desfoque (media)
            for (let ky = -radius; ky <= radius; ky++) {
                for (let kx = -radius; kx <= radius; kx++) {
                    const pixelIndex = ((y + ky) * width + (x + kx)) * 4;
                    rTotal += imageData[pixelIndex];
                    gTotal += imageData[pixelIndex + 1];
                    bTotal += imageData[pixelIndex + 2];
                    count++;
                }
            }

            const pixelIndex = (y * width + x) * 4;
            blurred[pixelIndex] = rTotal / count;
            blurred[pixelIndex + 1] = gTotal / count;
            blurred[pixelIndex + 2] = bTotal / count;
        }
    }

    return blurred;
}
