import reaction_img1 from '../img/Reaction-icon__very-diss.png'
import reaction_img2 from '../img/Reaction-icon__neutral.png'
import reaction_img3 from '../img/Reaction-icon__very-good.png'
import Button from '../Button/Button'

function ReflectionReaction() {
    return (
        <>
             <div className="rating__img_block">
                <img src={reaction_img1} alt="reaction_img" className='rating__img'/>
                    <div className="rating__img_button">
                        <Button >Дуже погано</Button>
                        <Button >Нейтрально</Button>
                        <Button>Чудово</Button>
                    </div>
            </div>
        </>
    )
}

export default ReflectionReaction