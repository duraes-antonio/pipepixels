import { memo, useCallback } from 'react';
import {
    ImageListItem,
    ImageMetaData,
} from '@/app/components/image-list/image-list-item';

type ImageListProps = {
    images: File[];
};

function ImageListInternal(props: ImageListProps) {
    const { images } = props;
    const imageMetaData = new Map<string, ImageMetaData>();
    const onMetadataLoad = useCallback((metadata: ImageMetaData) => {
        imageMetaData.set(metadata.name, metadata);
    }, []);
    return (
        <ol className="gap-4 grid grid-cols-[repeat(auto-fill,minmax(175px,1fr))] justify-items-center">
            {images.map((image, index) => (
                <li key={index}>
                    <ImageListItem
                        image={image}
                        onMetadataLoad={onMetadataLoad}
                    />
                </li>
            ))}
        </ol>
    );
}

export const ImageList = memo(ImageListInternal);
