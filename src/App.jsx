import './App.css'
import Header from './components/Header'
import {ways} from './data'
import ReturnElementLi from './components/ReturnElemtntLi'
import Button from './components/Button/Button'
import { useState } from 'react'
import { differences } from './data'

function App() {
  const [contentType, setContenttype] = useState(null)

  function handleClick(type){
    setContenttype(type)
    console.log(contentType);
    
  }
  
  return (
    <>
    <div className='wrapper'>
      <Header/>
      <main className='main'>
        <section className='main__section'>
          <h3>Наш підхід до навчання</h3>
          <ul className='section_ul'>
            {/*вельми цікавий спосіб 0_0 */}
            {ways.map((way) =>(
              <ReturnElementLi key={way.title} {...way}/>
            ))}
          </ul>
        </section>
        <section>
          <h3>Lorem ipsum dolor sit amet</h3>
          <Button isActive={contentType === 'way'} onClick={() => handleClick("way")}>Button_1</Button>
          <Button isActive={contentType === 'easy'} onClick={() => handleClick("easy")}>Button_2</Button>
          <Button isActive={contentType === 'program'} onClick={() => handleClick("program")}>Button_3</Button>
          { !contentType ?  <p>Touch it</p> : null}
          { contentType ?  <p>{differences[contentType]}</p> : null}
        </section>
      </main>
    </div> 
    </>
  )
}

export default App
