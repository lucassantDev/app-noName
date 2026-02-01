import { useRouter } from "expo-router";
import {Text, View, TouchableOpacity} from "react-native";

import {globalStyles} from '../style/style'

export default function Index(){

    const router = useRouter()

    return (
        <>
        <View style={globalStyles.containerIndex}>
            <Text style={globalStyles.titleIndex}>
                Barro-Macaxeira
            </Text>
            
            <TouchableOpacity style={globalStyles.Button} onPress={() => router.push("./newAccount")}>
            <Text style={globalStyles.p}>
                    Criar Conta
            </Text>
            </TouchableOpacity>

            <TouchableOpacity style={globalStyles.Button} onPress={() => router.push("./loginUser")}>
            <Text style={globalStyles.p}>
                    Fazer Login
            </Text>
            </TouchableOpacity>
        </View>
        

        </>
    )
}
