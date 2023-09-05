import { View, Text, TextInput, ImageBackground, StyleSheet, Image } from 'react-native';
import banner from '../assets/banner.png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import bot from '../assets/bot.jpeg';



export default function Principal({ navigation }) {
    return(
        <View style={{ flex: 1 }}>
        <View style={{flex: 1}}>
          <ImageBackground source={banner} style={styles.imgBanner}>
            <TextInput style={ styles.inputHome }/>
            <Text style={{ textAlign: "center", color: "white", fontSize: 20, fontWeight: "bold",
                            padding: 20, color: "white"}}>
              Plusoft Hike
            </Text>
            <View style={{ width: "40%", flex: 1, alignSelf: "center"}}>
              <Text style={{color: "white", textAlign: "center"}}>
                  Automatize processos e tenha mais tempo para tarefas estratégicas
              </Text>
              <Text style={{ color: "white", borderWidth: 2,borderColor: "white", textAlign: "center", borderRadius: 15,
              padding: 5, marginTop: 20}}>
                Conheça mais
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{flex: 1, width: "65%",  alignSelf: "center"}}>
          <Text style={{padding: 20, fontSize: 24, textAlign: "center"}}>
            Temos um time de especialistas que domina o negócio
          </Text>
          <Text style={{textAlign: "center"}}>
            Pessoas querem ser ouvidas e ter respostas
            rápidas e assertivas das suas demandas. Para 
            isso, é preciso investir na experiência das 
            pessoas, ou Human Experience(HX), a verdadeira
            fonte de vantagem competitiva da sua empresa.
            A plusoft oferece portifólio completo de soluções,
            separadas por verticais, para sua companhia e
            voces chegarem lá!
          </Text>
        </View>
        <View style={{flexDirection: "row", justifyContent: "center"}}>
        <MaterialCommunityIcons name="whatsapp" color={"green"} size={60}
            onPress={()=> navigation.navigate('Login')} style={styles.icons}/>

          <MaterialCommunityIcons name="robot" color={"#4BA8C5"} size={60}
            onPress={()=> navigation.navigate('Gpt')} style={styles.icons}/>
        </View>
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
      fontWeight: 400
    },
  
    input: {
      borderWidth: 1,
      borderColor: "white",
      marginHorizontal: 30,
      padding: 10,
      borderRadius: 8
    },
  
    inputHome: {
      backgroundColor: "white",
      padding: 8,
      marginTop: 30,
      marginHorizontal: 30,
      borderRadius: 10
    },
  
    btnLogin: {
      backgroundColor: "#F9435D",
      textAlign: "center",
      fontWeight: 400,
      color: "white",
      fontSize: 20,
      padding: 10,
      marginHorizontal: 80,
      borderRadius: 8,
      marginTop: 30
    },

    imgBanner: {
      width: "100%",
      height: 300
    },

    botImg: {
      width: 50,
      height: 50
    },

    icons: {
      paddingHorizontal: 100
    }
  })