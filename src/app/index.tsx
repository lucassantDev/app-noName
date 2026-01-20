import {Text, StyleSheet, View} from "react-native";


export default function Index(){
    return (
        <>
        <View style={estilo.container}>
            <Text>
                Olá Usuário!
            </Text>
        </View>
           

        </>
    )
}

const estilo = StyleSheet.create({
    container:{
        flex: 1
    }
})