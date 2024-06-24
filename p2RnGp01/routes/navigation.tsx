import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Favoritos from '../pages/favoritos/favoritos';
import SelecaoFilme from '../pages/selecaoFilme/selecaoFilme';
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import CadastroUsuario from '../pages/cadastroUsuario/cadastroUsuario';
import HomeScreen from '../pages/index';
import { FilmesProvider } from '../context/fimesContext';
import HomePage from '../pages/homePage/homePage'; 
import { BotaoFlutuante } from '../components/Draggable/Draggable';

const Stack = createStackNavigator();

export function MyStack() {
  return (
    
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
            name="HomePage"
            component={MyTabs}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const Tab = createMaterialTopTabNavigator();

export function MyTabs() {
  return (
      <Tab.Navigator style={{marginTop: 25}}>
        <Tab.Screen
          name="HomePage1"
          component={HomePage}
          options={{
            tabBarLabel: 'Pagina Principal',
            tabBarStyle: { backgroundColor: 'white' },
            tabBarLabelStyle: { fontSize:  10},
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'gray',
            tabBarIndicatorStyle: { backgroundColor: 'blue' },
            tabBarIcon: ({ color}) => (
              <MaterialCommunityIcons name="popcorn"color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="SelecaoFilme"
          component={SelecaoFilme}
          options={{
            tabBarLabel: 'Seleção de Filmes',
            tabBarStyle: { backgroundColor: 'white' },
            tabBarLabelStyle: { fontSize: 10 },
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'gray',
            tabBarIndicatorStyle: { backgroundColor: 'blue' },
            tabBarIcon: ({ color}) => (
              <MaterialCommunityIcons name="movie" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Favoritos"
          component={Favoritos}
          options={{
            tabBarLabel: 'Favoritos',
            tabBarStyle: { backgroundColor: 'white' },
            tabBarLabelStyle: { fontSize: 10 },
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'gray',
            tabBarIndicatorStyle: { backgroundColor: 'blue' },
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="heart" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
  );
}