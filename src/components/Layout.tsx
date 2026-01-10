import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

export function Layout() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  
  return (
    <div className={`min-h-screen flex flex-col ${isHome ? 'bg-red' : 'bg-cream'}`}>
      <Header />
      <main className={`flex-1 max-w-7xl mx-auto w-full ${isHome ? '' : 'pt-16 md:pt-20'}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
