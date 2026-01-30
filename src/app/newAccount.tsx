import { useRouter } from "expo-router";
import {Text, View, TouchableOpacity, TextInput} from "react-native";

import {globalStyles} from '../style/style'

export default function newAccount(){

    const router = useRouter()

    return(
        <>
            <View style={globalStyles.container}>
                <Text style={globalStyles.titleLogin}>Realize o login!</Text>

                <View style={globalStyles.inputsView}>
                    <TextInput
                        style={globalStyles.input}
                        placeholder="Nome"
                    />

                    <TextInput
                        style={globalStyles.input}
                        placeholder="Sobrenome"
                    />
                    <TextInput
                        style={globalStyles.input}
                        placeholder="E-mail"
                    />

                    <TextInput
                        style={globalStyles.input}
                        placeholder="Senha"
                    />
                    <TextInput
                        style={globalStyles.input}
                        placeholder="Confirme a senha novamente"
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
