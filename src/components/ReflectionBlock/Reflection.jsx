import './Reflection.css'
import reaction_img1 from '../img/Reaction-icon__very-diss.png'
import reaction_img2 from '../img/Reaction-icon__neutral.png'
import reaction_img3 from '../img/Reaction-icon__very-good.png'
import Button from '../Button/Button'
import { useState } from 'react'

function Reflection() {
    const reactionDiss = reaction_img1
    const reactionNetral = reaction_img2
    const reactionGood = reaction_img3

    function ReactionImg() {
        if (onClick === onClick) {
            console.log('1');
        }
        else {
            console.log('2');
        }
    }
    return (
        <div className='reflection__wrapper'>
            <div className="reflection__block">
                <h3 className='reflection__title'>Рефлексія</h3>
                <div className="rating__block">
                    <p className="reflection__rating_block">
                        Оціни, наскільки тобі сподобався сьогоднішній урок
                    </p>
                    <div className="rating__img_block">
                        <img src={reaction_img1} alt="reaction_img" className='rating__img'/>
                        <div className="rating__img_button">
                            <Button >Дуже погано</Button>
                            <Button >Нейтрально</Button>
                            <Button>Чудово</Button>
                        </div>
                    </div>
                    <p className="reflection__rating_block">
                       Напиши, що тобі сподобалось в уроці найбільше
                    </p>

                    <input type="text" className="reflection__input" maxLength={500} placeholder='Мені дуже сподобалось на цьому уроці -' />
                    <p className="reflection__input_subtitle">
                       Максимальна кількість символів: 500
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Reflection