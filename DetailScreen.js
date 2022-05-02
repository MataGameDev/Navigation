import React from 'react';
import {StyleSheet,Button,View, Text} from 'react-native';

function DetailScreen ({navigation}) {
    return (
        <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',backgroundColor: 'violet'}}>
            <Text>Details Screen</Text>
            <View style={styles.containerButton}>
            <Button 
                title="Atras"
                onPress={() => navigation.goBack()}
            />
            <Button 
                title="Ir a Home"
                onPress={() => navigation.navigate('Home')}
            />
            <Button 
                title="Mantenerse en Detalle"
                onPress={() => navigation.push('Details')}
            />

            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    containerButton:{
        flexDirection: 'column',
        justifyContent:'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        margin:20,
        padding: 5,
        width: 300,
        height: 100,
    
    }
})
export default DetailScreen;