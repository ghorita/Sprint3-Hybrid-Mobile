import TelaLogin from './src/app/Login/login';
import TelaCadastro from './src/app/Cadastro/cadastro';
import TelaPrincipal from './src/app/Principal/principal';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { Screen, Navigator } = createBottomTabNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Navigator>
        <Screen name="Cadastro" component={TelaCadastro} options={{headerShown: false, tabBarIcon: ({color, size})=> <MaterialCommunityIcons name="account" size={size} color={color}/>}}/>
        <Screen name="Login" component={TelaLogin} options={{headerShown: false}}/>
        <Screen name="Principal" component={TelaPrincipal} options={{headerShown: false}}/>
      </Navigator>
    </NavigationContainer>
  )
}
