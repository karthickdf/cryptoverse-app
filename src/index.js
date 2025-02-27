import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'; // ✅ Import Redux Provider
import store from './app/store'; // ✅ Import your Redux store
import App from './App1';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}> {/* ✅ Wrap App with Provider */}
    <Router>
      <App />
    </Router>
  </Provider>,
);

