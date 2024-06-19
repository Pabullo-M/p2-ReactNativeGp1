import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MyStack, MyTabs } from './routes/navigation';
import { FilmesProvider } from './hooks/globalContext';

function App() {
  return (
    <FilmesProvider>
      <MyStack/>
    </FilmesProvider>
  );
}

export default App;