import React from 'react';
import {createRoot} from 'react-dom/client';
import './style/style.css'
import NotedApp from './notedApp.jsx'

const root= createRoot(document.getElementById('root'));
root.render(<NotedApp/>)