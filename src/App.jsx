import { useState } from 'react'
import '../src/index.css'
import Header from './components/Header/Header'
import TabsSection from './components/TabsSection'
import AnogramPage from './components/AnogramPage'
import Crossword from './components/Crossword'
import Reflection from './components/ReflectionBlock/Reflection'
import Footer from './components/Footer/Footer'

function App() {
  const [tab, setTab] = useState('anograma')

  return (
    <div className='wrapper'>
      <div className='start__screen'>
        <Header />
        <main className='main__block'>
            <strong className='brain__title'>Тренуй мозок</strong>
            <TabsSection active={tab} onChange={(current) => setTab(current)}/>
            {tab === 'crossword' && <>
              <Crossword/>
            </>}
            {tab === 'anograma' && <AnogramPage />}
        </main>
      </div> 
        <div className="reflection__blocks">
          <Reflection />
      </div>
      <Footer/>
    </div>
  )
}

export default App
