import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

const HomeownerPage = lazy(() => import('./pages/HomeownerPage'))
const ProPage = lazy(() => import('./pages/ProPage'))

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomeownerPage />} />
          <Route path="/pros" element={<ProPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
