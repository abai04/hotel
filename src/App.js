
import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Header from './components/Header';
import MainRoutes from './routes/MainRoutes';

const App = () => {
  const [rus, setRus] = useState(false)
  return (
    
    <div>
      <Header rus={rus} setRus={setRus}/>
      <MainRoutes rus={rus} setRus={setRus}/>
    </div>
  );
};

export default App;