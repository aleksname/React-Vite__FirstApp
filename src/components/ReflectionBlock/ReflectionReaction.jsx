import React, { useState } from 'react';
import reaction_img1 from '../img/Reaction-icon__very-diss.png';
import reaction_img2 from '../img/Reaction-icon__neutral.png';
import reaction_img3 from '../img/Reaction-icon__very-good.png';
import Button from '../Button/Button';

function ReflectionReaction() {
    const [activeImage, setActiveImage] = useState(reaction_img1);

    const handleButtonClick = (image) => {
        setActiveImage(image);
    };

    return (
        <>
            <div className="rating__img_block">
                <img src={activeImage} alt="reaction_img" className='rating__img'/>
                <div className="rating__img_button">
                    <Button onClick={() => handleButtonClick(reaction_img1)}>Дуже погано</Button>
                    <Button onClick={() => handleButtonClick(reaction_img2)}>Нейтрально</Button>
                    <Button onClick={() => handleButtonClick(reaction_img3)}>Чудово</Button>
                </div>
            </div>
        </>
    );
}

export default ReflectionReaction;
