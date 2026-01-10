import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Visitors } from './pages/Visitors'
import { Contact } from './pages/Contact'
import { Donate } from './pages/Donate'
import { Gallery } from './pages/Gallery'
import { Privacy } from './pages/Privacy'
import { Terms } from './pages/Terms'
import { Disclaimers } from './pages/Disclaimers'
import { NotFound } from './pages/NotFound'

// Ministry Pages
import { SundaySchool } from './pages/ministries/SundaySchool'
import { YouthMinistry } from './pages/ministries/YouthMinistry'
import { AntiochianWomen } from './pages/ministries/AntiochianWomen'
import { MensGroup } from './pages/ministries/MensGroup'
import { Choir } from './pages/ministries/Choir'

// Leadership Pages
import { FatherGabriel } from './pages/leadership/FatherGabriel'
import { ParishCouncil } from './pages/leadership/ParishCouncil'

// History Pages
import { HistoryExpanded } from './pages/history/HistoryExpanded'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="visitors" element={<Visitors />} />
          <Route path="contact" element={<Contact />} />
          <Route path="donate" element={<Donate />} />
          <Route path="gallery" element={<Gallery />} />
          
          {/* Ministry Routes */}
          <Route path="ministries/sunday-school" element={<SundaySchool />} />
          <Route path="ministries/youth-ministry" element={<YouthMinistry />} />
          <Route path="ministries/antiochian-women" element={<AntiochianWomen />} />
          <Route path="ministries/mens-group" element={<MensGroup />} />
          <Route path="ministries/choir" element={<Choir />} />
          
          {/* Leadership Routes */}
          <Route path="leadership/father-gabriel" element={<FatherGabriel />} />
          <Route path="leadership/parish-council" element={<ParishCouncil />} />
          
          {/* History Routes */}
          <Route path="history" element={<HistoryExpanded />} />
          
          {/* Legal Pages */}
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="disclaimers" element={<Disclaimers />} />
          
          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
