import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, FlatList } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import wppWallpaper from '../assets/wppImg.jpeg';
import bot from '../assets/bot.jpeg';
import axios from 'axios';

const apiMensagem = axios.create({
    baseURL: 'https://sprint4-abe0b-default-rtdb.firebaseio.com'
});

export default function WhatsApp({ navigation }) {

    const[mensagem, setMensagem] = useState("");
    const[lista, setLista] = useState([]);

    const enviarMensagem = ()=>{

        const dados = {mensagem};
        setLista([...lista, dados]);

        apiMensagem.post('/mensagem.json', dados)
        .then( (response) =>{
        })
        .catch( (err)=>{
            alert("Erro ao enviar a mensagem");
        })
    }

    return(
        <View style={{flex: 1}}>
            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#1F1F1F", marginTop: 40, height: "8%"}}>
                <View style={{flexDirection: "row", gap: 10}}>
                    <MaterialCommunityIcons name="keyboard-backspace" color={"#2B92FE"} size={40}
                                onPress={()=> navigation.navigate("Principal")}/> 
                    <FontAwesome name="user-circle" color={"white"} size={50}/>
                    <View>
                        <Text style={{color: "white", fontSize: 16}}>Lucas</Text>
                        <Text style={{color: "white", fontSize: 13}}>Online</Text>
                </View>
                </View>
                <View style={{flexDirection: "row", gap: 30}}>
                    <AntDesign name="videocamera" color={"#2B92FE"} size={35}/>
                    <Foundation name="telephone" color={"#2B92FE"} size={35}/>
                </View> 
            </View>
            <View style={{backgroundColor: "red", height: "77%"}}>
                <ImageBackground source={wppWallpaper} style={styles.wppImg}>
                    <FlatList
                        data={lista}
                        renderItem={({ item }) => (
                            <View style={{backgroundColor: "white", marginHorizontal: 40, marginTop: 30, borderRadius: 6, padding: 5}}>
                                <Text>{item.mensagem}</Text>
                            </View>
                        )}
                    />
                </ImageBackground>
            </View>
            <View style={{backgroundColor: "#1F1F1F", height: "10%", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly"}}>
                <AntDesign name="plus" color={"#2B92FE"} size={30}/>
                <TextInput style={styles.input} value={mensagem} onChangeText={setMensagem}/>
                <MaterialCommunityIcons name="send" color={"#2B92FE"} size={30} onPress={enviarMensagem}/>
                <MaterialCommunityIcons name="sticker-outline" color={"#2B92FE"} size={30}/>
                <AntDesign name="camerao" color={"#2B92FE"} size={30}/>
                <FontAwesome name="microphone" color={"#2B92FE"} size={30}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#333333", 
        paddingHorizontal: 70,
        borderRadius: 20,
        paddingVertical: 10
    },

    wppImg:{
        height: "100%",
        width: "100%"
    }
})
