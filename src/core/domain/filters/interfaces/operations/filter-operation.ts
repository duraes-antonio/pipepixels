export interface BasicOperationSettings {
    value: number;
}

export type FilterHandler = (image: ImageData) => ImageData;

export type FilterOperation<Params = BasicOperationSettings> = (
    settings: Params,
) => FilterHandler;

export enum FilterType {
    Saturation = 'Saturation',
    Temperature = 'Temperature',
    Tint = 'Tint',
    Vibrance = 'Vibrance',

    Bloom = 'Bloom',
    Glamour = 'Glamour',
    Grain = 'Grain',
    Monochrome = 'Monochrome',

    Brightness = 'Brightness',
    Contrast = 'Contrast',
    Exposure = 'Exposure',
    Highlights = 'Highlights',

    Blur = 'Blur',
    Clarity = 'Clarity',
    Sharpen = 'Sharpen',
    Smooth = 'Smooth',
}
