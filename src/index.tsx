import { createRoot } from 'react-dom/client';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Root } from './Root';
import React from 'react';

const container = document.getElementById('root') as HTMLElement;

createRoot(container).render(<Root />);
