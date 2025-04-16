import { TemperatureOperation } from '@/core/domain/filters/interfaces/operations/color/temperature';

export const temperature: TemperatureOperation =
    ({ value }) =>
    (image) => {
        const data = image.data;

        // Definindo o ajuste de temperatura baseado no valor entre -100 e 100
        const temperatureAdjustment = value;

        for (let i = 0; i < data.length; i += 4) {
            const r = data[i]; // Red
            const g = data[i + 1]; // Green
            const b = data[i + 2]; // Blue

            // Se o valor de "value" for positivo (aquecimento), aumenta o vermelho
            // Se for negativo (resfriamento), aumenta o azul
            if (value > 0) {
                // Aquecimento (mais vermelho)
                data[i] = clamp(r + temperatureAdjustment, 0, 255); // Red
                data[i + 2] = clamp(b - temperatureAdjustment, 0, 255); // Blue
            } else if (value < 0) {
                // Resfriamento (mais azul)
                data[i] = clamp(r + temperatureAdjustment, 0, 255); // Red
                data[i + 2] = clamp(b - temperatureAdjustment, 0, 255); // Blue
            }

            // O canal verde (g) não sofre alteração na maioria dos casos
            // mas pode ser ajustado se desejado para maior controle
        }

        return image;
    };

// Função auxiliar para garantir que os valores de RGB fiquem entre 0 e 255
function clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, value));
}
