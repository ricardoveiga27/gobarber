import React from 'react';

import GlobalStyle from './styles/global';
import SingIn from './pages/SingIn/index';
// import SingUp from './pages/SingUp/index';

const App: React.FC = () => (
  <>
    <SingIn />
    <GlobalStyle />
  </>
);

export default App;
