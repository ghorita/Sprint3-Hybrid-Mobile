import { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function Cadastro() {
    const[email, setEmail] = useState("");
    const[senha, setSenha] = useState("");
    const[nome, setNome] = useState("");

    return(
        <View style = {{ flex: 1, backgroundColor: "#42475C"}}>
            <Text style = {styles.title}>Cadastro</Text>

            <Text style = { styles.dados }>Nome</Text>
            <TextInput style= { styles.input } value={ nome } onChangeText={ setNome }/>

            <Text style = { styles.dados }>Email</Text>
            <TextInput style= { styles.input } value={ email } onChangeText={ setEmail }/>

            <Text style = { styles.dados }>Senha</Text>
            <TextInput style= { styles.input } value={ senha } onChangeText= { setSenha }/>

            <Text style = { styles.btn }>Cadastrar</Text>
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