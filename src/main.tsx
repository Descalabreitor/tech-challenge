import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'primereact/resources/themes/arya-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeflex/primeflex.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
