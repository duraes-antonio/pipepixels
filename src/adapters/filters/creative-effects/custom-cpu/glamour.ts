import { GlamourOperation } from '@/core/domain/filters/interfaces/operations/creative-effects/glamour';

export const glamour: GlamourOperation =
    ({ value }) =>
    (image) => {
        const data = image.data;
        const width = image.width;
        const height = image.height;

        // O valor de "value" será mapeado de 0 a 1
        const glamourFactor = value / 100;

        // Passo 1: Suavizar a imagem (desfoque suave)
        const blurredData = blurImage(data, width, height, glamourFactor);

        // Passo 2: Ajustar brilho e saturação
        adjustBrightnessAndSaturation(blurredData, glamourFactor);

        // Passo 3: Ajustar o contraste para dar mais vida à imagem
        adjustContrast(blurredData, glamourFactor);

        // Atualiza os dados da imagem com o efeito glamour
        for (let i = 0; i < data.length; i++) {
            data[i] = Math.min(blurredData[i], 255); // Garante que os valores de cor não ultrapassem 255
        }

        return image;
    };

// Função auxiliar para suavizar a imagem (desfoque suave)
function blurImage(
    data: Uint8ClampedArray,
    width: number,
    height: number,
    factor: number,
): Uint8ClampedArray {
    const radius = Math.max(1, Math.floor(factor * 5)); // Desfoque mais intenso com o aumento do fator glamour
    const blurred = new Uint8ClampedArray(data);

    for (let y = radius; y < height - radius; y++) {
        for (let x = radius; x < width - radius; x++) {
            let rTotal = 0,
                gTotal = 0,
                bTotal = 0;
            let count = 0;

            for (let ky = -radius; ky <= radius; ky++) {
                for (let kx = -radius; kx <= radius; kx++) {
                    const pixelIndex = ((y + ky) * width + (x + kx)) * 4;
                    rTotal += data[pixelIndex];
                    gTotal += data[pixelIndex + 1];
                    bTotal += data[pixelIndex + 2];
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

// Função auxiliar para ajustar brilho e saturação
function adjustBrightnessAndSaturation(
    data: Uint8ClampedArray,
    factor: number,
) {
    const brightnessFactor = 1 + factor * 0.5; // Aumenta o brilho conforme o fator de glamour
    const saturationFactor = 1 + factor * 0.3; // Aumenta a saturação conforme o fator de glamour

    for (let i = 0; i < data.length; i += 4) {
        let r = data[i];
        let g = data[i + 1];
        let b = data[i + 2];

        // Ajuste de brilho (simples multiplicação)
        r *= brightnessFactor;
        g *= brightnessFactor;
        b *= brightnessFactor;

        // Ajuste de saturação (convertendo para HSL e ajustando a saturação)
        // eslint-disable-next-line prefer-const
        let [h, s, l] = rgbToHsl(r, g, b);
        s = Math.min(s * saturationFactor, 1); // Limitar a saturação ao máximo de 1

        // Convertendo de volta para RGB
        const [newR, newG, newB] = hslToRgb(h, s, l);

        data[i] = Math.min(newR, 255);
        data[i + 1] = Math.min(newG, 255);
        data[i + 2] = Math.min(newB, 255);
    }
}

// Função auxiliar para ajustar o contraste
function adjustContrast(data: Uint8ClampedArray, factor: number) {
    const contrastFactor = 1 + factor * 0.5; // Aumenta o contraste conforme o fator de glamour

    for (let i = 0; i < data.length; i++) {
        data[i] = Math.min(128 + contrastFactor * (data[i] - 128), 255); // Aumentar o contraste
    }
}

// Funções auxiliares para conversão RGB <-> HSL
function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;

    if (delta !== 0) {
        s = delta / (1 - Math.abs(2 * l - 1));
        if (max === r) {
            h = (g - b) / delta + (g < b ? 6 : 0);
        } else if (max === g) {
            h = (b - r) / delta + 2;
        } else {
            h = (r - g) / delta + 4;
        }
        h /= 6;
    }

    return [h, s, l];
}

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
    let r = l;
    let g = l;
    let b = l;

    if (s !== 0) {
        const hue2rgb = (p: number, q: number, t: number) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };

        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;

        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}
