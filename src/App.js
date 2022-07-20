import React, { Component } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Accueil from './pages/Accueil';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Accueil />} />
          
      </Routes>
      </BrowserRouter>
    );
  }
}

export default App;