import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Index from './Index.jsx'
import { ThemeProvider } from "./context/ThemeContext";
import './i18n';
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "GTM-NRGM3FP8", 
};

TagManager.initialize(tagManagerArgs);


createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <Index />
  </ThemeProvider>
)
