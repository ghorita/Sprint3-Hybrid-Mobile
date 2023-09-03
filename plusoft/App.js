import TelaLogin from './src/app/Login/login';
import TelaCadastro from './src/app/Cadastro/cadastro';
import TelaPrincipal from './src/app/Principal/principal';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const { Screen, Navigator } = createBottomTabNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Navigator>
        <Screen name="Cadastro" component={TelaCadastro} options={{headerShown: false}}/>
        <Screen name="Login" component={TelaLogin} options={{headerShown: false}}/>
        <Screen name="Principal" component={TelaPrincipal} options={{headerShown: false}}/>
      </Navigator>
    </NavigationContainer>
  )
}
