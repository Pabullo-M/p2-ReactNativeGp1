import { createStackNavigator } from '@react-navigation/stack';
import cadastroUsuario from '../pages/cadastroUsuario';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Favoritos from '../pages/favoritos';
import SelecaoFilme from '../pages/selecaoFilme';
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="cadastroUsuario" component={cadastroUsuario} />
    </Stack.Navigator>
  );
}

const Tab = createMaterialTopTabNavigator();

export function MyTabs() {
  return (
      <Tab.Navigator style={{marginTop: 25}}>
        <Tab.Screen
          name="SelecaoFilme"
          component={SelecaoFilme}
          options={{
            tabBarLabel: 'Seleção de Filmes',
            tabBarStyle: { backgroundColor: 'white' },
            tabBarLabelStyle: { fontSize: 16 },
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'gray',
            tabBarIndicatorStyle: { backgroundColor: 'blue' },
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="movie" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Favoritos"
          component={Favoritos}
          options={{
            tabBarLabel: 'Favoritos',
            tabBarStyle: { backgroundColor: 'white' },
            tabBarLabelStyle: { fontSize: 16 },
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'gray',
            tabBarIndicatorStyle: { backgroundColor: 'blue' },
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="heart" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
  );
}