import { View, Text } from 'react-native';
import TelaLogin from './src/app/Login/login';
import TelaCadastro from './src/app/Cadastro/cadastro';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const { Screen, Navigator } = createBottomTabNavigator();

export default function App() {
  return(
    <View style={{flex: 1}}>
      <TelaCadastro/>
    </View>
  )
}