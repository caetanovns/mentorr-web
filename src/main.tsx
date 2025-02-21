import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/home.tsx'
import Buscar from './pages/busca.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Buscar />
  </StrictMode>,
)
