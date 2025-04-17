import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { PrimeReactProvider } from 'primereact/api';


import './index.css';
import { RouterProvider } from 'react-router';
import { ruter } from './routes/router.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrimeReactProvider>
      <RouterProvider router={ruter} />
    </PrimeReactProvider>
  </StrictMode>
);
