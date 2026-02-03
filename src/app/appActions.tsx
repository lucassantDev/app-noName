import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { globalStyles } from '../style/style'
import { useRouter } from "expo-router";

import {Settings} from 'lucide-react-native';

export default function appActions(){

    const router = useRouter()
    return (
        <>
            <View style={appActionsStyle.containerActions}>
                <View style={appActionsStyle.viewInitial}>
                    <TouchableOpacity style={appActionsStyle.imgUser}>
                        {/* imagem de perfil */}
                    </TouchableOpacity>

                    <TouchableOpacity style={appActionsStyle.settingsButton}>
                        <Settings/>
                    </TouchableOpacity>
                </View>
                <View>

                </View>

                <TouchableOpacity style={globalStyles.Button} onPress={()=> router.back()}>
                            <Text style={globalStyles.p}>Retornar a tela inicial</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const appActionsStyle = StyleSheet.create({
    containerActions:{
        width: '100%',
        height: '100%',
        borderWidth: 2,
        borderColor: 'red',
        backgroundColor: '#222222',
    },

    viewInitial:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '20%',
        borderWidth: 2,
        borderColor: 'red',
        backgroundColor: '#222222',
    },
    imgUser:{
        width: 60,
        height: 60,
        backgroundColor: 'white',
        borderRadius: 50,
        marginLeft: 25,
    },
    settingsButton:{
        width: 45,
        height: 45,
        backgroundColor: 'white',
        borderRadius: 50,
        marginRight: 25,
        alignItems: 'center',
        justifyContent: 'center',
    }
})