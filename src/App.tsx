import React from 'react';

import GlobalStyle from './styles/global';
import SingIn from './pages/SingIn/index';
// import SingUp from './pages/SingUp/index';

import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SingIn />
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;
