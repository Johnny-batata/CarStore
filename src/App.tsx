import React from 'react';
import { Route } from 'react-router-dom';
import Login from './page/Login';
import { Container } from './page/Login/styles';

const App: React.FC = () => (
  <Container>
    <Route exact path="/" component={Login} />
  </Container>
);

export default App;
