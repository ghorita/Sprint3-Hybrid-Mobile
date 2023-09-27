import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button } from 'react-native';
import axios from 'axios';

API_KEY = 'AIzaSyAj6l1mKbQMX9iIKK51qpVp8DEy7T7UVKQ';

const apiCadastrar = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1'
})


export default function Cadastro({ navigation }) {

    const[nome, setNome] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[token, setToken] = useState(null);

    const cadastrar = ()=>{
      apiCadastrar.post('/accounts:signUp?key=' + API_KEY, {
        email, 
        password,
        returnSecureToken: true
      })
      .then( (response) =>{
        alert("Usuário cadastrado com sucesso!");
        navigation.navigate("Login");
      })
      .catch( (err)=>{
        alert("Erro: " + err);
      })
    }

    return(
        <View style = {{ flex: 1, backgroundColor: "#42475C"}}>
            <Text style = {styles.title}>Cadastro</Text>

            <Text style = { styles.dados }>Nome</Text>
            <TextInput style= {styles.input} value={nome} onChangeText={setNome}/>

            <Text style = { styles.dados }>Email</Text>
            <TextInput style= {styles.input} value={email} onChangeText={setEmail}/>

            <Text style = { styles.dados }>Senha</Text>
            <TextInput style= {styles.input} value={password} onChangeText= {setPassword} secureTextEntry={true}/>

            <TouchableOpacity onPress={cadastrar}>
              <Text style = {styles.btn}>
                Cadastrar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
              <Text style = {{ color: "white", textAlign: "center", marginTop: 15}}>Já tenho uma conta</Text>
            </TouchableOpacity>
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