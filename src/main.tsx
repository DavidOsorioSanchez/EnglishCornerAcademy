import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { HeroUIProvider } from '@heroui/react';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </HeroUIProvider>
  </StrictMode>,
)