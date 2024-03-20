import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { HomePage } from '$pages/home';

import './styles/main.scss';

export const Main = () => <HomePage />;

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <Main />
    </StrictMode>,
);
