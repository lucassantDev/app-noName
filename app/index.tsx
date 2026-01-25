import {Text, StyleSheet, View, TouchableOpacity} from "react-native";


export default function Index(){
    return (
        <>
        <View style={estilo.container}>
            <Text style={estilo.title}>
                Olá Usuário!
            </Text>

            <TouchableOpacity style={estilo.Button}>
                <Text style={estilo.titleData}>
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
        justifyContent: 'center'
    },

    title:{
        fontSize: 45,
        fontWeight:"bold",
        margin: 50,
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
    }
})