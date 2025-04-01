import { memo, SyntheticEvent, useCallback, useState } from 'react';
import Image from 'next/image';
import { formatFileSize } from '@/app/shared/util/file-size';

export type ImageMetaData = {
    name: string;
    size: number;
    type: string;
    dimensions: {
        width: number;
        height: number;
    };
};

export function buildMetadata(
    event: SyntheticEvent<HTMLImageElement>,
    file: File,
): ImageMetaData {
    const { naturalWidth, naturalHeight } = event.currentTarget;
    return {
        name: file.name,
        size: file.size,
        type: file.type,
        dimensions: { width: naturalWidth, height: naturalHeight },
    };
}

export interface ImageListItemProps {
    image: File;
    onMetadataLoad: (metadata: ImageMetaData) => void;
}

function ImageItem(props: ImageListItemProps) {
    const { image, onMetadataLoad } = props;
    return (
        <Image
            className="place-self-center"
            width={175}
            height={175}
            src={URL.createObjectURL(image)}
            alt={image.name}
            onLoad={(e) => onMetadataLoad(buildMetadata(e, image))}
        />
    );
}

const ImageItemCached = memo(ImageItem);

function ImageMetadata(props: { metadata: ImageMetaData }) {
    const { metadata } = props;
    return (
        <div className="text-sm p-2 text-primary-text bg-primary">
            <dl className="line-clamp-2 break-all">
                <dt className="inline font-semibold">name:</dt>{' '}
                <dd className="inline">{metadata.name}</dd>
            </dl>
            <dl>
                <dt className="inline font-semibold">dimensions:</dt>{' '}
                <dd className="inline">
                    {metadata.dimensions.width}x{metadata.dimensions.height}
                </dd>
            </dl>
            <dl>
                <dt className="inline font-semibold">size:</dt>{' '}
                <dd className="inline">{formatFileSize(metadata.size)}</dd>
            </dl>
            <dl>
                <dt className="inline font-semibold">type:</dt>{' '}
                <dd className="inline">{metadata.type}</dd>
            </dl>
        </div>
    );
}

const ImageMetadataCached = memo(ImageMetadata);

function ImageListItemInternal(props: ImageListItemProps) {
    const { image, onMetadataLoad } = props;
    const [metadata, setMetadata] = useState<ImageMetaData>();
    const handleMetadataLoad = useCallback(
        (metadata: ImageMetaData) => {
            setMetadata(metadata);
            onMetadataLoad(metadata);
        },
        [onMetadataLoad],
    );
    return (
        <div className="border-primary rounded-sm border-2 h-full grid grid-rows-[1fr_auto]  w-[175px]">
            <ImageItemCached
                image={image}
                onMetadataLoad={handleMetadataLoad}
            />
            {metadata && <ImageMetadataCached metadata={metadata} />}
        </div>
    );
}

export const ImageListItem = memo(ImageListItemInternal);
