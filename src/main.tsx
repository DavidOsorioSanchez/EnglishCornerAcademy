import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { HeroUIProvider } from '@heroui/react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.CLIENT_GOOGLE_ID}>
      <HeroUIProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
      </HeroUIProvider>
    </GoogleOAuthProvider>
  </StrictMode>,
)