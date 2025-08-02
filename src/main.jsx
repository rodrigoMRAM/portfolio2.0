import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Index from './Index.jsx'
import { ThemeProvider } from "./context/ThemeContext.jsx";
import './i18n';
createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <Index />
  </ThemeProvider>
)
