import { View, Text, TextInput, TouchableOpacity } from "react-native"
import { globalStyles } from "../style/style"

import { useRouter } from "expo-router";
import { useState } from "react";
export default function loginUser(){

    const router = useRouter()

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    function actionsScreen(){
        if(email === 'lucasfdesantana002@gmail.com' && senha === '9090135'){
            router.push("./appActions")
        }else{
            alert('Não foi possível acessar sua conta')
        }
    }


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
                            onChangeText={(t) => setEmail(t)}
                        />
    
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Senha"
                            onChangeText={(e) => setSenha(e)}
                        />
    
                        <TouchableOpacity style={globalStyles.Button} onPress={() => actionsScreen()}>
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