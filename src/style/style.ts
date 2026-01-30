import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    containerIndex:{
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
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    titleIndex:{
        fontSize: 30,
        color: 'blue',
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

    },

    Button:{
        width: '90%',
        backgroundColor: 'blue',

        alignItems: 'center',
        padding: 15,
        borderRadius: 10,

        marginTop: 10,
    },

    titleLogin:{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'blue',
        marginTop: 10,
        marginBottom: 40
    },

    p:{
        color: 'white',
        fontSize: 15,
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