import React, { useState } from 'react';

export function Carrousel({ images }) {
    const [index, setIndex] = useState(0);

    const handleClick = (direction) => {
        const nextIndex = direction === 'next' ? (index + 1) % images.length : (index - 1 + images.length) % images.length;
        setIndex(nextIndex);
    };

    return (
        <div className="carrousel">
            {images.length > 1 && (
                <>
                    <img src='images/common/Chevron.png' alt='left-arrow' id='buttonPrev' data-testid='leftArrow' onClick={() => handleClick('prev')}></img>
                    <img src='images/common/Chevron.png' alt='right-arrow'id='buttonNext' data-testid='rightArrow' onClick={() => handleClick('next')}></img>
                </>
            )}
            <div className='carrousel-img'>
                <img src={images[index]} alt={`Slide ${index + 1}`} />
            </div>            
            {images.length > 1 && (
                <span className="slide-counter" data-testid='counter'>{index + 1}/{images.length}</span>
            )}
        </div>
    );
}
