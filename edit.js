
import React, { useState } from 'react';

import { Button } from '@wordpress/components';
import { useBlockProps } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const { images } = attributes;
    const [showDiv, setShowDiv] = useState(false);
   
    const onChangeImages = event => {
        const selectedImages = Array.from(event.target.files);
        const newImages = selectedImages.map(image => ({
            url: URL.createObjectURL(image),
            title: image.name 
        }));
        const updatedImages = [...(images ?? []), ...newImages];
        setAttributes({ images: updatedImages });
    };

   

    const toggleDiv = event => {
        event.stopPropagation(); 
        setShowDiv(!showDiv);
    };

   

    const buttonStyle = {
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        bottom: '150px'
    };

    return (
        <div {...useBlockProps()}>
            <div style={{ backgroundColor: 'lightblue', padding: '20px', height: '300px', position: 'relative'}}>
                
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    style={{ display: 'none' }}
                    onChange={onChangeImages}
                    ref={input => input && input.click()} 
                />

                


                <Button style={buttonStyle} onClick={toggleDiv}>
                    {images && images.length ? ('Change Images') : ('Select Images')}
                </Button>
            </div>
        </div>
    );
}
