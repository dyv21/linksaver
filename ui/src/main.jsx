import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app.jsx'
import {AppProvider} from "./context.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AppProvider >
     <App />
   </AppProvider>
  </StrictMode>,
)
