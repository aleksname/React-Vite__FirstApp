// коретктний рефакторінг 
// import { ways } from "../data"
import ReturnElementLi from './ReturnElementLi'
import logo from './img/crossword.png'

function Crossword(){
    return(
      <div className='main__section'>
        <img src={logo} alt="crosword" />
          {/* <ul className='section_ul'>
            {ways.map((way) =>(
              <ReturnElementLi key={way.title} {...way}/>
            ))}
          </ul> */}
      </div>
    )
}


export default Crossword