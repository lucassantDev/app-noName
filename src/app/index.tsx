    import { useRouter } from "expo-router";
    import {Text, StyleSheet, View, TouchableOpacity} from "react-native";


    export default function Index(){

        const router = useRouter()

        return (
            <>
            <View style={estilo.container}>
                <Text style={estilo.title}>
                    Olá Usuário!
                </Text>
                
                <TouchableOpacity style={estilo.Button} onPress={() => router.push("./settings")}>
                <Text style={estilo.p}>
                        Iniciar Coleta
                </Text>
                </TouchableOpacity>
            </View>
            

            </>
        )
    }

    const estilo = StyleSheet.create({
        container:{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            gap: 50
        },

        title:{
            fontSize: 30,
            color: 'blue',
            fontWeight: "bold"
        },

        Button:{
            width: 230,
            backgroundColor: 'blue',

            alignItems: 'center',
            padding: 15,
            borderRadius: 10
        },

        titleData:{
            fontSize: 25,
            color: 'white'
        },

        p:{
            color: 'white',
            fontSize: 15,
        }
    })