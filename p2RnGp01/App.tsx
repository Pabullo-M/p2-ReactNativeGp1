import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MyStack, MyTabs } from './routes/navigation';
import { FilmesProvider } from './hooks/globalContext';
import { UserProvider } from './hooks/userContext';

function App() {
  return (
    <UserProvider>
      <FilmesProvider>
        <MyStack/>
      </FilmesProvider>
    </UserProvider>
  );
}

export default App;