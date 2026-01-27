import { useRouter } from "expo-router";
import {Text, StyleSheet, View, TouchableOpacity, TextInput} from "react-native";

export default function newAccount(){

    const router = useRouter()

    return(
        <>
            <View>
                <Text>Tela de Login</Text>
                <TouchableOpacity onPress={()=> router.back()}>
                    Retornar a tela inicial
                </TouchableOpacity>
            </View>
        </>
    )
}