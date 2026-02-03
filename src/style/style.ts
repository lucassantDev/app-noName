import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    
    containerIndex:{
        backgroundColor: '#222222',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 50
    },

    containerUser:{
        width: '100%',
        height: 100,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },

     container:{
        backgroundColor: '#222222',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    titleIndex:{
        fontSize: 30,
        color: '#FFFFFF',
        fontWeight: "bold"
    },
    
    input:{
        width: '90%',
        height: 50,
        padding: 13,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'blue',
        marginBottom: 10,
        
        backgroundColor: '#FFFFFF',
        color: '#10167D',

    },

    Button:{
        width: '90%',
        backgroundColor: '#10167D',
        borderWidth: 1,
        borderColor: '#FFFFFF',

        alignItems: 'center',
        padding: 15,
        borderRadius: 10,

        marginTop: 10,
    },

    titleLogin:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginTop: 10,
        marginBottom: 40
    },

    p:{
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'bold',
    },

    inputsView:{
        width: '100%',
        height: 'auto',
        paddingBlock: 30,

        // flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    }
})