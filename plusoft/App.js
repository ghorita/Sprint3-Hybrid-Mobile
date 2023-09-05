import TelaLogin from './src/app/Login/login';
import TelaCadastro from './src/app/Cadastro/cadastro';
import TelaPrincipal from './src/app/Principal/principal';
import TelaGpt from './src/app/Chatgpt/gpt';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const { Screen, Navigator } = createBottomTabNavigator();

export default function App() {
  return(
    <NavigationContainer>
      
      <Navigator barStyle={{backgroundColor: "green"}}>
        <Screen name="Gpt" component={TelaGpt} options={{headerShown: false, tabBarIcon: ({ color }) => (
                                                      <MaterialCommunityIcons name="registered-trademark" color={color} size={26}/>
        ),}}
      />
        <Screen name="Cadastro" component={TelaCadastro} options={{headerShown: false, tabBarIcon: ({ color }) => (
                                                      <MaterialCommunityIcons name="registered-trademark" color={color} size={26}/>
        ),}}
      />
        <Screen name="Login" component={TelaLogin} options={{headerShown: false, tabBarIcon: ({color}) => (
                                                              <MaterialCommunityIcons name="login" color={color} size={26}/>
        )}}/>
        <Screen name="Principal" component={TelaPrincipal} options={{headerShown: false, tabBarIcon: ({ color }) => (
                                                      <MaterialCommunityIcons name="home" color={color} size={26}/>
        ),}}/>
      </Navigator>
    </NavigationContainer>
  )
}
