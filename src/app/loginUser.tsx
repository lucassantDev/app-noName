import { View, Text, TextInput, TouchableOpacity } from "react-native"
import { globalStyles } from "../style/style"

import { useRouter } from "expo-router";

export default function loginUser(){

    const router = useRouter()

    return(
        <>
            <View style={globalStyles.container}>
                    <Text style={globalStyles.titleLogin}>
                        Bem-vindo(a) de volta!
                    </Text>
    
                    <View style={globalStyles.inputsView}>
                        
                        <TextInput
                            style={globalStyles.input}
                            placeholder="E-mail"
                        />
    
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Senha"
                        />
    
                        <TouchableOpacity style={globalStyles.Button} onPress={()=> router.back()}>
                            <Text style={globalStyles.p}>Entrar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={globalStyles.Button} onPress={()=> router.back()}>
                            <Text style={globalStyles.p}>Retornar a tela inicial</Text>
                        </TouchableOpacity>
                    </View>
            </View>
            </>
    )
}