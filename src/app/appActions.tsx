import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { globalStyles } from '../style/style'

export default function appActions(){
    return (
        <>
            <View style={globalStyles.container}>
                <View>
                    <TouchableOpacity style={appActionsStyle.imgUser}>
                        {/* imagem de perfil */}
                    </TouchableOpacity>

                    <TouchableOpacity style={appActionsStyle.settingsButton}>
                        {/* icone de configuracao */}
                    </TouchableOpacity>
                </View>
                <View>

                </View>
            </View>
        </>
    )
}

const appActionsStyle = StyleSheet.create({
    imgUser:{
        width: 60,
        height: 60,
        
    },
    settingsButton:{
        width: 60,
        height: 60,
    }
})