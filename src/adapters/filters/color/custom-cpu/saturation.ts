import { SaturationOperation } from '@/core/domain/filters/interfaces/operations/color/saturation';

export const saturation: SaturationOperation =
    ({ value }) =>
    (image) => {
        const data = image.data;

        for (let i = 0; i < data.length; i += 4) {
            let r = data[i]; // Red
            let g = data[i + 1]; // Green
            let b = data[i + 2]; // Blue

            // Convert RGB to HSL
            // eslint-disable-next-line prefer-const
            let [h, s, l] = rgbToHsl(r, g, b);

            // Adjust saturation
            s += value;

            // Clamp saturation between 0 and 1
            s = Math.max(0, Math.min(s, 1));

            // Convert back to RGB
            [r, g, b] = hslToRgb(h, s, l);

            // Update the pixel data
            data[i] = r;
            data[i + 1] = g;
            data[i + 2] = b;
        }

        return image;
    };

// Helper function to convert RGB to HSL
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

// Helper function to convert HSL back to RGB
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
