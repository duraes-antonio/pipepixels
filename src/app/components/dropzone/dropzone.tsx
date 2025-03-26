'use client';

import React, { memo, useContext, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import styles from './dropzone.module.scss';
import { ImagesContext } from '@/app/shared/state/images.state';
import { ImageList } from '@/app/components/image-list/image-list';

const texts = {
    title: 'Drag and drop the images to get started!',
    titleActive: 'Drop the files here...',
    subtitle:
        'Edit multiple images at once with the professional batch tool. Apply crops, resizing, filters, and effects quickly, save your settings in a macro, and reuse them whenever needed.',
    button: 'Choose a file',
};

function DragDropInput() {
    const { setState } = useContext(ImagesContext);

    const onDrop = (acceptedFiles: File[]) => {
        setState(acceptedFiles);
    };

    const { getRootProps, getInputProps, isFocused, isDragActive } =
        useDropzone({ onDrop });

    const titleParagraph = useMemo(
        () => (
            <p
                className={`${isDragActive || isFocused ? 'text-primary' : 'text-primary-text'} text-2xl font-semibold`}>
                {isDragActive || isFocused ? texts.titleActive : texts.title}
            </p>
        ),
        [isDragActive, isFocused],
    );

    const dropzoneClasses = useMemo(
        () => (isDragActive || isFocused ? `border-primary` : `border-border`),
        [isDragActive, isFocused],
    );
    return (
        <div
            {...getRootProps()}
            className={`${dropzoneClasses} border-dashed border-2 items-center flex flex-col box-border p-6 gap-4 rounded-2xl cursor-pointer bg-background`}>
            <div className="w-[min(600px,100%)] flex-col flex items-center gap-6">
                <input {...getInputProps()} />
                {titleParagraph}
                <div className={`${styles.uploadImage}`}>
                    <svg
                        id="splash-drop-icon"
                        width="144"
                        height="144"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        className="fill-secondary-text dark:fill-white">
                        <path d="m2.4181 18.932-.88153-2.6572c-.15261-.47904-.11194-.99876.11334-1.4482.22542-.44773.61956-.78751 1.0956-.9445l10.376-3.6535c1.0084-.31165 2.0787.2517 2.3927 1.2593l2.5187 7.6819-3.3372-1.2593c-.30284-.11333-.64271.01615-.79338.30224l-2.8713 5.6922-2.6194-1.2593c-.25747-.12309-.56528-.061529-.7556.15112l-3.0217 2.8349-1.3349-4.1054zm13.599-11.504 2.2046-4.1762c.48035-.90871 1.5959-1.2713 2.5187-.81856l8.9412 4.6343c.44898.23275.785.63688.9319 1.1208.15189.4749.11119.99045-.11334 1.4356l-3.778 7.1908-1.3979-3.2994c-.12273-.30199-.45918-.45643-.76819-.35261l-6.5233 2.0779-1.423-4.2565c-.26042-.79413-.82707-1.4514-1.5742-1.826-.74599-.37996-1.6147-.43909-2.4053-.16371l-10.275 3.6283c-.79626.25664-1.4549.82441-1.826 1.5742-.39061.74691-.45443 1.6222-.17631 2.4179l.86894 2.7201.89412 2.5942 2.6068 7.8204c.26042.79413.82707 1.4514 1.5742 1.826.43924.21468.92155.32664 1.4104.32743.33841.001.67464-.05428.99487-.16371l10.364-3.6409c.79626-.25664 1.4549-.82441 1.826-1.5742.39061-.74691.45443-1.6222.17631-2.4179l-.10074-.30224h.06297c1.544.79997 3.4442.19665 4.2439-1.3475l6.3722-12.291c.79997-1.544.19665-3.4442-1.3475-4.2439l-8.9412-4.6343c-1.544-.79997-3.4442-.19665-4.2439 1.3475l-2.2046 4.2139m9.5717 7.6741 1.5742 3.778-1.889 3.6395c-.48035.90871-1.5959 1.2713-2.5187.81856l-1.2593-.62966-1.889-5.6796zm-4.7099 11.435c-.22542.44773-.61956.78751-1.0956.9445l-10.376 3.6535c-.97969.33024-2.0446-.17712-2.4053-1.146l-.7556-2.4053 3.1477-3.0994 2.7453 1.3727c.1533.06298.32524.06298.47854 0 .16013-.04975.29241-.16378.3652-.31483l2.9342-5.8559 3.778 1.4734.71782 2.1409.60448 1.7882c.14485.4823.09513 1.0021-.13853 1.4482zM8.4285 2.461h.61539v.61539a.61539.61539 0 0 0 1.2308 0V2.461h.61539a.61539.61539 0 0 0 0-1.2308h-.61539V.61481a.61539.61539 0 0 0-1.2308 0v.61539H8.4285a.61539.61539 0 0 0 0 1.2308zM24.429 29.538h-.61539v-.61539a.61539.61539 0 0 0-1.2308 0v.61539h-.61539a.61539.61539 0 0 0 0 1.2308h.61539v.61539a.61539.61539 0 0 0 1.2308 0v-.61539h.61539a.61539.61539 0 0 0 0-1.2308zM3.6591 7.6918a2 2 0 1 0-2-2 2 2 0 0 0 2 2zm0-3a1 1 0 1 1-1 1 1 1 0 0 1 1-1zM29 23a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"></path>
                        <circle cx="6.0883" cy="17.303" r="1.875"></circle>
                        <circle cx="20.641" cy="8.0821" r="1.875"></circle>
                    </svg>
                </div>
                <span className="text-secondary-text text-lg">
                    {texts.subtitle}
                </span>
                <button className={styles.uploadButton}>{texts.button}</button>
            </div>
        </div>
    );
}

function DropzoneInternal() {
    const { state } = useContext(ImagesContext);
    const component = useMemo(
        () => (state.length ? <ImageList images={state} /> : <DragDropInput />),
        [state],
    );
    return component;
}

export const Dropzone = memo(DropzoneInternal);

export default Dropzone;
