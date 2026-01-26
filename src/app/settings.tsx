import { useRouter } from "expo-router";
import {Text, StyleSheet, View, TouchableOpacity} from "react-native";

export default function Settings(){

    const router = useRouter()

    return (
        <>
            <View style={settingsStyle.container}>
                <Text>
                    Config
                </Text>
            </View>

            <TouchableOpacity onPress={() => router.back()}>

            </TouchableOpacity>
        </>
    )
}

const settingsStyle = StyleSheet.create({
    container:{
        flex: 1,
    }
})