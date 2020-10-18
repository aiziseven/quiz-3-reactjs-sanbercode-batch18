import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/routes/Routes';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import { NavProvider } from './components/routes/NavContext';
import NavRoute from './components/routes/NavRoute';

function App() {
  return (
    <Router>
      <NavProvider>
        <NavRoute />
        <Content>
          <Routes />
        </Content>
        <Footer />
      </NavProvider>
    </Router>
  );
}

export default App;
