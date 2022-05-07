import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "green",
      
    },

    text: {marginBottom: 10,},

    box:{
        width:80,
        height:80,
        justifyContent: 'center',
        alignItems: 'center',
      //  alignSelf: 'stretch',
        borderWidth: 1,
        backgroundColor: '#81c784',
        margin: 5,
        
    },

    boxText: {
        color: 'darkslategray',
        fontWeight: 'bold',
    },

    row:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'stretch',
     
        
    },

   
    footer:{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#1b5e20',
        borderWidth: 1,
        margin: 10,
        padding: 15,

        width: 359,
        height: 100,
    
        position: 'absolute',
        bottom: 0

    },

    containerButton:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#43a047',

        margin: 20,
        padding: 5,

        width: 300,
        height: 100,
    },
    titulo:{
        color: '#01579b',
        fontSize: 80,
        fontWeight: "bold",
      
    },
    texto:{
        color: '#01579b',
        fontSize: 25,
        fontWeight: "bold",
        margin: 10,
        bottom: 30
    }

})
