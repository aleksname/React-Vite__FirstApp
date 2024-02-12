import './App.css'
import Header from './components/Header/Header'
import CopySection from './components/CopySection'
import SecondMainSection from './components/SecondMainSection'
import IntroSection from './components/introSection'
import TabsSection from './components/TabsSection'
import FeedbackSection from './components/FeedbackSection'
import { useState } from 'react'

function App() {
  const [tab, setTab] = useState('feedback')
  return (
    <>
      <div className='wrapper'>
        <Header />
        
        <main className='main__block'>
          <IntroSection />
          <TabsSection active={tab} onChange={(current) => setTab(current)}/>
          {tab === 'main' && <>
            <CopySection/>
            <SecondMainSection />
          </>}
          {tab === 'feedback' && <FeedbackSection/>}
        </main>
    </div> 
    </>
  )
}

export default App
