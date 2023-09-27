import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

const API_KEY = 'AIzaSyAj6l1mKbQMX9iIKK51qpVp8DEy7T7UVKQ';

const apiLogin = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1'
})


export default function Login({ navigation }) {

    const[email, setEmail] = useState("teste@fiap.com");
    const[password, setPassword] = useState("12345678");
    const[token, setToken] = useState(null);

    const logar = () =>{
      apiLogin.post('/accounts:signInWithPassword?key='+ API_KEY, {
        email, 
        password,
        returnSecureToken: true
      })
      .then( (response)=>{ 
        setToken(response.idToken);
        alert("Usuário logado com sucesso!");
        navigation.navigate("Principal");
      })
      .catch( (err)=>{
        alert("Erro: " + err);
      })
    }


    return(
        <View style = {{ flex: 1, backgroundColor: "#42475C"}}>
        <Text style = {styles.title}>Login</Text>

        <Text style = { styles.dados }>Email</Text>
        <TextInput style= { styles.input } value={ email } onChangeText={ setEmail }/>

        <Text style = { styles.dados }>Senha</Text>
        <TextInput style= { styles.input } value={ password } onChangeText= { setPassword } secureTextEntry={true}/>

        <TouchableOpacity onPress={logar}> 
              <Text style = {styles.btnLogin}>Login</Text>
            </TouchableOpacity>

        <TouchableOpacity onPress={()=>{ navigation.navigate("Cadastro")}}> 
          <Text style = {{ color: "white", textAlign: "center", marginTop: 15}}>Criar conta</Text>
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
  
    btnLogin: {
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