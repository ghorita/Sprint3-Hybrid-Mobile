import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {

    const[email, setEmail] = useState("");
    const[senha, setSenha] = useState("");


    return(
        <View style = {{ flex: 1, backgroundColor: "#42475C"}}>
        <Text style = {styles.title}>Login</Text>

        <Text style = { styles.dados }>Email</Text>
        <TextInput style= { styles.input } value={ email } onChangeText={ setEmail }/>

        <Text style = { styles.dados }>Senha</Text>
        <TextInput style= { styles.input } value={ senha } onChangeText= { setSenha } secureTextEntry={true}/>

        <TouchableOpacity onPress={()=>{
              AsyncStorage.getItem("USUARIOS")
              .then((info) => {
                const usuarios = JSON.parse(info);
                let achado = false;
                for (const user of usuarios) {
                  if (user.email === email && user.senha === senha) {
                    achado = true;
                    alert("Usuário logado");
        
                    // Defina uma chave no AsyncStorage para indicar que o usuário está logado
                    AsyncStorage.setItem("isLoggedIn", "true");
        
                    // Navegue para a página principal
                    navigation.navigate("Principal");
                  }
                }
                if (!achado) {
                  alert("Usuário ou senha incorretos");
                }
              })
              .catch((err) => alert("Erro ao ler a lista de usuários"));
            }}> 
              <Text style = {styles.btnLogin}>Login</Text>
            </TouchableOpacity>

        <TouchableOpacity onPress={()=> navigation.navigate("Cadastro")}> 
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