import './App.css'
import Header from './components/Header'
import CopySection from './components/CopySection'
import SecondMainSection from './components/SecondMainSection'
import IntroSection from './components/IntroSection'

function App() {
  return (
    <>
      <div className='wrapper'>
        <div className="header__block">
          <Header/>
        </div>
        <main className='main__block'>
          <IntroSection/>
          <section className='section__block'>
            <CopySection/>
          </section>
          <section className='section__block'> 
            <SecondMainSection/>
          </section>
        </main>
    </div> 
    </>
  )
}

export default App
