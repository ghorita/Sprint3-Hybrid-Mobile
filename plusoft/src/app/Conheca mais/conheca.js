import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// importar imagem


export default function Conheca(){
    return(
        <View>
            <View>
                <ImageBackground source={img}>
                    <Text>
                        31/08/2022 | Plusoft
                    </Text>
                    <Text>
                        GPTW: Plusoft é certificada como um excelente lugar para trabalhar
                    </Text>
                </ImageBackground>
            </View>
            <View>
                <Text>
                    Nossos colaboradores responderam  à pesquisa de clima e, de acordo com a metodologia do Great Place to Work Brasil
                    (GPTW), a Plusoft foi certificada como um excelente lugar para trabalhar.
                </Text>
                <Text>
                    Temos muito orgulho em receber esse conhecimento por nossos esforços em promover um ambiente corporativo saudável e 
                    produtivo, e que isso tem deixado nosso colaboradores satisfeitos de trabalharem conosco.
                </Text>
                <Text>
                    Nosso CEO, Solemar Andrade, revela que ser GPTW é uma constatação do que a Plusoft faz bem e o que é preciso para
                    melhorar o sentimento de pertencimento e satisfação de trabalhar. “O que importa para nós não é o selo, mas a opinião
                    dos colaboradores. Aplicamos a pesquisa com esse objetivo. Queremos, genuinamente, ouvir a opinião dos funcionários
                    e ajustar o que for possível dentro das nossas condições.” 
                </Text>
                <Text>
                    Como especialistas em customer experience (CX) e human experience (HX), mostramos que a humanização começa de dentro para
                    fora, e nossa expertise é aplicada internamente. 
                </Text>
                <Text>
                     Estamos buscando contribuir cada vez mais para a sociedade e meio ambiente, e promover ações em nosso dia a dia que
                    mostrem o nosso comprometimento com o bem-estar dos colaboradores.
                </Text>
                <Text>
                    Temos uma comunicação saudável e próxima com o time, e estamos muito felizes com esse reconhecimento.
                </Text>
            </View>
            <View style={{flexDirection: "row", justifyContent: "center"}}>
                <MaterialCommunityIcons name="whatsapp" color={"green"} size={60}
                    onPress={()=> navigation.navigate('Whatsapp')} style={styles.icons}/>

                <MaterialCommunityIcons name="robot" color={"#4BA8C5"} size={60}
                    onPress={()=> navigation.navigate('Gpt')} style={styles.icons}/>
            </View>
        </View>
    )
}