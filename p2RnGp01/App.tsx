import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/index';
import cadastroUsuario from './pages/cadastroUsuario';
import selecaoFilme from './pages/selecaoFilme';
import { styles } from './pages/style';
import { ImageBackground, View } from 'react-native';
import background from './assets/image.png'

const Stack = createStackNavigator();
function App() {
  return (
    // <ImageBackground source={background} style={styles.background}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Home' }}
          />
          <Stack.Screen
            name="cadastroUsuario"
            component={cadastroUsuario}
            options={{ title: 'Cadastro de Usuário' }}
          />
          <Stack.Screen
            name="selecaoFilme"
            component={selecaoFilme}
            options={{ title: 'Seleção de favoritos' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  // </ImageBackground>
);
}

export default App;