import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { init } from 'tsv-tracker';

init({ siteId: 'tsv_348046c107e5', apiKey: 'TSV-7ce051a0bf982427c352cd8ebf2b31a92babf8a9f0096987' });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
