import { useRouter } from "expo-router";
import {Text, StyleSheet, View, TouchableOpacity} from "react-native";

export default function Settings(){

    const router = useRouter()

    return (
        <>
            <View style={settingsStyle.container}>
                <View style={settingsStyle.containerUser}>
                    <Text>
                        Lucas Ferreira
                    </Text>
                </View>
            </View>

            <TouchableOpacity style={settingsStyle.Button} onPress={() => router.back()}>
                <Text>
                    Tela Anterior
                </Text>
            </TouchableOpacity>
        </>
    )
}

const settingsStyle = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,

    },

    containerUser:{
        width: '100%',
        height: 100,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },

     Button:{
            width: 230,
            backgroundColor: 'blue',

            alignItems: 'center',
            padding: 15,
            borderRadius: 10
        },
})