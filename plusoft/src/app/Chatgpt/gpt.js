import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Modal, FlatList } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import gptImg from '../assets/gpt.jpeg';
import axios from 'axios';

const apiMensagem = axios.create({
    baseURL: 'https://sprint4-abe0b-default-rtdb.firebaseio.com'
});


export default function TelaGpt({ navigation }) {

    const[mensagem, setMensagem] = useState("");
    const[lista, setLista] = useState([]);
    const[modalVisivel, setModalVisivel] = useState(false);

    const enviarMensagem = ()=>{

        const dados = {mensagem};
        setLista([...lista, dados]);

        apiMensagem.post('/mensagemBot.json', dados)
        .then( (response) =>{
        })
        .catch( (err)=>{
            alert("Erro ao enviar a mensagem");
        })
    }

    const deletar = () => {

        const dados = {mensagem};
        setLista([dados]);

        apiMensagem.delete('/mensagemBot.json', dados)
        .then( (response) =>{
            alert("Mensagem deletada com sucesso!")
        })
        .catch( (err) => {
            alert("Erro ao deletar a mensagem");
        })
    }

    return(
        <View style={{flex: 1}}>
            <View style={{marginTop: 40, flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: 20}}>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <View style={{flexDirection: "row"}}>
                    <MaterialCommunityIcons name="keyboard-backspace" color={"black"} size={40}
                        onPress={()=> navigation.navigate("Principal")}/>
                    <Image source={gptImg} style={styles.user}/>
                    </View>
                    <View>
                        <Text style={{fontWeight: "bold", fontSize: 20}}>Mateo</Text>
                        <Text>Online</Text>
                    </View>
                </View>
                <View style={{flexDirection: "row", justifSelf: "flex-end"}}> 
                    <Octicons name="three-bars" color={"black"} size={36}/>
                </View>
            </View>
            <View style={{backgroundColor: "#C7CED5", height: "73%", marginTop: 20, alignItems: "center"}}>
                <Text style={styles.firstMsg}>
                    Olá! Eu sou o Mateo, em que posso ajudá-lo(a) hoje?
                </Text>
                <Text style={styles.msg}>
                    Olá Gostaria de saber como eu faço para agendar uma reunião sobre CRM
                </Text>
                <Text style={styles.msg}>
                    Claro! para agendar uma reunião de CRM você pode clicar AQUI, ou seguir os seguintes passos:
                    Entre no site da plusoft.como
                    Coloque o seu mouse sobre o menu "Produtos"
                    Clique em Omni CRM
                    Desça um pouo o site até onde apareça uma opção chamada 
                    "Agenda uma Demo".
                    Fale com nosso atendente pelo WhatsApp.
                    Caso não consiga encontrar,
                    você pode ligar para o número
                    (11)XXXX-XXXX
                </Text>
                <View style={{marginTop: 20}}>
                    <FlatList
                            data={lista}
                            renderItem={({ item }) => (
                                <View style={{backgroundColor: "gray", marginHorizontal: 40, marginTop: 30, borderRadius: 6, padding: 5, flexDirection: "row"}}>
                                    <Modal
                                    animationType='fade'
                                    transparent={true}
                                    visible={modalVisivel}
                                    onRequestClose={() => {
                                        setModalVisivel(!modalVisivel);
                                    }}
                                    >
                                        <View style={{flex: 1, marginTop: 200, backgroundColor: "gray", width: 100, maxHeight: 120, alignItems: "center", flexDirection: "column", marginLeft: 120, backgroundColor: "gray"}}>
                                            <TouchableOpacity onPress={() => setModalVisivel(!modalVisivel)} style={{alignItems: "center"}}>
                                                <MaterialCommunityIcons name="close" color={"#000"} size={30}/>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={deletar} style={{marginTop: 20, flexDirection: "row", alignItems: "center"}}>
                                                <MaterialCommunityIcons name="trash-can-outline" color={"#000"} size={30}/>
                                                <Text>Delete</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </Modal>
                                    <View style={{flexDirection: "row"}}>
                                        <Text style={{width: 270}}>{item.mensagem}</Text>
                                        <TouchableOpacity onPress={() => setModalVisivel(true)}>
                                            <MaterialCommunityIcons name="chevron-down" color={"#000"} size={30}/>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                        />
                </View>
            </View>
            <View style={{maxHeight: 50, marginTop: 15, flexDirection: "row", flex: 1, alignItems: "center"}}>
                <TextInput placeholder="Escreva aqui sua mensagem" style={styles.input} value={mensagem} onChangeText={setMensagem}/>
                <TouchableOpacity onPress={enviarMensagem}>
                    <MaterialCommunityIcons name="send" color={"#2B92FE"} size={30} onPress={enviarMensagem}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    user: {
        width: 60,
        height: 60,
        borderRadius: 100,
        marginHorizontal: 5,
    },

    firstMsg:{
        width: 300,
        backgroundColor: "gray",
        marginTop: 30,
        borderRadius: 8,
        padding: 7
    },
    
    msg: {
        width: 300,
        backgroundColor: "gray",
        marginTop: 15,
        padding: 7,
        borderRadius: 8
    },
    
    input:{
        backgroundColor: "#B9C2CA",
        borderRadius: 8,
        color: "white",
        marginHorizontal: 20,
        fontSize: 18, 
        flex: 1, 
        padding: 10
    }
})