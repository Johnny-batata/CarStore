import React from 'react';
import { Route } from 'react-router-dom';
import Login from './page/Login';
import { Container } from './page/GeneralStyles/styles';
import Home from './page/Home';

const App: React.FC = () => (
  <Container>
    <Route exact path="/home" component={Home} />
    <Route exact path="/" component={Login} />
  </Container>
);

export default App;
