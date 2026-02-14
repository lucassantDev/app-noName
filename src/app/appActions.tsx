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
                <View style={appActionsStyle.displayOptions}>
                    <View style={appActionsStyle.optionsView}>
                        <TouchableOpacity style={appActionsStyle.buttonOptionsView}>
                            <Text>Iniciar nova meta</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={appActionsStyle.optionsView}>
                        <TouchableOpacity style={appActionsStyle.buttonOptionsView}>
                            <Text>Metas criadas</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={appActionsStyle.optionsView}></View>
                    {/* <View style={appActionsStyle.optionsView}></View> */}
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
    },
    optionsView:{
        width: 320,
        height: 120,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'red',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center"
    },
    displayOptions:{
        flex: 1,
        borderWidth: 2,
        gap: 15,
        borderColor: 'blue',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: '100%',
    },
    buttonOptionsView:{
        backgroundColor: "#FFFFFF",
        width: 140,
        padding: 12,
        alignItems: "center",
        borderRadius: 20,
    }
})