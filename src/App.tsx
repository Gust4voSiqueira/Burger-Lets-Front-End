import React from 'react';
import Routes from './routes';
import AuthProvider from './services/hooks/useAuth';

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
