import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MyStack, MyTabs } from './routes/navigation';
import { FilmesProvider } from './hooks/globalContext';
import { UserProvider } from './hooks/userContext';
import Draggable from 'react-native-draggable';
import { View } from 'react-native';
import ButtonComponente from './components/button';
import { BotaoFlutuante } from './components/Draggable';

function App() {
  return (
    <UserProvider>
      <FilmesProvider>
        <MyStack/>
      </FilmesProvider>
      <BotaoFlutuante eixoX={300} eixoY={-150}/>
    </UserProvider>
  );
}

export default App;