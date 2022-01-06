import React from 'react';
import { Route } from 'react-router-dom';
import Login from './page/Login';
import { Container } from './page/GeneralStyles/styles';
import Home from './page/Home';
import CarList from './page/CarsList';

const App: React.FC = () => (
  <Container>
    <Route exact path="/carslist" component={CarList} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/" component={Login} />
  </Container>
);

export default App;
