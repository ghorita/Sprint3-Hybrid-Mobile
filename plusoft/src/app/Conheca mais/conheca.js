import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, ScrollView, Linking } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import banner from '../assets/banner.png';

export default function Conheca({ navigation }){

    const twitter = ()=>{
        Linking.openURL('https://twitter.com/Plusoft');
    }

    const instagram = ()=>{
        Linking.openURL('https://www.instagram.com/plusofthx/');
    }

    const youtube = ()=>{
        Linking.openURL('https://www.youtube.com/channel/UC-vaFIAcqCqzjQkGb3Qz3Bw');
    }

    const linkedin = ()=>{
        Linking.openURL('https://www.linkedin.com/company/plusoft/');
    }

    const facebook = ()=>{
        Linking.openURL('https://www.facebook.com/PLUSOFT');
    }

    return(
        <ScrollView>
            <View style={{flex: 1}}>
                <View>
                    <ImageBackground source={banner} style={styles.imgBanner}>
                        <MaterialCommunityIcons name="keyboard-backspace" color={"white"} size={40} style={styles.seta}
                                onPress={()=> navigation.navigate("Principal")}/> 
                        <Text style={styles.data}>
                            31/08/2022 | Plusoft
                        </Text>
                        <Text style={styles.titulo}>
                            GPTW: Plusoft é certificada como um excelente lugar para trabalhar
                        </Text>
                    </ImageBackground>
                </View>
                <View style={{marginHorizontal: 30, marginTop: 40}}>
                    <Text style={styles.espacamento}>
                        Nossos colaboradores responderam  à pesquisa de clima e, de acordo com a metodologia do Great Place to Work Brasil
                        (GPTW), a Plusoft foi certificada como um excelente lugar para trabalhar.
                    </Text>
                    <Text style={styles.espacamento}>
                        Temos muito orgulho em receber esse conhecimento por nossos esforços em promover um ambiente corporativo saudável e 
                        produtivo, e que isso tem deixado nosso colaboradores satisfeitos de trabalharem conosco.
                    </Text>
                    <Text style={styles.espacamento}>
                        Nosso CEO, Solemar Andrade, revela que ser GPTW é uma constatação do que a Plusoft faz bem e o que é preciso para
                        melhorar o sentimento de pertencimento e satisfação de trabalhar. “O que importa para nós não é o selo, mas a opinião
                        dos colaboradores. Aplicamos a pesquisa com esse objetivo. Queremos, genuinamente, ouvir a opinião dos funcionários
                        e ajustar o que for possível dentro das nossas condições.” 
                    </Text>
                    <Text style={styles.espacamento}>
                        Como especialistas em customer experience (CX) e human experience (HX), mostramos que a humanização começa de dentro para
                        fora, e nossa expertise é aplicada internamente. 
                    </Text>
                    <Text style={styles.espacamento}>
                        Estamos buscando contribuir cada vez mais para a sociedade e meio ambiente, e promover ações em nosso dia a dia que
                        mostrem o nosso comprometimento com o bem-estar dos colaboradores.
                    </Text>
                    <Text style={styles.espacamento}>
                        Temos uma comunicação saudável e próxima com o time, e estamos muito felizes com esse reconhecimento.
                    </Text>
                </View>
                <View style={{justifyContent: "center", flexDirection: "row", gap: 20, marginTop: 40, marginBottom: 40}}> 
                    <TouchableOpacity onPress={twitter}>
                        <MaterialCommunityIcons name="twitter" color={"gray"} size={40}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={instagram}>
                        <MaterialCommunityIcons name="instagram" color={"gray"} size={40}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={youtube}>
                        <MaterialCommunityIcons name="youtube" color={"gray"} size={40}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={linkedin}>
                        <MaterialCommunityIcons name="linkedin" color={"gray"} size={40}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={facebook}>
                        <MaterialCommunityIcons name="facebook" color={"gray"} size={40}/>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    icons: {
        paddingHorizontal: 100
      },

    imgBanner: {
        width: "100%",
        height: 300
      },

    data:{
        color: "white",
        marginTop: 60,
        fontSize: 12, 
        marginLeft: 30
    },

    titulo:{
        color: "white",
        fontWeight: "bold",
        marginLeft: 30, 
        paddingVertical: 10,
        fontSize: 16
    },

    espacamento:{
        marginTop: 10
    },

    seta:{
        marginLeft: 20,
        marginTop: 30
    }

})