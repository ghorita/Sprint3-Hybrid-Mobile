import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import  account from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Cadastro({ navigation }) {

    const[nome, setNome] = useState("");
    const[email, setEmail] = useState("");
    const[senha, setSenha] = useState("");

    return(
        <View style = {{ flex: 1, backgroundColor: "#42475C"}}>
            <Text style = {styles.title}>Cadastro</Text>

            <Text style = { styles.dados }>Nome</Text>
            <TextInput style= { styles.input } value={ nome } onChangeText={ setNome }/>

            <Text style = { styles.dados }>Email</Text>
            <TextInput style= { styles.input } value={ email } onChangeText={ setEmail }/>

            <Text style = { styles.dados }>Senha</Text>
            <TextInput style= { styles.input } value={ senha } onChangeText= { setSenha } secureTextEntry={true}/>

            <TouchableOpacity onPress={()=>{
                const usuarios = [{
                  nome, 
                  email,
                  senha
                }]
                AsyncStorage.setItem("USUARIOS", JSON.stringify(usuarios));
                alert("Usuario cadastrado com sucesso");
              }}>
              <Text style = {styles.btn}>
                Cadastrar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
              <Text style = {{ color: "white", textAlign: "center", marginTop: 15}}>Já tenho uma conta</Text>
            </TouchableOpacity>

            <MaterialComunnityIcons name="account"/>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
      color: "white",
      fontWeight: "bold",
      fontSize: 30,
      textAlign: "center",
      padding: 30
    },
  
    dados: {
      color: "white",
      fontSize: 18,
      marginLeft: 30,
      padding: 10,
    },
  
    input: {
      borderWidth: 1,
      borderColor: "white",
      marginHorizontal: 30,
      padding: 10,
      borderRadius: 8,
      color: "white"
    },
  
    btn: {
      backgroundColor: "#F9435D",
      textAlign: "center",
      color: "white",
      fontSize: 20,
      padding: 10,
      marginHorizontal: 80,
      borderRadius: 8,
      marginTop: 30
    }
  })