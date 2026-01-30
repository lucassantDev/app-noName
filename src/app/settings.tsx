import { useRouter } from "expo-router";
import {Text, StyleSheet, View, TouchableOpacity} from "react-native";

import { globalStyles } from "../style/style";

export default function Settings(){

    const router = useRouter()

    return (
        <>
            <View style={settingsStyle.container}>
                <View style={globalStyles.containerUser}>
                    <Text>
                        
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

    

     Button:{
            width: 230,
            backgroundColor: 'blue',

            alignItems: 'center',
            padding: 15,
            borderRadius: 10
        },
})