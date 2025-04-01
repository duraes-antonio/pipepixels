import { Paintbrush, Settings, Sliders } from 'lucide-react'; // Valid icons
import { OperationCategoryType } from './pipeline-sidebar.model';

export const operationCategories: OperationCategoryType[] = [
    {
        name: 'Basic',
        icon: <Settings size={20} />, // Valid icon: "Settings" for basic adjustments
        operations: [
            {
                name: 'Sharpness Adjustment',
                description:
                    'Enhance the clarity of the image by making the edges more defined.',
            },
            {
                name: 'Noise Reduction',
                description:
                    'Eliminate digital noise or unwanted pixels from the image.',
            },
            {
                name: 'Perspective Correction',
                description:
                    'Adjust the distortion of the image by correcting tilted lines or angles.',
            },
            {
                name: 'Add Border',
                description: 'Add a border or margin around the image.',
            },
        ],
    },
    {
        name: 'Color and Lighting',
        icon: <Sliders size={20} />, // Valid icon: "Sliders" for color and light adjustments
        operations: [
            {
                name: 'White Balance',
                description:
                    'Adjust the color temperature to ensure accurate colors.',
            },
            {
                name: 'Color Boost',
                description:
                    'Increase the intensity of a specific color or enhance the overall saturation.',
            },
            {
                name: 'Luminance Adjustment',
                description:
                    'Control the brightness of specific colors (e.g., reds or blues).',
            },
            {
                name: 'Color Correction',
                description:
                    'Adjust unwanted colors or change the hue of specific colors in the image.',
            },
        ],
    },
    {
        name: 'Creative Filters',
        icon: <Paintbrush size={20} />, // Valid icon: "Paintbrush" for artistic effects
        operations: [
            {
                name: 'HDR Filter (High Dynamic Range)',
                description:
                    'Apply a high dynamic range filter to enhance details in dark and bright areas.',
            },
            {
                name: 'Blur Filter',
                description:
                    'Apply an artistic or soft blur to parts of the image.',
            },
            {
                name: 'Vignette Filter',
                description:
                    'Darken or lighten the edges of the image to focus on the center.',
            },
            {
                name: 'Artistic Painting Effect',
                description:
                    'Apply a filter that transforms the image into a painting or drawing appearance.',
            },
        ],
    },
];
