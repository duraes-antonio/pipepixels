import { TintOperation } from '@/core/domain/filters/interfaces/operations/color/tint';

export const tint: TintOperation =
    ({ value }) =>
    (image) => {
        const data = image.data;

        // O valor de "value" pode ser interpretado como um ajuste no matiz (Hue)
        const tintAdjustment = (value / 100) * 180; // Mapeia o valor para o intervalo de -180 a 180

        for (let i = 0; i < data.length; i += 4) {
            const r = data[i]; // Red
            const g = data[i + 1]; // Green
            const b = data[i + 2]; // Blue

            // Converte RGB para HSL
            // eslint-disable-next-line prefer-const
            let [h, s, l] = rgbToHsl(r, g, b);

            // Ajusta o matiz (Hue) baseado no valor fornecido
            h += tintAdjustment / 360; // O ajuste é uma fração de 360 (circular)
            h = (h + 1) % 1; // Garante que o valor de H fique no intervalo [0, 1]

            // Converte de volta para RGB
            const [newR, newG, newB] = hslToRgb(h, s, l);

            // Atualiza os valores RGB da imagem
            data[i] = newR;
            data[i + 1] = newG;
            data[i + 2] = newB;
        }

        return image;
    };

// Função auxiliar para converter RGB para HSL
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

// Função auxiliar para converter HSL de volta para RGB
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
