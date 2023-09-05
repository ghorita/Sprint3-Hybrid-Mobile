import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import gptImg from '../assets/gpt.jpeg';


export default function TelaGpt({ navigation }) {
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
            </View>
            <View style={{height: "100%", marginTop: 15}}>
                <TextInput placeholder="Escreva aqui sua mensagem" style={styles.input}/>
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
        padding: 10,
        borderRadius: 8,
        color: "white",
        marginHorizontal: 10,
        fontSize: 18
    }
})