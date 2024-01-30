import React from "react"
import '../App.css'
// function IntroSection() {
//     return (
//         <section>
//             <h1 className="centered"> Lorem ipsum dolor </h1>
//             <h3 className="centered" style={{color: '#666'}}>sit amet consectetur adipisicing elit.</h3>
//         </section>
//     )
// }

// export default IntroSection

function IntroSection() {
    return (
        React.createElement('section',
        null,
        React.createElement('h1', { className: "centered" }, 'Lorem'))
    )
}

export default IntroSection