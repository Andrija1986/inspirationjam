import React from 'react';
import './App.css';
import Routings from './routes/Routings';
import ReactDOMClient from 'react-dom/client';


const root = ReactDOMClient.createRoot(document.querySelector('#root'))

root.render(<Routings />);


