import React, {StrictMode} from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';

const appRouting = (
    <Router>
        <Routes>
            <Route exact path="/" component={App} />
        </Routes>
    </Router>
);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
