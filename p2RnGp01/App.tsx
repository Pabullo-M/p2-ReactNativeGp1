import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MyStack, MyTabs } from './routes/navigation';
import { FilmesProvider } from './context/fimesContext';
import { UserProvider } from './context/userContext';
import Draggable from 'react-native-draggable';
import { View } from 'react-native';
import ButtonComponente from './components/button/button';
import { BotaoFlutuante } from './components/Draggable/Draggable';

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