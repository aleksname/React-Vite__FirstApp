import './App.css'
import Header from './components/Header'
import CopySection from './components/CopySection'
import SecondMainSection from './components/SecondMainSection'
import IntroSection from './components/introSection'
import TabsSection from './components/TabsSection'
import FeedbackSection from './components/FeedbackSection'

function App() {
  const [tab, setTab] = useState('feedback')
  return (
    <>
      <div className='wrapper'>
        <div className="header__block">
          <Header/>
        </div>
        <main className='main__block'>
          <IntroSection />
          <TabsSection />
          
          <section className='section__block'>
            <CopySection/>
          </section>
          <section className='section__block'> 
            <SecondMainSection />
            {/* <FeedbackSection/> */}
          </section>
        </main>
    </div> 
    </>
  )
}

export default App
