import { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';


export default function Login() {

    const[email, setEmail] = useState("");
    const[senha, setSenha] = useState("");

    return(
        <View style = {{ flex: 1, backgroundColor: "#42475C"}}>
        <Text style = {styles.title}>Login</Text>

        <Text style = { styles.dados }>Email</Text>
        <TextInput style= { styles.input } value={ email } onChangeText={ setEmail }/>

        <Text style = { styles.dados }>Senha</Text>
        <TextInput style= { styles.input } value={ senha } onChangeText= { setSenha }/>

        <Text style = { styles.btnLogin }>Login</Text>
        <Text style = {{ color: "white", textAlign: "center", marginTop: 15}}>Esqueceu a senha?</Text>
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
      borderRadius: 8
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