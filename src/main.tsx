import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { init } from 'tsv-tracker';

init({ siteId: 'tsv_348046c107e5', apiKey: 'TSV-e54635e5bf6e92c0848a7e40930035385157e0f27fffe391' });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
