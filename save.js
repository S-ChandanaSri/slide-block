
import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function save({ attributes }) {
    const { images } = attributes;

 
    const uniqueImages = Array.from(new Set(images));

    console.log("Unique Images:", uniqueImages); 

    return (
        <div style={{ width: '100%', overflow: 'hidden' }}>
            <div style={{ display: 'flex', overflowX: 'auto', whiteSpace: 'nowrap' }}>
                <div className='poin' style={{ width: "2600px", display: "flex" }}></div>
                

                {uniqueImages.map((image, index) => (
                    <div key={index} style={{ flex: '0 0 auto', marginRight: '20px', maxWidth: '100%' }}>
                        <div className="styi" style={{ marginRight: "1rem", border: "1px solid black", width: "100%" }}>
                            <img src={image.url} alt={image.title} title={image.title} style={{ maxWidth: '100%', maxHeight: 'auto', display: 'block' }} />
                            <p>{image.title}</p>
                        </div>
                    </div>
                ))}

                
            </div>
        </div>
    );
}
