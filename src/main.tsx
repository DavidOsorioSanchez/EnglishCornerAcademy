import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { HeroUIProvider } from '@heroui/react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App.tsx'

const ClientId : string = import.meta.env.VITE_CLIENT_GOOGLE_ID as string;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={ClientId}>
      <HeroUIProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
      </HeroUIProvider>
    </GoogleOAuthProvider>
  </StrictMode>,
)