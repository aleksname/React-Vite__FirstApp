// коретктний рефакторінг 
import { ways } from "../data"
import ReturnElementLi from './ReturnElementLi'

function CompositionSection(){
    return(
    <div className='main__section'>
          <h3>Наш підхід до навчання</h3>
          <ul className='section_ul'>
            {/*вельми цікавий спосіб 0_0 */}
            {ways.map((way) =>(
              <ReturnElementLi key={way.title} {...way}/>
            ))}
          </ul>
      </div>
    )
}


export default CompositionSection