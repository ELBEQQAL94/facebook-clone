import React from 'react';

// Components
import { Header, Sidebar } from './components';

// Styles
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
