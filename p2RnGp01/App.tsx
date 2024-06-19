import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/index';
import CadastroUsuario from './pages/cadastroUsuario';
import SelecaoFilme from './pages/selecaoFilme';
import { styles } from './pages/style';
import { ImageBackground, View } from 'react-native';
import background from './assets/image.png'
import { MyTabs } from './routes/navigation';
import { FilmesProvider } from './hooks/globalContext';

const Stack = createStackNavigator();
function App() {
  return (
    <FilmesProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CadastroUsuario"
            component={CadastroUsuario}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SelecaoFilme"
            component={MyTabs}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  </FilmesProvider>
);
}

export default App;