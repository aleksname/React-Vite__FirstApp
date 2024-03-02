import './Reflection.css'
import ReflectionReaction from './ReflectionReaction'

function Reflection() {
    return (
        <div className='reflection__wrapper'>
            <div className="reflection__block">
                <h3 className='reflection__title'>Рефлексія</h3>
                <div className="rating__block">
                    <p className="reflection__rating_block">
                        Оціни, наскільки тобі сподобався сьогоднішній урок
                    </p>
                    <ReflectionReaction/>
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