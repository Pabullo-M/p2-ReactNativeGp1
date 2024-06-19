import { createStackNavigator } from '@react-navigation/stack';
import cadastroUsuario from '../pages/cadastroUsuario';

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="cadastroUsuario" component={cadastroUsuario} />
    </Stack.Navigator>
  );
}