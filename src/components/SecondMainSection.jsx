import {differences } from "../data"
import Button from "./Button/Button"
import { useState } from 'react'


function SecondMainSection() {
 const [contentType, setContenttype] = useState(null)

  function handleClick(type){
    setContenttype(type)
    console.log(contentType);
    
  }
    return (
        <div>
            <h3>Lorem ipsum dolor sit amet</h3>
              <Button isActive={contentType === 'way'} onClick={() => handleClick("way")}>Button_1</Button>
              <Button isActive={contentType === 'easy'} onClick={() => handleClick("easy")}>Button_2</Button>
              <Button isActive={contentType === 'program'} onClick={() => handleClick("program")}>Button_3</Button>
              { !contentType ?  <p>Touch it</p> : null}
              { contentType ?  <p>{differences[contentType]}</p> : null}
        </div>
    )
}

 export default SecondMainSection